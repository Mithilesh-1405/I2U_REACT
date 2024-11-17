import React from "react";
import url from "../Assets/images/slider_image_2.jpg";
import "../styling/startups.scss";

function Posts({ posts }) {
  return (
    <div className="startups_post_container">
      <div className="startups_post_grid">
        {posts.map((post, key) => (
          <div key={key} className="startup_grid_box">
            <div className="box_img">
              <img src={url} alt="" />
            </div>
            <div className="box_content">
              <div className="date_title">
                <li className="post_date">{post.date}</li>
                <li>{post.title}</li>
              </div>
              <li className="post_content">{post.content}</li>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Posts;
