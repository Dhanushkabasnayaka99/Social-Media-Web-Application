import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { Link } from "react-router-dom";
import "./Navbar.scss"
import { useContext } from "react";
import { DarkModeContext } from "../../Context/darkMode";

export default function Navbar() {

  const {toggle} = useContext(DarkModeContext)

  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" style={{textDecoration:'none'}}>
          <span>Social Sphere</span>
        </Link>

        <HomeOutlinedIcon  className="icons"/>
        
        <DarkModeOutlinedIcon  onClick={toggle} className="icons"/>
        
        <GridViewOutlinedIcon className="icons" />
        <div className="search">
          <SearchOutlinedIcon className="icons"/>
          <input type="text" placeholder="Search" />
        </div>
      </div>
       <div className="right">
        <PersonOutlineOutlinedIcon className="icons"/>
        <EmailOutlinedIcon className="icons"/>
        <NotificationsNoneOutlinedIcon className="icons"/>
        <div className="user">
          <img src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600"   alt="user profile immage" />
          <span>Dhanushka</span>
        </div>
      </div>
    </div>
  );
}
