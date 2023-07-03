import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import { GrClose } from "react-icons/gr";
import { useState } from "react";
import NavbarElements from "./NavbarElements";
import MobileNavbarElements from "./MobileNavbarElements";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [animation, setAnimation] = useState(false);
  const HandleClick = () => {
    if (open) {
      setTimeout(() => {
        setOpen(!open);
      }, 150);
      setAnimation(!animation);
    } else {
      setOpen(!open);
      setAnimation(!animation);
    }
  };

  const hamburgerIcon = (
    <BiMenu className="menu-icon" size={50} onClick={HandleClick}></BiMenu>
  );
  const closeIcon = (
    <GrClose className="menu-icon" size={10} onClick={HandleClick}></GrClose>
  );

  return (
    <>
      <Box className="nav-bar-container">
        <Box className="nav-bar">
          {/* <Box className="logo-container">
            <Link to="/">
              <Box className="logo-box">
                <img
                  src={require("./images/logo.PNG")}
                  className="logo"
                  alt="logo"
                ></img>
              </Box>
            </Link>
          </Box> */}
          <NavbarElements />
          {open && <MobileNavbarElements open={animation} />}
          {open ? closeIcon : hamburgerIcon}
        </Box>
      </Box>
    </>
  );
}

export default Navbar;
