import React from "react";
import "./social.css";
import {
  FaGithub,
  FaTwitter,
  FaFacebookF,
  FaLinkedin,
  FaYoutube,
  FaTwitch,
} from "react-icons/fa";
import {SiGmail, SiWhatsapp} from 'react-icons/si'
import { socialprofils } from "../Pages/Content";

export const Socialicons = (params) => {
  return (
    <div className="stick_follow_icon flex  ">
      <ul className="list-none">
        {socialprofils.twitter && (
          <li>
            <a href={socialprofils.twitter}>
              <FaTwitter />
            </a>
          </li>
        )}
        {socialprofils.github && (
          <li>
            <a href={socialprofils.github}>
              <FaGithub />
            </a>
          </li>
        )}
        {socialprofils.facebook && (
          <li>
            <a href={socialprofils.facebook}>
              <FaFacebookF />
            </a>
          </li>
        )}
        {socialprofils.linkedin && (
          <li>
            <a href={socialprofils.linkedin}>
              <FaLinkedin />
            </a>
          </li>
        )}
        {socialprofils.mail && (
          <li>
            <a href={`mailto:${socialprofils.mail}`}>
              <SiGmail />
            </a>
          </li>
        )}
        {socialprofils.whatsapp && (
          <li>
            <a href={`tel:${socialprofils.whatsapp}`}>
              <SiWhatsapp />
            </a>
          </li>
        )}
        {socialprofils.youtube && (
          <li>
            <a href={socialprofils.youtube}>
              <FaYoutube />
            </a>
          </li>
        )}
        {socialprofils.twitch && (
          <li>
            <a href={socialprofils.twitch}>
              <FaTwitch />
            </a>
          </li>
        )}
      </ul>
    </div>
  );
};
