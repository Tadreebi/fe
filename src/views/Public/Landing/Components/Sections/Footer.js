import { faArrowCircleUp, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
// import TwitterIcon from "@material-ui/icons/Twitter";
// import InstagramIcon from "@material-ui/icons/Instagram";
// import FacebookIcon from "@material-ui/icons/Facebook";
// import LinkedInIcon from "@material-ui/icons/LinkedIn";
// import EmojiEventsIcon from "@material-ui/icons/EmojiEvents";
// import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import Google from "../Google";
const Footer = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    let mounted = true;
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        if (mounted) setShow(true);
      } else {
        if (mounted) setShow(false);
      }
    });
    return () => {
      mounted = false;
    };
  }, []);
  return (
    <footer className="bg-info">
      <div className="custom_container">
        <div className="row">
          <div className="col-md-12 order-md-4">
            <div className="copy_right">
              <div className="row">
                <div className="col-md-4">
                  <div className="copy_year text-white">
                    <p>© {new Date().getFullYear()} TADREEBI</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <a href="#top" className={`floating_button ${show && "show-scroll"} bg-info`}>
        <h3>
          <FontAwesomeIcon icon={faArrowCircleUp} />
        </h3>
      </a>
    </footer>
  );
};

export default Footer;
