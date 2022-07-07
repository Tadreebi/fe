import React, { useState, useEffect } from "react";
// import TwitterIcon from "@material-ui/icons/Twitter";
// import InstagramIcon from "@material-ui/icons/Instagram";
// import FacebookIcon from "@material-ui/icons/Facebook";
// import LinkedInIcon from "@material-ui/icons/LinkedIn";
// import EmojiEventsIcon from "@material-ui/icons/EmojiEvents";
import { TextField } from "@material-ui/core";
import { SwipeableDrawer } from "@material-ui/core";
import Google from "../Google";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";
import Zoom from "react-reveal/Zoom";
import { Button } from "src/components/Root/Buttons";
import Images from "../Images";
import img from "src/assets/images/logo-c.png"

const useStyles = makeStyles((theme) => ({
  paper: {
    width: 400,
    margin: "20% auto",
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const Header = () => {
  const classes = useStyles();
  const [sideNav, setSideNav] = useState(false);
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let mounted = true;
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        if (mounted) setShow(true);
      } else {
        if (mounted) setShow(false);
      }
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 720) {
        if (mounted) setSideNav(false);
      }
    });

    return () => {
      mounted = false;
    };
  }, []);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div className={classes.paper}>
      <form>
        <TextField label="Name" fullWidth />
        <TextField label="Email" fullWidth />
        <TextField label="Message" fullWidth />
        <Button
          fullWidth
          color="primary"
          variant="contained"
          onClick={handleClose}
        >
          Submit
        </Button>
      </form>
    </div>
  );

  return (
    <header className={`${show && "fixed"}`}>
      <Zoom>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          {body}
        </Modal>
      </Zoom>

      <SwipeableDrawer
        anchor="top"
        open={sideNav}
        onClose={() => {
          setSideNav(false);
        }}
        onOpen={() => {
          setSideNav(true);
        }}
      >
        <div
          tabIndex={0}
          role="button"
          onClick={() => {
            setSideNav(false);
          }}
          className="up-nav"
        >
          <ul className="navbar-nav mr-auto text-center nav_link main_menu">
            <li className="nav-item">
              <a
                className="nav-link"
                href="#connect"
                onClick={() => {
                  setSideNav(false);
                }}
              >
                Connect
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link"
                href="#college"
                onClick={() => {
                  setSideNav(false);
                }}
              >
                College
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#intern"
                onClick={() => {
                  setSideNav(false);
                }}
              >
                Internships
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#jobs"
                onClick={() => {
                  setSideNav(false);
                }}
              >
                Jobs
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#scholarships"
                onClick={() => {
                  setSideNav(false);
                }}
              >
                Scholarships
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#competitions"
                onClick={() => {
                  setSideNav(false);
                }}
              >
                Competitions
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#events"
                onClick={() => {
                  setSideNav(false);
                }}
              >
                Events
              </a>
            </li>
          </ul>
        </div>
      </SwipeableDrawer>
      <div className="custom_container">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="for_desktop">
              <ul className="navbar-nav mr-auto text-center nav_link main_menu">
                <li className="nav-item">
                  <a className="nav-link" href="#top">
                    <Images src={img} style={{ height: "75px" }} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
