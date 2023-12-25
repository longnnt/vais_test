import React from "react";
import "./index.css";

export const Navbar = ({ children, mr, ml, m }) => {
  return (
    <div
      className="navbar"
      style={{ margin: m, marginLeft: ml, marginRight: mr }}
    >
      {children}
    </div>
  );
};
