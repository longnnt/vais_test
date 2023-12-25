import React from "react";
import "./index.css";
import { FooterNavItem } from "./../components/Footer/FooterNavItem";
import { ReactComponent as IconFacebook } from "../commons/svgs/icon-facebook.svg";
import { ReactComponent as IconTwitter } from "../commons/svgs/icon-twitter.svg";
import { ReactComponent as IconPinterest } from "../commons/svgs/icon-pinterest.svg";
import { ReactComponent as IconInsta } from "../commons/svgs/icon-instagram.svg";
import { Logo } from "../commons/Logo";

const listFeatures = [
  { id: 1, content: "link shortening" },
  { id: 2, content: "branded link" },
  { id: 3, content: "analytics" },
];
const listResources = [
  { id: 1, content: "blog" },
  { id: 2, content: "developers" },
  { id: 3, content: "support" },
];
const listCompany = [
  { id: 1, content: "about" },
  { id: 2, content: "our team" },
  { id: 3, content: "careers" },
  { id: 4, content: "contact" },
];

export const Footer = () => {
  return (
    <div className="footer">
      <Logo fillColor={"white"} />
      <div className="footer__nav--list">
        <FooterNavItem
          heading="features"
          listNavItem={listFeatures}
          mr="80px"
        />
        <FooterNavItem
          heading="resources"
          listNavItem={listResources}
          mr="106px"
        />
        <FooterNavItem heading="company" listNavItem={listCompany} />
      </div>
      <div className="footer__socials">
        <IconFacebook className="icon__facebook" />
        <IconTwitter className="icon__twitter" />
        <IconPinterest className="icon__pinterest" />
        <IconInsta className="icon__insta" />
      </div>
    </div>
  );
};
