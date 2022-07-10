import Fade from "react-reveal/Fade";
import img from "src/assets/images/features.png";
import heroku from "src/assets/images/heroku.png";
import vercel from "src/assets/images/vercel.png";
import react from "src/assets/images/react.png";
import pg from "src/assets/images/pg.png";
import docker from "src/assets/images/docker.png";
import figma from "src/assets/images/figma.png";
import django from "src/assets/images/django.png";
import { Col, Row } from "src/components/Root/Grid";
import Circle from "../Circle";
import Images from "../Images";
import TextContent from "../TextContent";
import Triangle from "../Triangle";

const Techs = () => {
  return (
    <section className="feature_section home_section4 bg_1" id="intern">
      <Circle num="28" className="bg-primary" />
      <div className="custom_container">
        <div className="row">
          <div className="col-md-7 or my-auto">
            <Fade left>
              <TextContent
                title="Technologies Used"
              >
                <Circle num="15" className="bg-info" />
              </TextContent>

              <Row>
                <Col>
                  <Images
                    src={react}
                    classes="w-50"
                  />
                </Col>

                <Col>
                  <Images
                    src={django}
                    classes="w-50"
                  />
                </Col>

                <Col>
                  <Images
                    src={figma}
                    classes="w-50"
                  />
                </Col>
              </Row>

              <Row>
                <Col>
                  <Images
                    src={heroku}
                    classes="w-50"
                  />
                </Col>

                <Col>
                  <Images
                    src={vercel}
                    classes="w-50"
                  />
                </Col>

                <Col>
                  <Images
                    src={pg}
                    classes="w-50"
                  />
                </Col>

                <Col>
                  <Images
                    src={docker}
                    classes="w-50"
                  />
                </Col>
              </Row>
            </Fade>
          </div>
          <div className="col-md-5 text-center">
            <div className="app_img">
              <div className="svg7">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="399.895"
                  height="330.119"
                  viewBox="0 0 399.895 330.119"
                >
                  <defs></defs>
                  <path
                    className="x"
                    d="M358,179A179,179,0,0,1,0,179Z"
                    transform="matrix(-0.875, 0.485, -0.485, -0.875, 486.676, 313.114)"
                  ></path>
                </svg>
              </div>
              <Images
                src={img}
                classes="feature_model"
              />
              <div className="svg8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="358.854"
                  height="355.35"
                  viewBox="0 0 358.854 355.35"
                >
                  <defs></defs>
                  <path
                    className="s8"
                    d="M7861.039,3821.265c-95.83,239.173,154.009,157.958,240.886,44.755S7956.868,3582.092,7861.039,3821.265Z"
                    transform="matrix(0.94, 0.342, -0.342, 0.94, -6006.799, -6158.553)"
                  ></path>
                </svg>
              </div>
              <Circle num="66" className="bg-info" />
            </div>
          </div>
        </div>
      </div>
      <div className="svg9">
        <svg viewBox="0,0 10,10" width="750px" height="750px">
          <path
            className="track"
            fill="none"
            strokeWidth="0.015"
            d="M 5 5 m -4, 0 a 4,4 0 1,0 8,0 a 4,4 0 1,0 -8,0"
          ></path>
          <circle className="circle_move" fill="#707070" r=".2"></circle>
        </svg>
      </div>
    </section>
  );
};

export default Techs;
