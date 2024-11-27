import { React, useEffect, useState } from "react";
import "../styling/pageStyling.scss";
import "react-loading-skeleton/dist/skeleton.css";
import SkeletonCard from "../Loading_UI/SkeletonCard";
import FeaturesBenefits from "../components/FeaturesBenefits";
import Footer from "../components/Footer";
import PostsClone from "../components/PostsClone";
import postsData from "../Assets/data/data.json";
import img1 from '../Assets/images/post_images/st1.jpeg';
import img2 from '../Assets/images/post_images/st2.jpeg';
import img3 from '../Assets/images/post_images/st3.jpeg';
import img4 from '../Assets/images/post_images/st4.jpeg';
import img5 from '../Assets/images/post_images/st5.jpeg';

function Startups() {
  const posts = postsData.startups;
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState("");
  const endpoint = process.env.REACT_APP_STARTUP;
  const images = [img3, img2, img4, img5, img1];

  // useEffect(() => {
  //   getPosts({ setArticles, setIsLoading, endpoint, setErrors });
  // }, []);

  return (
    <div className="startups_container">
      <FeaturesBenefits price={40000} />
      {isLoading ? (
        <SkeletonCard cards={6} />
      ) : errors ? (
        <div className="errors"> {errors}</div>
      ) : (
        <PostsClone posts={posts} images={images} />
      )}
      <div className="more_btn_cont">
        <button className="more_button" onClick={() => window.open('https://i2u.ai/drpl/', '_blank')}>...More</button>
      </div>
      <Footer />
    </div>
  );
}

export default Startups;
