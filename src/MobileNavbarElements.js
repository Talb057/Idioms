import { Link } from "react-router-dom";
import { Box } from "@mui/material";
const MobileNavbarElements = ({ open }) => {
  return (
    <>
      <Box
        className={
          open
            ? "nav-bar-elements-wrapper-mobile fadeIn"
            : "nav-bar-elements-wrapper-mobile fadeOut"
        }
      >
        <ul className="nav-bar-elements-mobile">
          <li>
            <div className="link Myc">
              <Link to="/myc" style={{ color: "black" }}>
                Myc
              </Link>
            </div>
          </li>
          <li>
            <div className="link Sopac">
              <Link to="/sopac" style={{ color: "black" }}>
                Sopac
              </Link>
            </div>
          </li>
          <li>
            <div className="link Booking">
              <Link to="/booking" style={{ color: "black" }}>
                Booking
              </Link>
            </div>
          </li>
          <li>
            <div className="link Testimonials">
              <a href="#testimonials" style={{ color: "black" }}>
                Testimonials
              </a>
            </div>
          </li>
          <li>
            <div className="link Gallery">
              <a href="#gallery" style={{ color: "black" }}>
                Gallery
              </a>
            </div>
          </li>
          <li>
            <div className="link icon">
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noreferrer"
                className="icon_link twitter"
              >
                <img
                  src={require("./images/twitterblack.png")}
                  className="nav-bar-icon-twitter"
                  alt="instagram icon"
                ></img>
              </a>
            </div>
          </li>
          <li>
            <div className="link icon">
              <a
                href="https://instagram.com/"
                rel="noreferrer"
                target="_blank"
                className="icon_link"
              >
                <img
                  src={require("./images/instagramblack.png")}
                  className="nav-bar-icon-discord"
                  alt="instagram icon"
                ></img>
              </a>
            </div>
          </li>
        </ul>
      </Box>
    </>
  );
};

export default MobileNavbarElements;
