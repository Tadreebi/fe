import React from "react";
import Images from "../Images";
import Circle from "../Circle";
import Triangle from "../Triangle";
import Typed from "react-typed";
import TextContent from "../TextContent";
import Fade from "react-reveal/Fade";
import Welcome from "src/assets/images/welcome.png"

const Home = () => {
  return (
    <section className="home_section1">
      <div className="custom_container home_screen_section">
        <div className="row">
          <div className="col-md-6 text-center text-md-left">
            <div className="app_img">
              <Circle num="254" className={"bg-primary"} />
              <Circle num="24" className={"bg-info"} />
              <Circle num="56" className={"bg-info"} />

              <Images src={Welcome} classes="w-100" />

              <Circle num="46" className={"bg-info"} />
              <Circle num="56" className={"bg-info"} />
            </div>
          </div>
          <div className="col-md-6 text-center text-md-right py-5 mt-5">
            <div className="about_app animated">
              <div
                className="wow fadeInUp"
                data-wow-delay=".7s"
                style={{
                  animationName: "fadeInUp",
                  animationDelay: "0.7s",
                }}
              >
                <h1 className="pb-5">
                  <Typed
                    strings={["Welcome To", "TADREEBI"]}
                    typeSpeed={80}
                    backSpeed={80}
                    loop
                  />
                </h1>

                <Fade left>
                  <TextContent
                    title="A University / University College?"
                    desc="This is your best solution for the Internship Managment process"
                  >
                    <Circle num="22" className={"bg-primary"} />
                  </TextContent>
                </Fade>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Circle num="22" className={"bg-info"} />
      <Triangle />
    </section>
  );
};

export default Home;
