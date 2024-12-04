import { React, useEffect, useState } from "react";
import "../styling/pageStyling.scss";
import "react-loading-skeleton/dist/skeleton.css";
import SkeletonCard from "../Loading_UI/SkeletonCard";
import FeaturesBenefits from "../components/FeaturesBenefits";
import Footer from "../components/Footer";
import { getPosts, handleSorting } from "../Modules/GetPostModule";
import PostsClone from "../components/PostsClone";
import postsData from "../Assets/data/data.json";
import img1 from '../Assets/images/post_images/m1.png';
import img2 from '../Assets/images/post_images/m2.png';
import img3 from '../Assets/images/post_images/m3.jpeg';
import img4 from '../Assets/images/post_images/m4.jpg';
import img5 from '../Assets/images/post_images/m5.jpg';


function Mentors() {
  const posts = postsData.mentors
  const [Articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState("");
  const endpoint = process.env.REACT_APP_MENTOR;
  const images = [img1, img2, img3, img4, img5];

  // useEffect(() => {
  //   getPosts({ setArticles, setIsLoading, endpoint, setErrors });
  // }, []);

  return (
    <div className="startups_container">
      <FeaturesBenefits price={50000}/>
      {isLoading ? (
        <SkeletonCard cards={5} />
      ) : errors ? (
        <div className="errors"> {errors}</div>
      ) : (
        <PostsClone posts={posts} images={images} />
      )}
      <div className="more_btn_cont">
        <button className="more_button" onClick={() => window.open('https://i2u.ai/drpl/', '_blank')}>... More</button>
      </div>
    <Footer/>
    </div>
  );
}

export default Mentors;
