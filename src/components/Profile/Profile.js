import React from "react";
import "./Profile.css";
import profileImage from "../../Images/avatar_hat.jpg";
import SliderContainer from "../SliderContainer/SliderContainer";

/**
 * @author
 * @function Profile
 **/
const data = [
  {
    Name: "Adobe Photoshop",
    Value: "90",
  },
  {
    Name: "Photography",
    Value: "80",
  },
  {
    Name: "Illustrator",
    Value: "75",
  },
  {
    Name: "Media",
    Value: "50",
  },
];
const langdata = [
  {
    Name: "English",
    Value: "90",
  },
  {
    Name: "Spanish",
    Value: "80",
  },
  {
    Name: "Japanese",
    Value: "75",
  },
];

const Profile = (props) => {
  return (
    <div className="card card-style">
      <img className="card-img-top" src={profileImage} alt="Profile Image" />
      <div className="card-body">
        <ul className="personal-details">
          <li className="details text-grey">
            <span>
              <i className="fa fa-briefcase fa-fw teal-color"></i>
            </span>
            <span>Designer</span>
          </li>
          <li className="details text-grey">
            <span>
              <i className="fa fa-home fa-fw teal-color"></i>
            </span>
            <span>Designer</span>
          </li>
          <li className="details text-grey">
            <span>
              <i className="fa fa-envelope fa-fw teal-color"></i>
            </span>
            <span>Designer</span>
          </li>
          <li className="details text-grey">
            <span>
              <i className="fa fa-phone fa-fw teal-color"></i>
            </span>
            <span>Designer</span>
          </li>
        </ul>
        <hr />
        <SliderContainer name="Skills" showValue={true} data={data} />
        <SliderContainer name="Languages" showValue={false} data={langdata} />
      </div>
    </div>
  );
};

export default Profile;
