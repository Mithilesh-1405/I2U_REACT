import React from "react";
import DOMPurify from 'dompurify';
import defaultImage from "../Assets/images/slider_image_2.jpg";
import "../styling/startups.scss";
import { useNavigate } from 'react-router-dom';

function Posts({ posts }) {
  const sanitizeContent = (content) => {
    const sanitizedHtml = DOMPurify.sanitize(content);
    
    // Create a temporary div to parse the HTML and get text content
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = sanitizedHtml;
    const textContent = tempDiv.textContent || tempDiv.innerText;
    
    return {
      __html: sanitizedHtml,
      text: textContent
    };
  };

  const getImageUrl = (url) => {
    if (!url) return defaultImage;
    // Extract filename from the full path
    const filename = url.split('/').pop();
    return `${process.env.REACT_APP_BACKEND_URL}/uploads/${filename}`;
  };

  const navigate = useNavigate();
  const handlePostClick = (post) => {  
    navigate(`/post/${post.post_id}`, { state: { post } });
  };

  return (
    <div className="startups_post_container">
      <div className="startups_post_grid">
        {posts.map((post, key) => {
          const sanitizedContent = sanitizeContent(post.content);
          return post.content_type === 'markup' ? (
            <div key={key} className="startup_grid_box markup_content" onClick={() => handlePostClick(post)} >
              <div className="box_img">
                <img 
                  src={getImageUrl(post.url)}
                  alt={post.title || "Post image"} 
                  onError={(e) => {
                    console.log('Image failed to load:', post.url);
                    e.target.onerror = null;
                    e.target.src = defaultImage;
                  }}
                />
              </div>
              <div className="box_content">
                <div className="date_title">
                  <li className="post_date">{post.date}</li>
                  <li>{post.title}</li>
                </div>
                <div
                  className="post_content"
                  title={sanitizedContent.text} // Show full text on hover
                  dangerouslySetInnerHTML={sanitizedContent}
                />
              </div>
            </div>
          ) : (
            <div key={key} className="startup_grid_box" onClick={() => handlePostClick(post)}> 
              <div className="box_img">
                <img 
                  src={getImageUrl(post.url)}
                  alt={post.title || "Post image"}
                  onError={(e) => {
                    console.log('Image failed to load:', post.url);
                    e.target.onerror = null;
                    e.target.src = defaultImage;
                  }}
                />
              </div>
              <div className="box_content">
                <div className="date_title">
                  <li className="post_date">{post.date}</li>
                  <li>{post.title}</li>
                </div>
                <div 
                  className="post_content"
                  title={sanitizedContent.text} // Show full text on hover
                >
                  {sanitizedContent.text}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Posts;
