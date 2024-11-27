import { React, useState, useEffect } from "react";
import "../styling/pageStyling.scss";
import "react-loading-skeleton/dist/skeleton.css";
import SkeletonCard from "../Loading_UI/SkeletonCard";
import Posts from "../components/Posts";
import AIRiseContent from "../components/AIRiseContent";
import Footer from "../components/Footer";
import { getPosts, handleSorting } from "../Modules/GetPostModule";

function Enablers() {
  const [Articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errors, setErrors] = useState(false);
  const endpoint = process.env.REACT_APP_ENABLER;

  useEffect(() => {
    getPosts({ setArticles, setIsLoading, endpoint, setErrors });
  }, []);
  return (
    <div className="startups_container">
      <AIRiseContent />
      <Footer/>
      {/* {isLoading ? (
        <SkeletonCard cards={6} />
      ) : !errors ? (
        <Posts posts={Articles} />
      ) : (
        <div className="errors">{errors}</div>
      )} */}
    </div>
  );
}

export default Enablers;
