import React from "react";
import Images from "../Images";
import Circle from "../Circle";
import Triangle from "../Triangle";
import TextContent from "../TextContent";
import Fade from "react-reveal/Fade";
import img from "src/assets/images/team.png";
import Emad from "src/assets/images/Emad.jpg";
import Ghaida from "src/assets/images/Ghaida.jpg";
import Moayad from "src/assets/images/Moayad.jpg";
import Raghad from "src/assets/images/Raghad.png";
import Suhaib from "src/assets/images/Suhaib.jpg";
import { Col, Row } from "src/components/Root/Grid";

const Jobs = () => {
  const team = [
    { name: "Raghad", img: Raghad },
    { name: "Suhaib", img: Suhaib },
    { name: "Emad", img: Emad },
    { name: "Moayad", img: Moayad },
    { name: "Ghaida", img: Ghaida },
  ];

  return (
    <section className="feature_section home_section5" id="jobs">
      <div className="custom_container">
        <div className="row">
          <div className="col-md-7 order-md-2 my-auto">
            <Fade right>
              <TextContent
                title="Meet the TEAM"
              >
                <Circle num="46" className={"bg-info"} />
              </TextContent>
            </Fade>

            <Row className="justify-content-center">
              {team.map((member, i) => (
                <Col key={i} md={4} className="p-4">
                  <Images src={member.img} classes="w-75" />
                  <br />
                  <br />
                  <h4>
                    {member.name}
                  </h4>
                </Col>
              ))}
            </Row>
          </div>
          <div className="col-md-5 order-md-1">
            <div className="app_img">
              <Circle num="24" className="bg-info" />
              <div className="svg10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="400.331"
                  height="386.904"
                  viewBox="0 0 400.331 386.904"
                >
                  <defs></defs>
                  <path
                    className="svg10"
                    d="M8462.153,3828.512c-32.819-85.028,54.733-315.462,170.147-196.827s176.1,164.472,94,202.219S8494.974,3913.54,8462.153,3828.512Z"
                    transform="translate(9577.251 -220.791) rotate(154)"
                  ></path>
                </svg>
              </div>
              <Images src={img} classes="feature_model" />
              <Circle num="240" className="bg-info" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Jobs;
