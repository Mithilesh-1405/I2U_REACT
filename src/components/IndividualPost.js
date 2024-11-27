import React from "react";
import parse from 'html-react-parser';
import defaultImage from "../Assets/images/slider_image_2.jpg";
import { useLocation, useNavigate } from "react-router-dom";
import "../styling/individualPost.scss";

const IndividualPost = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const post = location.state?.post;

  if (!post) {
    navigate("/startups");
    return null;
  }

  const renderContent = (content) => {
    const options = {
      replace: (domNode) => {
        if (domNode.type === 'tag') {
          // Remove inline styles and apply CSS classes
          if (domNode.attribs && domNode.attribs.style) {
            delete domNode.attribs.style;
          }

          // Apply specific classes for styling
          if (domNode.name === 'p') {
            domNode.attribs.className = 'styled-paragraph';
          }
          if (domNode.name === 'b' || domNode.name === 'strong') {
            domNode.attribs.className = 'styled-bold';
          }
        }
      }
    };

    return parse(content, options);
  };

  return (
    <div className="individual_post_container">
      <div className="post_header">
        <div className="post_meta">
          <span className="post_date">{post.date}</span>
        </div>
        <h1 className="post_title">{post.title}</h1>
      </div>

      <div className="post_image">
        <img
          src={post.url ? `${process.env.REACT_APP_BACKEND_URL}${post.url}` : defaultImage}
          alt={post.title}
          onError={(e) => {
            console.log("Image failed to load:", e.target.src);
            e.target.onerror = null;
            e.target.src = defaultImage;
          }}
        />
      </div>

      <div className="post_content">
        {post.content_type === "markup" ? (
          <div className="markup_content">
            {renderContent(post.content)}
          </div>
        ) : (
          <div className="plain_text_content">{post.content}</div>
        )}
      </div>
    </div>
  );
};

export default IndividualPost;
