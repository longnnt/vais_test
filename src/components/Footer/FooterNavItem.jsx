import React from "react";
import "./index.css";

export const FooterNavItem = ({ heading, listNavItem, mr, ml }) => {
  return (
    <div
      className="footer__nav--item"
      style={{ marginRight: mr, marginLeft: ml }}
    >
      <p className="footer__nav--item-heading">{heading}</p>

      <div className="footer__nav--item-content">
        {listNavItem?.map((item, index) => (
          <p key={index} className="footer__nav-item--link">
            {item?.content}
          </p>
        ))}
      </div>
    </div>
  );
};
