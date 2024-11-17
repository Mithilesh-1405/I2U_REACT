import "../styling/startups.scss";
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
        {/* <div className="search_grid_box">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="30px"
            viewBox="0 -960 960 960"
            width="30px"
          >
            <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
          </svg>
        </div>
        <div className="search_grid_box">
          <input type="text" placeholder="Search" />
        </div> */}
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
