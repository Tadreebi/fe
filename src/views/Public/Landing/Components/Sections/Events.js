import React from "react";
import Images from "../Images";
import Circle from "../Circle";
import TextContent from "../TextContent";
import Fade from "react-reveal/Fade";
import img from "src/assets/images/mockup_events.png"
import { Button } from "src/components/Root/Buttons";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Events = () => {
  const { JWT } = useSelector(_ => _);

  return (
    <section className="feature_section home_section8 bg_1" id="events">
      <div className="custom_container">
        <div className="row">
          <div className="col-md-7 my-auto">
            <Fade left>
              <TextContent
                title="Liked It?"
                desc="Wait till you test the demo"
              >
                <Circle num="23" className={"bg-info"} />
              </TextContent>
            </Fade>

            {JWT?.length > 10 ? (
              <Link to="/dashboard" >
                <Button color="info" size="lg" className="my-5 text-white">
                  Demo Access
                </Button>
              </Link>
            ) : (
              <Link to="/login" >
                <Button color="info" size="lg" className="my-5 text-white">
                  Demo Access
                </Button>
              </Link>
            )}
          </div>
          <div className="col-md-5 text-center">
            <div className="app_img">
              <Circle num="240" className={"bg-info"} />
              <Circle num="46" className={"bg-primary"} />
              <Circle num="50" className={"bg-info"} />
              <Images src={img} classes="feature_model" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
