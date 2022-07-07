import React from "react";
import Images from "../Images";
import Circle from "../Circle";
import Triangle from "../Triangle";
import TextContent from "../TextContent";
import Fade from "react-reveal/Fade";
import img from "src/assets/images/help.png"

const features = [
  "Internship Posting, Searching, Selecting & Launching",
  "Reporting, Feedbacking & Remarking",
  "Use Self-Support Tools",
  "Get CV Enhancement Help"
];

const Features = () => {
  return (
    <section className="feature_section home_section3" id="college">
      <Circle num="34" className='bg-info' />
      <div className="custom_container">
        <div className="row">
          <div className="col-md-7 order-md-2 my-auto">
            <Fade right>
              <TextContent
                title='How Exactly it Would Help You?'
                desc="Once it's up, the 3 type of users would get to do the following..."
              ></TextContent>

              {features.map((feature, i) => (
                <TextContent
                  key={i}
                  desc={feature}
                />
              ))}
            </Fade>
          </div>
          <div className="col-md-5 order-md-1 wow fadeInUp">
            <div className="app_img">
              <Images
                src={img}
                classes="feature_model"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
