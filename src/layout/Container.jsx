import React from "react";
import { ReactComponent as IllustrationWorking } from "../commons/svgs/illustration-working.svg";
import { Content } from "../components/Container/Content";
import "./index.css";

export const Container = () => {
  return (
    <div className="container">
      <Content />
      <div className="illustration-working">
        <IllustrationWorking />
      </div>
    </div>
  );
};
