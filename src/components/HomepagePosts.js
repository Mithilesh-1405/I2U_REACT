import React from "react";
import "../styling/homepagePostsStyling.scss";

function HomepagePosts({ posts, images }) {
  const handleRedirect = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div className="hpp_post_container">
      <div className="hpp_post_grid">
        {posts.map((post, key) => {
          const imageUrl = images[key];
          return (
            <div key={key} className="hpp_grid_box" onClick={() => handleRedirect(post.link)}>
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
      <div className="hp_more_btn_cont">
        <button className="more_button" onClick={() => window.open('https://i2u.ai/drpl/', '_blank')}>... More</button>
      </div>
    </div>
  );
}

export default HomepagePosts;
