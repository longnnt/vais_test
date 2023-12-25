import React from "react";
import { Heading } from "./Heading";
import { Description } from "./Description";
import { Button } from "../../commons/Button";
import "./index.css";

export const Content = () => {
  return (
    <div className="content">
      <Heading heading="More than just shorter link" />
      <Description description="Build your brand's recognition and get detailed insights on how your links are performing." />
      <Button content="get started" bg="--primary-cyan" p="16px 40px" />
    </div>
  );
};
