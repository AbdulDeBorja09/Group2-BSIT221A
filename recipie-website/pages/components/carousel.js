import React, { useState, useEffect } from "react";
import styles from "@/styles/carousel.module.css";

const images = ["image1.jpg", "image2.jpg", "image1.jpg"];

const Carousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 1000);

    return () => clearInterval(interval);
  }, [currentImageIndex]);
  console.log("Current image:", `../image/${images[currentImageIndex]}`);

  return (
    <div className={styles.slidingGallery}>
      <img  className={styles.image} src={`/images/${images[currentImageIndex]}`} alt="Sliding Image1" />
    </div>
  );
};

export default Carousel;
