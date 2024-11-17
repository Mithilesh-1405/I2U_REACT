import React from "react";
import Skeleton from "react-loading-skeleton";
import "../styling/startups.scss";
function Skeleton_startup({ cards }) {
  return (
    <div className="startups_post_container">
      <div className="startups_post_grid">
        {Array(cards)
          .fill(0)
          .map((_, index) => (
            <div
              key={index}
              className="skeleton_grid_box"
              style={{ backgroundColor: "rgba(0,0,0,0)" }}
            >
              <Skeleton circle width={200} height={200} />
              <div className="box_content">
                <Skeleton count={10} />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Skeleton_startup;
