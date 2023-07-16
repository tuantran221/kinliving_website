import React from "react";
import SlideImage from "../components/SlideBanner";
import Post from "../components/Post";
import BottomBanner from "../components/BottomBanner";
import MiddleBanner from "../components/MiddleBanner";
import FormSubmit from "../components/FormSubmit"
const Home = () => {
  return (
    <div className="home">
      <SlideImage />
      <FormSubmit/>
      <Post/>
      <MiddleBanner/>
      <BottomBanner/>
    </div>
  );
};

export default Home;
