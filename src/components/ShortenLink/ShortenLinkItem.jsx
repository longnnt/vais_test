import React, { useState } from "react";
import { Button } from "../../commons/Button";
import "./index.css";

export const ShortenLinkItem = ({ sourceLink, shortenLink }) => {
  const [title, setTitle] = useState("copy");

  const handleClick = () => {
    title === "copy" ? setTitle("Copied!") : setTitle("copy");
  };

  return (
    <div className="shorten--link__item">
      <p className="shorten--link__item-left">htps://www.frontendmentor.io</p>
      <div className="shorten--link__item-right">
        <p className="shorten--link__short">https://rel.ink/k4lKyk</p>
        <Button
          content={title}
          p={"14px 30px"}
          ml={"24px"}
          onHandleClick={handleClick}
        />
      </div>
    </div>
  );
};
