import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { brands } from "@fortawesome/fontawesome-svg-core/import.macro";

export default function Footer() {
  return (
    <div className="footer">
      <a className="twitter" href="https://twitter.com/">
        <FontAwesomeIcon icon={brands("twitter")} />
      </a>
      <a href="https://www.facebook.com/">
        <FontAwesomeIcon icon={brands("facebook")} />
      </a>
      <a href="https://www.instagram.com/">
        <FontAwesomeIcon icon={brands("instagram")} />
      </a>
      <a href="https://github.com/Timi005">
        <FontAwesomeIcon icon={brands("github")} />
      </a>
    </div>
  );
}
