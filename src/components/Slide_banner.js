import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Top_banner from "../assets/banner/header_banner.jpg";
import styles from "../Styles/app.module.css";
const Slide_banner = () => {
  const spanStyle = {
    padding: "20px",
    color: "#000000",
    alignItems: "center",
    textAlign: "center",
    justifyContent: "center",
    marginTop: "12rem",
    fontFamily: "IBM Plex Sans, sans-serif",
  };

  const divStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundSize: "cover",
    height: "630px",
    overflow: "hidden",


   
  };
  const slideImages = [
    {
      url: Top_banner,
    },
    {
      url: null,
    },
  ];
  return (
    <div>
      <Fade>
        {slideImages.map((slideImage, index) => (
          <div key={index}>
            <div
              style={{ ...divStyle, backgroundImage: `url(${slideImage.url})` }}
            >
              {slideImage.url == null ? (
                <div style={spanStyle}>
                  <span style={{ fontSize: "60px" }}>The unique living</span>
                  <br></br>
                  <span style={{ fontSize: "60px" }}>
                    experience at Kinliving
                  </span>
                  <div style={{ marginTop: "20px", fontSize: "14px" }}>
                    <p>
                      If you are looking for a classy living space, a good
                      community and a warm{" "}
                    </p>
                    <br />
                    <p style={{ marginTop: "-11px" }}>
                      modern apartment to share positive living values, you are
                      at the right place.
                    </p>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        ))}
      </Fade>
      <div
        style={{
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          marginTop: "-5.5rem",
          zIndex: "1000",
        }}
      >
        <button className={styles.btn_explore}>Explore</button>
      </div>
    </div>
  );
};

export default Slide_banner;
