import React from "react";
import ImageSlider from "../components/ImageSlider";
import PostsClone from "../components/PostsClone";
import image1 from "../Assets/images/slider_image_1.jpeg";
import image2 from "../Assets/images/slider_image_2.jpg";
import image3 from "../Assets/images/slider_image_3.jpg";
import data from "../Assets/data/data.json";
import "../styling/pageStyling.scss";
import Footer from "../components/Footer";

import st1 from '../Assets/images/post_images/st1.jpeg';
import st2 from '../Assets/images/post_images/st2.jpeg';
import st3 from '../Assets/images/post_images/st3.jpeg';
import st4 from '../Assets/images/post_images/st4.jpeg';
import st5 from '../Assets/images/post_images/st5.jpeg';

import m1 from '../Assets/images/post_images/m1.png';
import m2 from '../Assets/images/post_images/m2.png';
import m3 from '../Assets/images/post_images/m3.jpeg';
import m4 from '../Assets/images/post_images/m4.jpg';
import m5 from '../Assets/images/post_images/m5.jpg';

import e1 from '../Assets/images/post_images/e1.png';
import e2 from '../Assets/images/post_images/e2.png';
import e3 from '../Assets/images/post_images/e3.png';
import e4 from '../Assets/images/post_images/e4.png';
import e5 from '../Assets/images/post_images/e5.png';

import HomepagePosts from "../components/HomepagePosts";

function Homepage() {
  const images = [
    st3, st2, st4, st5, st1,
    m1, m2, m3, m4, m5,
    e1, e2, e3, e4, e5
  ];

  const sliderImages = [
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
      <ImageSlider slides={sliderImages} />
      <HomepagePosts posts={data.homepage} images={images} />
      <Footer />
    </div>
  );
}

export default Homepage;
