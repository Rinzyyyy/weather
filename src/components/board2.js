import React from "react";

const board2 = ({ icon, date, temp, time, click }) => {
  let iconurl = `https://openweathermap.org/img/wn/${icon}@2x.png`;

  return (
    <div className="board2" onClick={click}>
      <table>
        <tbody>
          <tr>
            <td>{date}</td>
          </tr>
          <tr>
            <td>{time}</td>
          </tr>
          <tr>
            <td>
              <img src={iconurl} alt="icon" />
            </td>
          </tr>
          <tr>
            <td>{temp}°C</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default board2;
