import React from "react";
import "./index.css";
import { ReactComponent as IconBrandRecognition } from "../../commons/svgs/icon-brand-recognition.svg";
import { Divider } from "./Divider";

export const Banner = ({ bannerHead, bannerDesc, isHidden = "false", i }) => {
  return (
    <div className="banner" style={{ top: `${44 * (i + 1)}px` }}>
      <div className="banner__circle">
        <IconBrandRecognition />
      </div>
      <div className="banner__content">
        <p className="banner__head">{bannerHead}</p>
        <p className="banner__desc">{bannerDesc}</p>
      </div>
      {isHidden && <Divider i={i} />}
    </div>
  );
};
