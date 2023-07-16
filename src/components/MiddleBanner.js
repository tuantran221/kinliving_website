import React from "react";
import "../Styles/MiddleBanner.css";
import Tree from "../assets/icon/tree.webp";
import Kitchen from "../assets/icon/kitchen.webp";
import BathRoom from "../assets/icon/shower.webp";
import Launderette from "../assets/icon/washing.webp";
import HeadPhone from "../assets/icon/headphone.webp";
import Service from "../assets/icon/human.webp";
import Wifi from "../assets/icon/wifi.webp";
import Community from "../assets/icon/exclamation_mark.webp";
const Middle_banner = () => {
  return (
    <div className="middle-banner">
      <div className="middle-banner-card">
        <div className="middle-banner-text">
          <span>Lift up your living experience</span>
          <br></br>
          <p>
            At M Village, you are the owner who could enjoy the high-class
            facilities and exciting experiences right from the moment you step
            in.
          </p>
        </div>
        <div className="middle-banner-icon">
          <div className="middle-banner-tree">
            <div className="middle-banner-icon-tree">
              <img style={{paddingLeft: '12px'}} src={Tree} alt="tree" />
            </div>
            <div className="middle-banner-subtext">
              <span>
                Greenery <br></br> Landscape
              </span>
            </div>
          </div>
          <div className="middle-banner-kitchen">
            <div className="middle-banner-icon-kitchen">
              <img style={{paddingLeft: '4px'}} src={Kitchen} alt="kitchen" />
            </div>
            <div className="middle-banner-subtext">
              <span>
                Modern <br></br> kitchen
              </span>
            </div>
          </div>
          <div className="middle-banner-bathroom">
            <div className="middle-banner-icon-bathroom">
              <img style={{paddingLeft: '10px'}}  src={BathRoom} alt="bathroom" />
            </div>
            <div className="middle-banner-subtext">
              <span>
                Private <br></br> bathroom
              </span>
            </div>
          </div>
          <div className="middle-banner-lunderette">
            <div className="middle-banner-icon-launderette">
              <img style={{paddingLeft: '15px'}}  src={Launderette} alt="launderette" />
            </div>
            <div className="middle-banner_subtext">
              <span>
                Free <br></br>Launderette
              </span>
            </div>
          </div>
          <div className="middle-banner-headPhone">
            <div className="middle-banner-icon-headPhone">
              <img src={HeadPhone} alt="headPhone" />
            </div>
            <div className="middle-banner_subtext">
              <span>
                Security <br></br>24/7
              </span>
            </div>
          </div>
          <div className="middle-banner-service">
            <div className="middle-banner-icon-service">
              <img style={{paddingLeft: '28px'}} src={Service} alt="Service" />
            </div>
            <div className="middle-banner-subtext">
              <span>
                Room Cleaning <br></br>Service
              </span>
            </div>
          </div>
          <div className="middle-banner-wifi">
            <div className="middle-banner-icon-wifi">
              <img style={{paddingLeft: '15px'}} src={Wifi} alt="Wifi" />
            </div>
            <div className="middle-banner-subtext">
              <span>
                High Speed <br></br>Wifi
              </span>
            </div>
          </div>
          <div className="middle-banner-community">
            <div className="middle-banner-icon-community">
              <img style={{paddingLeft: '18px'}} src={Community} alt="bathroom" />
            </div>
            <div className="middle-banner-subtext">
              <span>
                Civilized <br></br> communitye
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Middle_banner;
