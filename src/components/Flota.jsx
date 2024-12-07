import React, { useState } from "react";
import styles from "../Estilo/Flota.module.css";

const Flota = () => {
  const [selectedVehicle, setSelectedVehicle] = useState(null);

  const vehicles = {
    sprinter: {
      name: "Mercedes-Benz Sprinter",
      passengers: "19 pasajeros",
      images: ["/public/images/int-5.jpg"],
    },
    transit: {
      name: "Ford Transit Minibus",
      passengers: "17 pasajeros",
      images: ["/public/images/int-12.jpg", "/public/images/atras.jpg", "/public/images/adentro.jpg"],
    },
    mercedez: {
      name: "Mercedes-Benz Sprinter Combi",
      passengers: "15 pasajeros",
      images: ["/public/images/int-10.jpg"],
    },
    furgon: {
      name: "Ford Transit Furgón",
      passengers: null,
      images: ["/public/images/furgon.jpg"],
    },
    ducato: {
      name: "Fiat Ducato Furgón",
      passengers: null,
      images: ["/public/images/int-1.jpg"],
    },
    expert: {
      name:"Peugeot Expert Furgón ",
      passengers: null,
      images: ["/public/images/expert.jpg"],
    },
  };

  const handleVehicleClick = (vehicleKey) => {
    setSelectedVehicle(vehicles[vehicleKey]);
  };

  const handleBackClick = () => {
    setSelectedVehicle(null);
  };

  return (
    <div className={styles.flota}>
      {!selectedVehicle ? (
        <>
          <h1>FLOTA</h1>
          <div className={styles.imagenes}>
            {Object.keys(vehicles).map((key) => (
              <div
                key={key}
                className={styles.furgon}
                onClick={() => handleVehicleClick(key)}
                style={{ cursor: "pointer" }}
              >
                <img src={vehicles[key].images[0]} alt={vehicles[key].name} />
                <h2>{vehicles[key].name}</h2>
                {vehicles[key].passengers && <h2>{vehicles[key].passengers}</h2>}
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className={styles.detalle}>
          <button onClick={handleBackClick} className={styles.volver}>
            Volver
          </button>
          <h1>{selectedVehicle.name}</h1>
          {selectedVehicle.passengers && <h2>{selectedVehicle.passengers}</h2>}
          <div className={styles.imagenesDetalle}>
            {selectedVehicle.images.map((img, index) => (
              <img key={index} src={img} alt={`Imagen de ${selectedVehicle.name}`} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Flota;

