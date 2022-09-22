import React from "react";
import profileImg from "../images/pass.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid, brands } from "@fortawesome/fontawesome-svg-core/import.macro";

export default function Info() {
  return (
    <div className="info">
      <img className="profile_img" src={profileImg} alt="Anonymouslyyy" />
      <h1 className="card--header">Timii Akins</h1>
      <h4 className="card--title">Frontend Developer</h4>
      <h5>
        <a
          className="card--website"
          href="https://charming-halva-eabbda.netlify.app/"
        >
          Timii.website
        </a>
      </h5>

      <div className="links">
        <a href="mailto:akinstimilehin@gmail.com" className="link email">
          <FontAwesomeIcon icon={solid("envelope")} /> Email
        </a>
        <a
          href="https://www.linkedin.com/in/timi-akins-ba5009246/"
          className="link linkedIn"
        >
          <FontAwesomeIcon icon={brands("linkedin")} /> LinkedIn
        </a>
      </div>
    </div>
  );
}
