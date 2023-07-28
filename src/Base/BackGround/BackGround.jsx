import React from "react";
import "./BackGround.css";
const BackGround = () => {
  return (
    <div>
      {/* <input type="checkbox" id="day-night">
        <label for="day-night"></label>
      </input> */}

      <div className="content">
        <div className="moon-sun"></div>

        <div className="lights"></div>
        <div className="clouds"></div>
      </div>
    </div>
  );
};

export default BackGround;
