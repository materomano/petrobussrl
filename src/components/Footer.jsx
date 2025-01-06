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
          <h2>Contactanos</h2>
          <section>
            <i className="fa-regular fa-envelope"></i>
            <a href="mailto:petrobussrl@hotmail.com">petrobussrl@hotmail.com</a>
          </section>
          <section>
          <i class="fa-brands fa-whatsapp"></i>
            {/* Enlace WhatsApp */}
            <a
              href="https://wa.me/5492615505521"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.whatsappLink}
            >
              2615505521
            </a>
            <span> --- </span>
            <a
              href="https://wa.me/5492613538519"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.whatsappLink}
            >
              2613538519
            </a>
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
