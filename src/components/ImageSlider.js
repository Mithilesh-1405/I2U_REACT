import React, { useState } from "react";
import "../styling/imageSlider.scss";

function ImageSlider({ slides }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  function nextSlide(slideNum) {
    switch (slideNum) {
      case 1:
        if (currentIndex === slides.length - 1) {
          setCurrentIndex(0);
        } else {
          setCurrentIndex(currentIndex + 1);
        }
        break;
      case 0:
        if (currentIndex === 0) {
          setCurrentIndex(slides.length - 1);
        } else {
          setCurrentIndex(currentIndex - 1);
        }
    }
  }

  return (
    <div className="slider_container">
      <div className="slider_container2">
        <img src={slides[currentIndex].url} alt="" className="slider_image" />
        <div className="overlayStyle">
          <div className="slider_content">
            <p className="title">{slides[currentIndex].title}</p>
            <p className="link">
              <a href={slides[currentIndex].link}>Read More</a>
            </p>
          </div>
        </div>
        <div className="left_arrow" onClick={() => nextSlide(0)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="50px"
            viewBox="0 -960 960 960"
            width="50px"
            onClick={() => nextSlide(1)}
          >
            <path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z" />
          </svg>
        </div>
        <div className="right_arrow" onClick={() => nextSlide(1)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="50px"
            viewBox="0 -960 960 960"
            width="50px"
            onClick={() => nextSlide(0)}
          >
            <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default ImageSlider;
