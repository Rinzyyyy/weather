import React, { useState, useRef, useEffect } from "react";

const Input = ({ setInput }) => {
  //set fire fox focusOn
  const inputRef = useRef();
  useEffect(() => {
    if (inputRef.current && navigator.userAgent.indexOf("Firefox") !== -1) {
      inputRef.current.focus();
    }
  }, []);

  //  citiy changeing rerender
  const inputHandler = () => {
    window.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        setInput(e.target.value);
        inputRef.current.blur();
      }
    });
    window.addEventListener("click", (e) => {
      inputRef.current.focus();
    });
  };
  return (
    <div className="inputStyle">
      <input
        type="text"
        list="citylist"
        placeholder="London"
        onChange={inputHandler}
        autoFocus="autoFocus"
        ref={inputRef}
      />
      <datalist id="citylist">
        <option value="Beijing" />
        <option value="Taipei" />
        <option value="New Taipei" />
        <option value="Tainan" />
        <option value="Taichung" />
        <option value="Kaohsiung" />
        <option value="Hsinchu" />
        <option value="Tokyo" />
        <option value="Seoul" />
        <option value="Manila" />
        <option value="Jakarta" />
        <option value="Yangon" />
        <option value="Singapore" />
        <option value="Tehran" />
        <option value="Istanbul" />
        <option value="Jerusalem" />
        <option value="Riyadh" />
        <option value="Sines" />
        <option value="Mumbai" />
        <option value="Karachi" />
        <option value="Dhaka" />
        <option value="London" />
        <option value="Berlin" />
        <option value="Madrid" />
        <option value="Rome" />
        <option value="Moscow" />
        <option value="NewYork" />
        <option value="Chicago" />
        <option value="Toronto" />
        <option value="Canberra" />
        <option value="Wellington" />
        <option value="Kiev" />
        <option value="Moscow" />
        <option value="Norge" />
        <option value="Finland" />
        <option value="Helsinki" />
        <option value="Sweden" />
        <option value="Stockholm" />
        <option value="Sydney" />
        <option value="Melbourne" />
        <option value="Brisbane" />
      </datalist>
    </div>
  );
};

export default Input;
