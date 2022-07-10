import React from "react";

const Circle = ({ num, className }) => {
  return <div className={`circle_${num} ${className}`}></div>;
};

export default Circle;
