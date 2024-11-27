import React from "react";
import ImageSlider from "../components/ImageSlider";
import image1 from "../Assets/images/slider_image_1.jpeg";
import image2 from "../Assets/images/slider_image_2.jpg";
import image3 from "../Assets/images/slider_image_3.jpg";
import "../styling/pageStyling.scss";
import Footer from "../components/Footer";

function Homepage() {
  const images = [
    {
      url: image1,
      title: "The Cloud Computing Era: A New Business Model",
      link: "https://i2u.ai/drpl/node/74",
    },
    {
      url: image2,
      title: "Elephant Traps: Pre-Seed Pitfalls That Can Kill Your Startup",
      link: "https://i2u.ai/drpl/node/80",
    },
    {
      url: image3,
      title: "The Agile Methodology: Adapting to Rapid Change",
      link: "https://i2u.ai/drpl/node/81",
    },
  ];

  return (
    <div className="home_container">
      <ImageSlider slides={images} />
      <Footer/>
    </div>
  );
}

export default Homepage;
