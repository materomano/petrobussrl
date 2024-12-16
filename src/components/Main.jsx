import React, { useState, useEffect } from "react";
import styles from "../Estilo/Main.module.css";

const Main = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = ["/images/int12.jpg", "/images/trompaexpert.jpg", "/images/int10.jpg", "/images/int5.jpg", "/images/trompa2.jpg"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length); // Alterna entre las imágenes
    }, 3000); // Cambia cada 3 segundos
    return () => clearInterval(interval); // Limpia el intervalo al desmontar
  }, []);

  // Verifica si la imagen actual es una "trompa"
  const isTrompa = images[currentImage].includes("trompa");

  return (
    <div className={styles.main}>
      <div className={styles.overlay}>
        {/* Solo muestra el texto si no es una imagen de "trompa" */}
        {!isTrompa && (
          <h1 className={styles.text}>Brindamos viajes seguros y mantenimientos de alta calidad.</h1>
        )}
      </div>
      <img
        src={images[currentImage]}
        alt="Imagen rotativa"
        className={`${styles.image} ${isTrompa ? styles.trompa : ""}`} // Agrega clase si es trompa
      />
    </div>
  );
};

export default Main;
