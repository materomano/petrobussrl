import React, { useState } from "react";
import Modal from "./Modal"; // Asegúrate de tener un Modal reutilizable
import styles from "../Estilo/Flota.module.css";

const Flota = () => {
  const [selectedImages, setSelectedImages] = useState([]); // Almacena las imágenes del vehículo
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // Índice de la imagen actual
  const [isModalOpen, setIsModalOpen] = useState(false); // Controla el estado del modal

  const vehicles = {
    sprinter: {
      name: "Mercedes-Benz Sprinter",
      passengers: "19 pasajeros",
      images: ["/images/int5.jpg", "/images/trompa7.jpg", "/images/asientos7.jpg"],
    },
    transit: {
      name: "Ford Transit Minibus",
      passengers: "17 pasajeros",
      images: ["/images/int12.jpg", "/images/atras.jpg", "/images/adentro.jpg"],
    },
    mercedez: {
      name: "Mercedes-Benz Sprinter Combi",
      passengers: "15 pasajeros",
      images: ["/images/int10.jpg", "/images/trompa10.jpg", "/images/asientos10.jpg"],
    },
    furgon: {
      name: "Ford Transit Furgón",
      passengers: null,
      images: ["/images/furgon.jpg", "/images/trompa2.jpg"],
    },
    ducato: {
      name: "Fiat Ducato Furgón",
      passengers: null,
      images: ["/images/int1.jpg"],
    },
    expert: {
      name: "Peugeot Expert Furgón",
      passengers: null,
      images: ["/images/expert.jpg", "/images/trompaexpert.jpeg"],
    },
  };

  // Abre el modal con las imágenes seleccionadas
  const openModal = (images, index = 0) => {
    setSelectedImages(images);
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  // Cierra el modal
  const closeModal = () => {
    setSelectedImages([]);
    setCurrentImageIndex(0);
    setIsModalOpen(false);
  };

  // Navegar a la imagen siguiente
  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % selectedImages.length);
  };

  // Navegar a la imagen anterior
  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? selectedImages.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className={styles.flota}>
      <h1>FLOTA</h1>
      <div className={styles.cardsContainer}>
        {Object.keys(vehicles).map((key) => (
          <div key={key} className={styles.card} style={{ cursor: "pointer" }}>
            <h2>{vehicles[key].name}</h2>
            {vehicles[key].passengers && <h3>{vehicles[key].passengers}</h3>}
            <div className={styles.furgon}>
              <img
                src={vehicles[key].images[0]} // Imagen principal
                alt={vehicles[key].name}
                className={styles.cardImage}
                onClick={() => openModal(vehicles[key].images)} // Pasa todas las imágenes
              />
              <div className={styles.overlay}>
                <span>Ver más</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal con carrusel */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        {selectedImages.length > 0 && (
          <div className={styles.carousel}>
            <button onClick={handlePrevImage} className={`${styles.carouselButton} ${styles.left}`}>
              <img src="/images/flechaizquierda.png" alt="" />
            </button>
            <img
              src={selectedImages[currentImageIndex]}
              alt={`Imagen ${currentImageIndex + 1}`}
              className={styles.modalImage}
            />
            <button onClick={handleNextImage} className={`${styles.carouselButton} ${styles.right}`}>
              <img src="/images/flechaderecha.png" alt="" />
            </button>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Flota;
