import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Top_banner from "../assets/banner/header_banner.jpg";
import "../Styles/SlideBanner.css";
const Slide_banner = () => {
  const disableArrows = {
    duration: 2000,
    arrows: false,
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
      <Fade {...disableArrows}>
        {slideImages.map((slideImage, index) => (
          <div key={index}>
            <div
              style={{ backgroundImage: `url(${slideImage.url})` }}
              className="slide-div"
            >
              {slideImage.url == null ? (
                <div className="slide-span">
                  <span className="slide-span-title">The unique living</span>
                  <br></br>
                  <span className="slide-span-title">
                    experience at Kinliving
                  </span>
                  <div className="slide-span-text">
                    <p>
                      If you are looking for a classy living space, a good
                      community and a warm{" "}
                    </p>
                    <br />
                    <p className="slide-span-text-p">
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
      <div className="slide-button-wrapper">
        <button className="slide-button-explore">Explore</button>
      </div>
    </div>
  );
};

export default Slide_banner;
