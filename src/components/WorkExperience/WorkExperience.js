import React from "react";
import "./WorkExperience.css";
/**
 * @author
 * @function Profile
 **/

const WorkExperience = (props) => {
  return (
    <div className="card card-style work-card">
      <h2>
        <i className="fa fa-suitcase teal-color"></i>
        Work Experience
      </h2>
      <ul className="details-data">
        <li>
          <h5 className="title text-grey">Name1</h5>
          <h6 className="duration">
            <i className="fa fa-calendar teal-color"></i>
            Jan 2015 - <span className="badge-teal">Current</span>
          </h6>
          <p className="description">
            Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel in
            deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta
            ea et odio, unde doloremque repellendus iure, iste.
          </p>
          <hr />
        </li>
        <li>
          <h5 className="title text-grey">Name1</h5>
          <h6 className="duration">
            <i className="fa fa-calendar teal-color"></i>
            Jan 2015 - <span className="badge-teal">Current</span>
          </h6>
          <p className="description">
            Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel in
            deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta
            ea et odio, unde doloremque repellendus iure, iste.
          </p>
          <hr />
        </li>
        <li>
          <h5 className="title text-grey">Name1</h5>
          <h6 className="duration">
            <i className="fa fa-calendar teal-color"></i>
            Jan 2015 - <span className="badge-teal">Current</span>
          </h6>
          <p className="description">
            Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel in
            deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta
            ea et odio, unde doloremque repellendus iure, iste.
          </p>
          <hr />
        </li>
      </ul>
    </div>
  );
};

export default WorkExperience;
