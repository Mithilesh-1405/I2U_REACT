import React, { useState } from "react";
import "../styling/imageSlider.scss";

function ImageSlider({ slides }) {
  const [slideIndex, setSlideIndex] = useState(0);
  const [fadeState, setFadeState] = useState("fade-in");
  const len = slides.length;

  async function slideChange(direction) {
    setFadeState("fade-out");
    await new Promise((resolve) => setTimeout(resolve, 250));
    let value;
    switch (direction) {
      case 0:
        value = slideIndex === 0 ? len - 1 : slideIndex - 1;
        break;
      case 1:
        value = slideIndex === len - 1 ? 0 : slideIndex + 1;
        break;
    }
    setSlideIndex(value);
    setFadeState("fade-in");
  }
  return (
    <div className="slider_container">
      <div className="slider_container_2">
        <div className={`slide ${fadeState}`}>
          <img src={slides[slideIndex].url} alt="slide_image" />
          <div className="slide_content">
            <p className="title">{slides[slideIndex].title}</p>
            <p className="link">
              <a href={slides[slideIndex].link}>Read More</a>
            </p>
          </div>
        </div>

        <div className="left_arrow btn-slide">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="42px"
            viewBox="0 -960 960 960"
            width="42px"
            fill="black"
            onClick={() => slideChange(0)}
          >
            <path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z" />
          </svg>
        </div>
        <div className="right_arrow btn-slide">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="42px"
            viewBox="0 -960 960 960"
            width="42px"
            fill="black"
            onClick={() => slideChange(1)}
          >
            <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default ImageSlider;


