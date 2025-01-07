import React from "react";
import styles from "../Estilo/Nostros.module.css";

const Nosotros = () => {
  return (
    <section className={styles.nosotros}>
      <div className={styles["scroll-reveal"]} style={{ "--delay": "0.2s" }}>
        <h1>QUIÉNES SOMOS</h1>
        <section>
          <p>
            Somos Petrobus, una empresa familiar con más de 30 años de
            experiencia en el sector del transporte y mantenimiento vehicular.
            Fundada en 1994, nuestra empresa se encuentra ubicada en la
            prestigiosa Refinería Luján de Cuyo en Mendoza, Argentina.
          </p>
        </section>
        <section>
          <p>
            Desde nuestros inicios, hemos colaborado estrechamente con YPF,
            brindando servicios de transporte a diversas empresas contratadas
            por esta importante petrolera. Nuestra flota de vehículos está
            equipada para cumplir con los más altos estándares de calidad y
            seguridad, asegurando que cada traslado se realice de manera
            eficiente y puntual.
          </p>
        </section>
        <section>
          <p>
            Además del transporte, en Petrobus contamos con un taller mecánico
            de primer nivel, donde ofrecemos mantenimiento integral a todo tipo
            de vehículos.
          </p>
        </section>
        <div>
          <h3>EQUIPO</h3>
          <p>
            Nuestro equipo de técnicos especializados se dedica a mantener y
            reparar vehículos con la más alta precisión y cuidado, garantizando
            su óptimo funcionamiento.
          </p>
        </div>
        <div>
          <h3>MISIÓN</h3>
          <p>
            Nuestra misión es proporcionar servicios de transporte y
            mantenimiento vehicular confiables y de alta calidad, respaldados
            por décadas de experiencia y un profundo compromiso con nuestros
            clientes.
          </p>
        </div>
        <div>
          <h3>VISIÓN</h3>
          <p>
            Nuestra visión es consolidarnos como una empresa líder en el
            sector del transporte y mantenimiento vehicular en toda la región,
            innovando continuamente en nuestras prácticas y tecnologías para
            ofrecer un servicio de alta calidad que supere las expectativas de nuestros
            clientes.
          </p>
        </div>
        <section>
          <h3>
            En Petrobus, la confianza y la satisfacción de nuestros clientes son
            nuestra prioridad.
          </h3>
        </section>
      </div>
    </section>
  );
};

export default Nosotros;
