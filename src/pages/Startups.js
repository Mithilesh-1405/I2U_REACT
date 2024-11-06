import React from "react";
import "../styling/startups.scss";
function Startups() {
  return (
    <div className="startups_container">
      <div className="startups_search_box">
        <div className="search_grid_box">
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
        </div>
        <div className="search_grid_box">
          <form action="">
            <select name="sort_menu" id="sort_menu">
              <option value="latest">Date (Latest)</option>
              <option value="oldest">Date (Oldest)</option>
            </select>
          </form>
        </div>
      </div>

      <div className="startups_post_container">
        <div className="startups_post_grid">
          <div className="startup_grid_box box1">1</div>
          <div className="startup_grid_box">2</div>
          <div className="startup_grid_box">3</div>
          <div className="startup_grid_box">5</div>
          <div className="startup_grid_box">6</div>
          <div className="startup_grid_box">7</div>
          <div className="startup_grid_box">8</div>
          <div className="startup_grid_box">8</div>
          <div className="startup_grid_box">8</div>
          <div className="startup_grid_box">8</div>
          <div className="startup_grid_box">8</div>
        </div>
      </div>
    </div>
  );
}

export default Startups;
