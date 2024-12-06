import React from "react";
import styles from "../Estilo/Footer.module.css";

const Footer = () => {
  return (
    <>
      <div className={styles.futer}>
        {" "}
        {/* Logo */}
        <a href="/">
          <img src="/images/logo.jpg" alt="Logo Petrobus" />
        </a>
        {/* Sección de contacto */}
        <div className={styles.contact}>
          <h2>Contáctanos</h2>
          <section>
            <i className="fa-regular fa-envelope"></i>
            <h1>Petrobussrl@hotmail.com</h1>
          </section>
          <section>
            <i className="fa-solid fa-phone"></i>
            <h1>2616231150---2613538519</h1>
          </section>
        </div>
      </div>

      <section>
        {/* Línea y derechos reservados */}
      <hr className={styles.line} />
      <div className={styles.reserved}>
        <p>
          © {new Date().getFullYear()} Petrobus SRL. Todos los derechos
          reservados.
        </p>
      </div>
      </section>
    </>
  );
};

export default Footer;
