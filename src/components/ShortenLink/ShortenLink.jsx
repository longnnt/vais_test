import React, { useState } from "react";
import { Button } from "../../commons/Button";
import "./index.css";
import { ShortenLinkItem } from "./ShortenLinkItem";

export const ShortenLink = () => {
  const [input, setInput] = useState("");
  const [isClick, setIsClick] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleClick = () => {
    setIsClick(true);
    if (input === "") {
      setMessage("Please add a link");
      // setIsClick(false);
    }
  };

  return (
    <div className="shorten__link">
      <input
        type="input"
        placeholder="Shorten a link here ..."
        className={
          input === "" && isClick
            ? "shorten__link-input error"
            : "shorten__link-input"
        }
        value={input}
        onChange={(e) => {
          handleChange(e);
        }}
      />
      <Button
        content="shorten it!"
        borderRadius="10px"
        p="22px 46px"
        ml="18px"
        onHandleClick={handleClick}
      />

      {input === "" && isClick && <p className="message">{message}</p>}
    </div>
  );
};
