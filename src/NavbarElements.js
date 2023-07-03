import { Link } from "react-router-dom";
import { Box } from "@mui/material";
function NavbarElements() {
  return (
    <>
      <Box className="nav-bar-elements-wrapper-desktop">
        <ul className="nav-bar-elements-desktop">
          <li>
            <div className="link Courses">
              <Link to="/Courses">Courses</Link>
            </div>
          </li>
          <li>
            <div className="link Community">
              <Link to="/Community">Community</Link>
            </div>
          </li>
          <li>
            <div className="link Trial">
              <Link to="/trial">Trial</Link>
            </div>
          </li>
          <li>
            <div className="link Languages">
              <a href="#languages">Languages</a>
            </div>
          </li>
          <li>
            <div className="link Gallery">
              <a href="#gallery">Gallery</a>
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
                  src={require("./images/twitter.png")}
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
                  src={require("./images/instagram.png")}
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
}

export default NavbarElements;
