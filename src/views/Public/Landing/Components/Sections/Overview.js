import React from "react";
import Images from "../Images";
import Circle from "../Circle";
import Triangle from "../Triangle";
import TextContent from "../TextContent";
import Fade from "react-reveal/Fade";
import overview from "src/assets/images/overview.png"

const Connect = () => {
  return (
    <section className="feature_section home_section2 bg_1" id="connect">
      <div className="custom_container">
        <div className="row">
          <div className="col-md-7 my-auto">
            <Fade left>
              <TextContent
                title="What is TADREEBI?"
                desc="It's a web-app for universities to deploy and use by university staff, students & hiring companies to coordinate & communicate while students are applying, executing & finalizing their university-required internships."
              >
                <Circle num="22" className={"bg-info"} />
              </TextContent>
            </Fade>
          </div>

          <div className="col-md-5 text-center">
            <div className="app_img_right">
              <div className="square_304 bg-info"></div>
              <Images
                src={overview}
                classes="feature_model"
              />

              <div className="svg4">
                <Circle num="222" className={"bg-info"} />
              </div>
            </div>
            <Circle num="22" className={"bg-info"} />
          </div>
        </div>
      </div>
      <Triangle />
    </section>
  );
};

export default Connect;
