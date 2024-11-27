import { React, useEffect, useState } from "react";
import "../styling/pageStyling.scss";
import "react-loading-skeleton/dist/skeleton.css";
import SkeletonCard from "../Loading_UI/SkeletonCard";
import Posts from "../components/Posts";
import FeaturesBenefits from "../components/FeaturesBenefits";
import Footer from "../components/Footer";
import { getPosts, handleSorting } from "../Modules/GetPostModule";

function Mentors() {
  const [Articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errors, setErrors] = useState("");
  const endpoint = process.env.REACT_APP_MENTOR;

  useEffect(() => {
    getPosts({ setArticles, setIsLoading, endpoint, setErrors });
  }, []);

  return (
    <div className="startups_container">
      <FeaturesBenefits price={50000}/>
      {isLoading ? (
        <SkeletonCard cards={6} />
      ) : !errors ? (
        <Posts posts={Articles} />
      ) : (
        <div className="errors">{errors}</div>
      )}
    <Footer/>
    </div>
  );
}

export default Mentors;
