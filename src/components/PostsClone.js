import React from "react";
import "../styling/pageStyling.scss";

function PostsClone({ posts, images }) {
  const handleRedirect = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div className="startups_post_container">
      <div className="startups_post_grid">
        {posts.map((post, key) => {
          const imageUrl = images[key];
          return (
            <div key={key} className="startup_grid_box" onClick={() => handleRedirect(post.link)}>
              <div className="box_img">
                <img
                  src={imageUrl}
                  alt={post.title || "Post image"}
                />
              </div>
              <div className="box_content">
                <div className="date_title">
                  <li className="post_date">{post.date}</li>
                  <li>{post.title}</li>
                </div>
                <div
                  className="post_content"
                  title={post.content}
                >
                  {post.content}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PostsClone;
