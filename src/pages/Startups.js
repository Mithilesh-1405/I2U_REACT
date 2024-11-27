import { React, useEffect, useState } from "react";
import "../styling/pageStyling.scss";
import "react-loading-skeleton/dist/skeleton.css";
import SkeletonCard from "../Loading_UI/SkeletonCard";
import Posts from "../components/Posts";
import FeaturesBenefits from "../components/FeaturesBenefits";
import { getPosts, handleSorting } from "../Modules/GetPostModule";
import Footer from "../components/Footer";

function Startups() {
  const [Articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errors, setErrors] = useState("");
  const endpoint = process.env.REACT_APP_STARTUP;

  useEffect(() => {
    getPosts({ setArticles, setIsLoading, endpoint, setErrors });
  }, []);

  return (
    <div className="startups_container">
      <FeaturesBenefits price={40000}/>
      {isLoading ? (
        <SkeletonCard cards={6} />
      ) : errors ? (
        <div className="errors"> {errors}</div>
      ) : (
        <Posts posts={Articles} />
      )}
      <Footer/>
    </div>
  );
}

export default Startups;
