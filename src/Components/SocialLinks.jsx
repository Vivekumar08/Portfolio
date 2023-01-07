import React from "react";
import "./social.css";
import { socialprofils } from "../Pages/Content";
import {
  faGithub,
  faLinkedin,
  faTwitter,
  faWhatsapp,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export const Socialicons = (params) => {
  return (
    <div className="stick_follow_icon flex  ">
      <ul className="list-none flex  md:flex-col">
        {socialprofils.twitter && (
          <li>
            <a href={socialprofils.twitter}>
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </li>
        )}
        {socialprofils.github && (
          <li>
            <a href={socialprofils.github}>
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
        )}
        {socialprofils.linkedin && (
          <li>
            <a href={socialprofils.linkedin}>
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </li>
        )}
        {socialprofils.mail && (
          <li>
            <a href={`mailto:${socialprofils.mail}`}>{/* <SiGmail /> */}</a>
            <FontAwesomeIcon icon={faEnvelope} />
          </li>
        )}
        {socialprofils.whatsapp && (
          <li>
            <a href={`tel:${socialprofils.whatsapp}`}>
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
          </li>
        )}
        {socialprofils.youtube && (
          <li>
            <a href={socialprofils.youtube}>
              <FontAwesomeIcon icon={faYoutube} />
            </a>
          </li>
        )}
      </ul>
    </div>
  );
};
