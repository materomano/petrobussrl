import React, { useState, useEffect } from "react";
import styles from "../Estilo/Main.module.css";

const Main = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = ["/images/int12.jpg", "/images/expert.jpg", "/images/int10.jpg", "/images/int5.jpg"]; 

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length); // Alterna entre las imágenes
    }, 3000); // Cambia cada 3 segundos
    return () => clearInterval(interval); // Limpia el intervalo al desmontar
  }, []);

  return (
    <div className={styles.main}>
      <div className={styles.overlay}>
        <h1 className={styles.text}>Brindamos viajes seguros y mantenimientos de alta calidad.</h1>
      </div>
      <img src={images[currentImage]} alt="Imagen rotativa" className={styles.image} />
    </div>
  );
};

export default Main;

