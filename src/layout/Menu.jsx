import React from "react";
import { Button } from "../commons/Button";
import "./index.css";

export const Menu = ({ display }) => {
  return (
    <div className="menu__mobile">
      <div className="nav__mobile">
        <p className="nav__mobile--text">features</p>
        <p className="nav__mobile--text">pricing</p>
        <p className="nav__mobile--text">resources</p>
      </div>
      <div className="nav__mobile-right">
        <Button content="login" p={"18px 0"} bg="--menu-mobile--navbar" />
        <Button content="sign up" p={"18px 0"} />
      </div>
    </div>
  );
};
