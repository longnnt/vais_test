import React from "react";

export const Divider = ({ i }) => {
  return (
    <div className="divider" style={{ top: `calc(50% - ${i}*44px` }}></div>
  );
};
