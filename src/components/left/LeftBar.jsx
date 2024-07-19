import "./Left.scss";

import Friendicon from "../../assets/1.png";
import Groupicon from "../../assets/2.png";
import MacketPlaceicon from "../../assets/3.png";
import Watchicons from "../../assets/4.png";
import MemoriesIcon from "../../assets/5.png";
import Eventicon from "../../assets/6.png";
import Gamingicon from "../../assets/7.png";
import Galleryicon from "../../assets/8.png";
import videosicon from "../../assets/9.png";
import Messageicon from "../../assets/10.png";
import Funderiseicon from "../../assets/11.png";
import Tutorials from "../../assets/12.png";
import Coueses from "../../assets/13.png";

export default function LeftBar() {
  const headingDiv = [
    { path: Friendicon, heading: "Friends" },
    { path: Groupicon, heading: "Groups" },
    { path: MacketPlaceicon, heading: "MacketPlace" },
    { path: Watchicons, heading: "Watch" },
    { path: MemoriesIcon, heading: "Memories" },
    { path: Eventicon, heading: "Event" },
    { path: Gamingicon, heading: "Gaming" },
    { path: Galleryicon, heading: "Galleryicon" },
    { path: Messageicon, heading: "Message" },
    { path: videosicon, heading: "videos" },
    { path: Funderiseicon, heading: "Funderise" },
    { path: Tutorials, heading: "Tutorials" },
    { path: Coueses, heading: "Coueses" },
  ];

  return (
  <div className="left">

  
    <div className="container">
      <div className="menu">
        <div className="user">
          <img
            src="https://st3.depositphotos.com/15648834/17930/v/450/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
            alt="UserIMage"
          />
          <span>Dhanushka Basnayaka</span>
        </div>

        {headingDiv.map((item, index) =>
          index < 5 ? (
            <div key={index} className="user">
              <img src={item.path} alt={`${item.heading} icon`} />
              <span>{item.heading}</span>
            </div>
          ) : null
        )}
        <hr />
        <span>Your Shortcuts</span>
     
        {headingDiv.map((items, index) =>
          index > 5 &&   index < 10 ? (
            <div key={index} className="user">
              <img src={items.path} alt="{items.heading}icon" />
              <span>{items.heading}</span>
            </div>
          ) : null
        )}
        <hr />
        <span>Others</span>
        {headingDiv.map((items, index) =>
          index >9 ? (
            <div key={index} className="user" >
              <img src={items.path} alt="{items.heading}icon" />
              <span>{items.heading}</span>
            </div>
          ) : null
        )}
    </div>
    </div>
    </div>
  );
}
