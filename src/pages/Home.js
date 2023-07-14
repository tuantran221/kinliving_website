import React from "react";
import SlideImage from "../components/Slide_banner";
import Post from "../components/Post";
import BottomBanner from "../components/Bottom_banner";
import MiddleBanner from "../components/Middle_banner";
const Home = () => {
  return (
    <div className="home">
      <SlideImage />
      <Post/>
      <MiddleBanner/>
      <BottomBanner/>
    </div>
  );
};

export default Home;
