import React from "react";
import Fade from "react-reveal/Fade";
const Images = ({ src, classes, style }) => {
  return (
    <Fade bottom>
      <img
        className={`model wow fadeInUp ${classes}`}
        data-wow-delay=".3s"
        src={src}
        style={{
          animationName: "fadeInUp",
          animationDelay: "0.3s",
          ...style
        }}
        alt="colleges"
      />
    </Fade>
  );
};

export default Images;
