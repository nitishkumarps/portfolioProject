import React from "react";
import ProgressSlider from "../ProgressSlider/ProgressSlider";
import "./SliderContainer.css";

const SliderContainer = ({ name, showValue, data }) => {
  return (
    <div className="slide-container">
      <h5 className="text-grey">
        <i
          className={`fa ${showValue ? `fa-asterisk` : `fa-globe`} teal-color`}
        ></i>
        {name}
      </h5>
      <ul className="personal-details">
        {data.map((each) => (
          <li>
            <ProgressSlider
              title={each.Name}
              value={each.Value}
              showValue={showValue}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default React.memo(SliderContainer);
