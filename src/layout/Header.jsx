import React, { useState } from "react";
import { ReactComponent as Logo } from "../commons/svgs/logo.svg";
import { Navbar } from "../components/Navbar/Navbar";
import { NavbarItem } from "../components/Navbar/NavbarItem";
import { Button } from "../commons/Button";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Menu } from "./Menu";

export const Header = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="header">
      <div className="header__right">
        <Logo />
        <Navbar ml="48px">
          <NavbarItem title={"feature"} />
          <NavbarItem title={"pricing"} />
          <NavbarItem title={"resources"} />
        </Navbar>
      </div>
      <div className="header__left">
        <Button content={"login"} bg={"--white"} color="--neutral-gray" />
        <Button content={"sign up"} p="12px 24px" ml="38px" />
      </div>
      <div className="header__left--mobile">
        <div className="menu__bar" onClick={() => setShow(!show)}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <Menu />
      </div>
    </div>
  );
};
