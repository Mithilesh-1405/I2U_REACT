import { React, useState, useEffect } from "react";
import "../styling/pageStyling.scss";
import "react-loading-skeleton/dist/skeleton.css";
import SkeletonCard from "../Loading_UI/SkeletonCard";
import AIRiseContent from "../components/AIRiseContent";
import Footer from "../components/Footer";
import { getPosts, handleSorting } from "../Modules/GetPostModule";
import postsData from "../Assets/data/data.json";
import PostsClone from "../components/PostsClone";
import img1 from '../Assets/images/post_images/e1.png';
import img2 from '../Assets/images/post_images/e2.png';
import img3 from '../Assets/images/post_images/e3.png';
import img4 from '../Assets/images/post_images/e4.png';
import img5 from '../Assets/images/post_images/e5.png';

function Enablers() {
  const posts = postsData.enablers;
  const [Articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState(false);
  const endpoint = process.env.REACT_APP_ENABLER;
  const images = [img1, img2, img3, img4, img5];

  // useEffect(() => {
  //   getPosts({ setArticles, setIsLoading, endpoint, setErrors });
  // }, []);
  return (
    <div className="startups_container">
      <AIRiseContent />
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

export default Enablers;
