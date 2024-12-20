import React, { useRef, useState } from "react";
import JoditEditor from "jodit-react";
import "../styling/texteditor.scss";
import MoonLoader from "react-spinners/ClipLoader";

function TextEditor() {
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    category: "startup",
  });
  const [isUploading, setIsUploading] = useState(false);

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
      setIsUploading(true);
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
        setIsUploading(false)
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
    <>
     <div className="editor">
      {isUploading ? (
        <div className="uploading">
          <MoonLoader color="#36d7b7" />
          <p>Uploading, please wait...</p>
          </div>
      ) : (
          <div>
            <form className="post_details" onSubmit={handleSubmit}>
            <input
              type="text"
              name="title"
              placeholder="Title"
              value={formData.title}
              onChange={handleChange}
              required
            />
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
            >
              <option value="startup">Startup</option>
              <option value="technology">Technology</option>
              <option value="business">Business</option>
            </select>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setSelectedImage(e.target.files[0])}
            />
            <button type="submit">Publish</button>
          </form>
          <JoditEditor
            ref={editor}
            value={content}
            onChange={(newContent) => setContent(newContent)}
          />
          </div>
      )}
      </div>
    </>
  );
}

export default TextEditor;
