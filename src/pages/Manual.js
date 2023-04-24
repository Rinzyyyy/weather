import React from "react";
import searchimg from "../image/search.png";
import backimg from "../image/back.png";
import selectimg from "../image/select.png";

const Manual = () => {
  return (
    <div className="manual">
      <section>
        <img src={searchimg} alt="search" />

        <p>
          <span>Search for the weather</span>
          <br />
          <br />
          Enter the city name you want to search for at the top <br />
          and "keydown Enter" to laod data. <br />
          You can choose from the options or enter the location manually, witout
          the word of "city".
        </p>
      </section>

      <section>
        <p>
          <span>Wheather data</span>
          <br />
          <br />
          Click on the weather for other times below. <br />
          The detailed forecast will be displayed in the middle board,
          <br />
          and the "arrow" can be used to browse the weather forecast. <br />
          The data is forecasted for a period of five days in three-hour
          intervals.The time is local time zone
        </p>
        <img src={selectimg} alt="search" />
      </section>

      <section>
        <img src={backimg} alt="search" />

        <p>
          <span>Background-image</span>
          <br />
          <br />
          In the background, <br />
          photo of local cultural landscapes will be <br />
          displayed based on the city you searched, <br />
          the data source and photographer will be shown below.
        </p>
      </section>
    </div>
  );
};

export default Manual;
