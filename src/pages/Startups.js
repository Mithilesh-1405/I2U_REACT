import "../styling/pageStyling.scss";
import "react-loading-skeleton/dist/skeleton.css";
import { React, useEffect, useState } from "react";
import SkeletonCard from "../Loading_UI/SkeletonCard";
import Posts from "../components/Posts";
import { getPosts, handleSorting } from "../Modules/GetPostModule";

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
      <div className="startups_search_box">
        <div className="search_grid_box">
          <form>
            <select
              name="sort_menu"
              id="sort_menu"
              onChange={(e) => handleSorting(e, Articles, setArticles)}
            >
              <option value="latest">Date (Latest)</option>
              <option value="oldest">Date (Oldest)</option>
            </select>
          </form>
        </div>
      </div>

      {isLoading ? (
        <SkeletonCard cards={6} />
      ) : !errors ? (
        <Posts posts={Articles} />
      ) : (
        <div className="errors"> {errors}</div>
      )}
    </div>
  );
}

export default Startups;
