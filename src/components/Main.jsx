import React, { useState, useEffect } from "react";
import styles from "../Estilo/Main.module.css";


const Main = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = ["/images/int12.jpg", "/images/trompaexpert.jpeg", "/images/int10.jpg", "/images/int5.jpg", "/images/trompa5.jpeg"];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(nextImage, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.main}>
      <div className={styles.carouselContainer}>
        <button className={styles.arrow} onClick={prevImage}>
          <i class="fa-solid fa-arrow-left"></i>
        </button>
        <img src={images[currentImage]} alt="Imagen rotativa" className={styles.image} />
        <button className={styles.arrow} onClick={nextImage}>
          <i class="fa-solid fa-arrow-right"></i>
        </button>
      </div>
      <h3 className={styles.text}>Brindamos viajes seguros y mantenimientos de alta calidad.</h3> {/* Texto SIEMPRE visible */}
    </div>
  );
};

export default Main;