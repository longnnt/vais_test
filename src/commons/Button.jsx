import React from "react";
import "./index.css";

export const Button = ({
  content,
  p,
  color,
  bg,
  m,
  mr,
  ml,
  borderRadius,
  onHandleClick,
}) => {
  return (
    <button
      className={content === "Copied!" ? "button copied" : "button"}
      style={{
        padding: p,
        color: `var(${color})`,
        background: `var(${bg})`,
        margin: m,
        marginLeft: ml,
        marginRight: mr,
        borderRadius,
      }}
      onClick={onHandleClick}
    >
      {content}
    </button>
  );
};
