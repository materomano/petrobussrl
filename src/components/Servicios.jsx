import React from "react";
import { servicio , tareas} from "../Estilo/Servicios.module.css";

export const Servicios = () => {
  return (
    <div className={servicio}>
      <h2>SERVICIOS</h2>
      <p>
        En Petrobus, brindamos una amplia gama de servicios para satisfacer las
        diversas necesidades de nuestros clientes. Nuestros principales
        servicios incluyen:
      </p>
      <div>
        <h4>1. Traslado de Pasajeros:</h4>
        <p>
          Contamos con vehículos con capacidad para 15 y 19 pasajeros,
          garantizando un transporte cómodo y seguro.
        </p>
      </div>
      <section>
      <h4>2. Taller Mecánico de Última Tecnología:</h4>
        <img src="/public/images/herramientas.jpg" alt="" />
        <p>
          Ofrecemos servicios de revisión y reparación de todo tipo de
          vehículos, utilizando la última tecnología disponible en el mercado.
        </p>
        <h2>Nuestros servicios incluyen:</h2>
      </section>

      <div className={tareas}>
      
        <div>
          <h3>Lavados completos</h3>
          <img src="/images/lavado-auto.jpg" alt="" />
        </div>
        <div>
          <h3>Pintura</h3>
          <img src="/images/pintura.jpg" alt="" />
        </div>
        <div>
          <h3>Mecanica General</h3>
          <img src="/images/mantenimiento.jpeg" alt="" />
        </div>
        <div>
          <h3>Mantenimiento eléctrico </h3>
          <img src="/images/mantenimiento-electrico.jpg" alt="" />
        </div>
      </div>

      <section>
        <h4>3. Reparto de Comida Gastronómica:</h4>
        <div>
          <img src="/images/reparto-de-comida.jpg" alt="" />
        </div>
        <p>
          Proporcionamos servicios de reparto de comida para las empresas
          contratistas de YPF, asegurando la entrega oportuna y de alta calidad.
        </p>

        <h4>
          En Petrobus, nos comprometemos a ofrecer servicios de alta calidad y
          confiabilidad, respaldados por nuestra experiencia y dedicación al
          cliente.
        </h4>
      </section>
    </div>
  );
};
