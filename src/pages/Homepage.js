import React from "react";
import ImageSlider from "../components/ImageSlider";
import PostsClone from "../components/PostsClone";
import res1 from "../Assets/images/res1.jpg";
import res2 from "../Assets/images/res2.jpg";
import res3 from "../Assets/images/res3.jpg";
import data from "../Assets/data/data.json";
import "../styling/pageStyling.scss";
import Footer from "../components/Footer";

import sl1 from "../Assets/images/slider_image_1.jpeg";
import sl2 from "../Assets/images/slider_image_2.jpg";
import sl3 from "../Assets/images/slider_image_3.jpg";

import hp1 from '../Assets/images/post_images/hp1.jpg';
import hp2 from '../Assets/images/post_images/hp2.jpg';
import hp3 from '../Assets/images/post_images/hp3.jpg';

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
    hp3,hp1,hp2,
    st3, st2, st4, st5, st1,
    m1, m2, m3, m4, m5,
    e1, e2, sl1, sl2, sl3
  ];

  const sliderImages = [
    {
      url: res1,
      title: "Kindly Reserve Your Membership, Now!",
      link: "https://i2u.ai/reservation.html",
      color:"blue",
      bgColor:"rgba(206, 206, 255,0.949)"
    },
    {
      url: res2,
      title: "I2u.ai, Ideas through AI Ecosystem! Reservation",
      link: "https://i2u.ai/reservation.html",
      color:"purple",
      bgColor:'rgba(248, 235, 255, 0.949)'
    },
    {
      url: res3,
      title: "Please Click Here to Reserve Your Membership!",
      link: "https://i2u.ai/reservation.html",
      color:"green",
      bgColor:"rgba(149, 250, 236, 0.949)"
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
