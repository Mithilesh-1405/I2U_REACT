import React, { useEffect } from "react";
import ImageSlider from "../components/ImageSlider";
import Footer from "../components/Footer";
import res1 from "../Assets/images/res1.jpg";
import res2 from "../Assets/images/res2.jpg";
import res3 from "../Assets/images/res3.jpg";

const sliderImages = [
  {
    url: res1,
    title: "i2u.ai, Ideas through AI Ecosystem! Reservation",
    link: "https://i2u.ai/reservation.html",
    color: "#00008b",
    bgColor: "rgba(206, 206, 255,0.949)",
  },
  {
    url: res2,
    title: "i2u.ai, Ideas through AI Ecosystem! Reservation",
    link: "https://i2u.ai/reservation.html",
    color: "#d60084",
    bgColor: "rgba(248, 235, 255, 1)",
  },
  {
    url: res3,
    title: "i2u.ai, Ideas through AI Ecosystem! Reservation",
    link: "https://i2u.ai/reservation.html",
    color: "#006400",
    bgColor: "rgba(149, 250, 236, 1)",
  },
];

const Preview = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <div
          style={{
            width: "80%",
            height: "70vh",
            marginTop: "20px",
            marginBottom: "20px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <iframe
            src="https://i2u.ai/preview.html"
            style={{
              width: "100%",
              height: "100%",
              border: "none",
              backgroundColor: "white",
            }}
            title="Preview"
            frameBorder="0"
          />
        </div>
        <Footer />
      </div>

  );
};

export default Preview;
