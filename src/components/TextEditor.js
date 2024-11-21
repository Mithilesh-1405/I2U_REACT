import React, { useRef, useState } from "react";
import JoditEditor from "jodit-react";
import "../styling/texteditor.scss";

function TextEditor() {
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    category: "startup",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    setSelectedImage(e.target.files[0]);
  };

  async function handleSubmit(e) {
    e.preventDefault();

    if (!formData.title.trim()) {
      alert("Please enter a title");
      return;
    }
    if (!content.trim()) {
      alert("Please enter content");
      return;
    }

    try {
      let imageUrl = "";

      // Upload image if selected
      if (selectedImage) {
        const imageFormData = new FormData();
        imageFormData.append("image", selectedImage);

        const imageResponse = await fetch(
          process.env.REACT_APP_BACKEND_URL + "/uploadImage",
          {
            method: "POST",
            body: imageFormData,
          }
        );

        if (!imageResponse.ok) {
          throw new Error("Failed to upload image");
        }

        const imageData = await imageResponse.json();
        imageUrl = imageData.imageUrl;
      }

      const response = await fetch(
        process.env.REACT_APP_BACKEND_URL + "/publishPost",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            content,
            formData,
            imageUrl,
          }),
        }
      );

      const data = await response.json();
      if (response.status === 200) {
        console.log("Post published successfully");
        setContent("");
        setSelectedImage(null);
        setFormData({
          title: "",
          category: "startup",
        });
      } else {
        console.error("Failed to publish:", data.error);
      }
    } catch (err) {
      console.error("Error publishing post:", err);
    }
  }

  return (
    <div className="editor">
      <form className="post_details" onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
        />
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
        >
          <option value="startup">Startups</option>
          <option value="mentor">Mentors</option>
          <option value="whatwedo">What we do</option>
          <option value="enabler">Enablers</option>
        </select>
        <div className="image_upload">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="image_input"
          />
          {selectedImage && (
            <div className="image_preview">
              <p>Selected: {selectedImage.name}</p>
            </div>
          )}
        </div>
        <button type="submit">Publish</button>
      </form>
      <JoditEditor
        ref={editor}
        value={content}
        onChange={(newContent) => setContent(newContent)}
      />
    </div>
  );
}

export default TextEditor;
