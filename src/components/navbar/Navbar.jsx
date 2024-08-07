import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import { useContext, useEffect } from "react";
import { DarkModeContext } from "../../Context/darkMode";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import { AuthContext } from "../../Context/AuthContext";
export default function Navbar() {
  const { toggle, darkMode } = useContext(DarkModeContext);
  const { currentUser } = useContext(AuthContext);
  //console.log("in navbar page:",currnetUser.name)

  useEffect(() => {
    //console.log("in navbar page:",currnetUser.name)
  });
  console.log("in nav bar", currentUser);
  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span>Social Sphere</span>
        </Link>

        <HomeOutlinedIcon className="icons" />

        {!darkMode ? (
          <DarkModeOutlinedIcon onClick={toggle} className="icons" />
        ) : (
          <WbSunnyOutlinedIcon onClick={toggle} className="icons" />
        )}

        <GridViewOutlinedIcon className="icons" />
        <div className="search">
          <SearchOutlinedIcon className="icons" />
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className="right">
        <PersonOutlineOutlinedIcon className="icons" />
        <EmailOutlinedIcon className="icons" />
        <NotificationsNoneOutlinedIcon className="icons" />
        <div className="user">
          <img src={currentUser.profilePic}   alt="user profile immage" />
          <span>{currentUser ? currentUser.name : "Guest"}</span>
        </div>
      </div>
    </div>
  );
}
