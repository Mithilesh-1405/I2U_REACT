import React from "react";
import ImageSlider from "./ImageSlider";
import image1 from "../Assets/images/slider_image_1.jpeg";
import image2 from "../Assets/images/slider_image_2.jpg";
import image3 from "../Assets/images/slider_image_3.jpg";
import "../styling/homepage.scss";

function Homepage() {
  const images = [
    {
      url: image1,
      title: "The Cloud Computing Era: A New Business Model",
      link: "https://adventuresinbmterrain.blogspot.com/2024/10/the-cloud-computing-era-new-business.html",
    },
    {
      url: image2,
      title: "Elephant Traps: Pre-Seed Pitfalls That Can Kill Your Startup",
      link: "https://adventuresinbmterrain.blogspot.com/2024/11/elephant-traps-pre-seed-pitfalls-that.html",
    },
    {
      url: image3,
      title: "The Agile Methodology: Adapting to Rapid Change",
      link: "https://adventuresinbmterrain.blogspot.com/2024/11/the-agile-methodology-adapting-to-rapid.html",
    },
  ];
  return (
    <div className="home_container">
      <ImageSlider slides={images} />
    </div>
  );
}

export default Homepage;
