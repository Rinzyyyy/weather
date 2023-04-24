import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faGhost } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import Board from "../components/board";
import Board2 from "../components/board2";
import Input from "../components/Input";

const Home = ({ setImg, setAuther }) => {
  const auth = "f319866566541c21f40aa13f975094f0";
  let [Data, setData] = useState("");
  let [input, setInput] = useState("London");
  let [isSun, setIsSun] = useState(true);
  let [i, setI] = useState(0);
  let [daypage, setDayPage] = useState(0);
  let [color1, setColor1] = useState("#000000");
  let [color2, setColor2] = useState("#d6d6d6");
  let type = "forecast";
  let call = `https://api.openweathermap.org/data/2.5/${type}?q=${input}&appid=${auth}`;
  //background image
  let imgURL = `https://api.pexels.com/v1/search?query=${input}&per_page=15&page=1`;
  const client = "ONH6HczDNHpXLap1LHBVsO2pd0BUHU7R2tBHXsiqIng9rZC17zUTeYFF";

  const search = async (url) => {
    try {
      if (url === call) {
        let result = await axios.get(url);
        setData(result.data);
      }
    } catch {
      setData("no");
    }
    if (url === imgURL) {
      let imgdata = await axios.get(url, {
        headers: { Authorization: client },
      });
      setImg(imgdata.data.photos[0].src.large2x);
      setAuther(imgdata.data.photos[0].photographer);
    }
  };
  useEffect(() => {
    search(call);
    search(imgURL);
    setDayPage(0);
  }, [call, input]);

  function convertTime(unix) {
    let time = new Date(unix * 1000);
    let datetime = new Date(time);
    // 考慮夏令時間的位移
    const OffsetInM = datetime.getTimezoneOffset(); //  Get the timezone offset in minutes
    datetime.setMinutes(datetime.getMinutes() + OffsetInM); // Adjust the timezone offset
    let format = {
      month: "numeric",
      day: "numeric",
      hour: "numeric",
    };
    datetime = datetime.toLocaleString("en-US", format).replace(",", "");
    return datetime;
  }

  function now() {
    const today = new Date();
    const zone = Data.city.timezone * 1000;
    const unix = Math.floor(today.getTime()) + zone;
    let now = new Date(unix);
    const Offset = now.getTimezoneOffset();
    now.setMinutes(now.getMinutes() + Offset);
    let format = {
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    };
    now = now.toLocaleString("en-US", format).replace(",", "_");

    return now;
  }

  function nextDay() {
    daypage++;
    setColor2("#000000");
    if (daypage >= 5) {
      daypage = 5;
      setColor1("#d6d6d6");
    }
    setDayPage(daypage);
  }

  function frontDay() {
    daypage--;
    setColor1("#000000");
    if (daypage <= 0) {
      daypage = 0;
      setColor2("#d6d6d6");
    }
    setDayPage(daypage);
  }

  if (Data === "") {
    return <div className="load">Loading......</div>; // Render loading state while waiting for data
  } else if (Data === "no") {
    return (
      <div className="home">
        <p
          style={{
            position: "absolute",
            top: "48%",
            left: "42%",
          }}
        >
          Sorry ~ there is no weather data of " {input} "
        </p>
        <FontAwesomeIcon
          icon={faGhost}
          size="2xl"
          style={{
            position: "absolute",
            top: "40%",
            left: "49.5%",
          }}
        />
      </div>
    );
  }
  return (
    <div className="home">
      <Input setInput={setInput} />
      <p>Now_{now()}</p>
      <Board
        icon={Data.list[i].weather[0].icon}
        describe={Data.list[i].weather[0].description}
        temp={(Data.list[i].main.temp - 273.15).toFixed(0)}
        cloud={Data.list[i].clouds.all}
        rain={Data.list[i].pop}
        wind={Data.list[i].wind.speed}
        snow={Data.list[i].snow ? Data.list[i].snow["3h"] : 0}
        sunr={convertTime(Data.city.sunrise + Data.city.timezone).slice(-4, -2)}
        suns={convertTime(Data.city.sunset + Data.city.timezone).slice(-4, -2)}
        isSun={isSun}
      />
      <section className="other">
        <FontAwesomeIcon
          icon={faAngleRight}
          rotation={180}
          size="2xl"
          style={{ color: color2 }}
          onClick={() => {
            frontDay();
          }}
        />
        <div className="boards">
          {Data.list.map((d, i) => {
            if (daypage === 0) {
              if (
                convertTime(d.dt + Data.city.timezone).slice(0, 5) ===
                convertTime(Data.list[0].dt + Data.city.timezone).slice(0, 5)
              ) {
                return (
                  <Board2
                    click={() => {
                      setI(i);
                      setIsSun(true);
                    }}
                    date={convertTime(d.dt + Data.city.timezone).slice(0, 5)}
                    time={convertTime(d.dt + Data.city.timezone).slice(
                      -5,
                      convertTime(d.dt + Data.city.timezone).length + 1
                    )}
                    icon={d.weather[0].icon}
                    temp={(d.main.temp - 273.15).toFixed(0)}
                    key={i}
                  />
                );
              } else {
                return null;
              }
            } else if (daypage !== 0) {
              const day = 86400;
              if (
                convertTime(d.dt + Data.city.timezone).slice(0, 5) ===
                convertTime(
                  Data.list[0].dt + Data.city.timezone + day * daypage
                ).slice(0, 5)
              ) {
                return (
                  <Board2
                    click={() => {
                      setI(i);
                      setIsSun(false);
                    }}
                    date={convertTime(d.dt + Data.city.timezone).slice(0, 5)}
                    time={convertTime(d.dt + Data.city.timezone).slice(
                      -5,
                      convertTime(d.dt + Data.city.timezone).length + 1
                    )}
                    icon={d.weather[0].icon}
                    temp={(d.main.temp - 273.15).toFixed(0)}
                    key={i}
                  />
                );
              } else if (
                convertTime(Data.list[39].dt + Data.city.timezone).slice(
                  0,
                  5
                ) !==
                  convertTime(
                    Data.list[0].dt + Data.city.timezone + day * daypage
                  ).slice(0, 5) &&
                daypage === 5
              ) {
                daypage = 4;
                console.log("haha");
                return undefined;
              } else {
                return undefined;
              }
            } else {
              console.log("ee");
              return null;
            }
          })}
        </div>
        <FontAwesomeIcon
          icon={faAngleRight}
          size="2xl"
          style={{ color: color1 }}
          onClick={() => {
            nextDay();
          }}
        />
      </section>
    </div>
  );
};

export default Home;
