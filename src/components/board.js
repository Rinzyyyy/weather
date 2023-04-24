import React from "react";

const Board = ({
  icon,
  temp,
  describe,
  cloud,
  rain,
  wind,
  sunr,
  suns,
  snow,
  isSun,
}) => {
  let iconurl = `https://openweathermap.org/img/wn/${icon}@2x.png`;

  return (
    <div className="board">
      <img src={iconurl} alt="icon" />
      <h1>{temp}°C</h1>
      <h3>{describe}</h3>
      <table>
        <thead>
          <tr>
            <th>
              <p>Cloud</p>
            </th>
            <th>
              <p>Rain</p>
            </th>
            <th>
              <p>Wind</p>
            </th>
            <th>
              <p>Snow</p>
            </th>
            {isSun ? (
              <>
                <th>
                  <p>SunRise</p>
                </th>
                <th>
                  <p>SunSet</p>
                </th>
              </>
            ) : null}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{cloud}%</td>
            <td>{rain}%</td>
            <td>{wind}m/s</td>
            <td>{snow}mm</td>
            {isSun ? (
              <>
                <td>{sunr}am</td>
                <td>{suns}pm</td>
              </>
            ) : null}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Board;
