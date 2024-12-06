import React from "react";
import { nosotros } from "../Estilo/Nostros.module.css";
const Nosotros = () => {
  return (
    <div className={nosotros}>
      <div>
        <h1>QUIENES SOMOS</h1>
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
          <h3>MISION</h3>
          <p>
            Nuestra mision es proporcionar servicios de transporte y
            mantenimiento vehicular confiables y de alta calidad, respaldados
            por décadas de experiencia y un profundo compromiso con nuestros
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
    </div>
  );
};

export default Nosotros;
