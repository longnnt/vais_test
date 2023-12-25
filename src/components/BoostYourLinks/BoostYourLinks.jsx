import React from "react";
import "./index.css";
import { Button } from "../../commons/Button";

export const BoostYourLinks = () => {
  return (
    <div className="boost__your-links">
      <div className="boost__your-links--content">
        <p className="boost__your-links--header">Boost your links today</p>
        <Button content="get started" p="16px 40px" />
      </div>
    </div>
  );
};
