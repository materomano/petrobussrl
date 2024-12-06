import React, { useState } from "react";
import { estiloHeader, links, menu, open } from "../Estilo/Header.module.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const scrollToSection = (id) => {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false); // Cierra el menú tras seleccionar una opción
  };

  return (
    <div className={estiloHeader}>
      <div>
        <a href="/">
          <img src="/images/logo.jpg" alt="Logo Petrobus" />
        </a>
      </div>
      <div>
        <h1>PETROBUS S.R.L</h1>
      </div>

      {/* Botón de menú hamburguesa */}
      <button className={menu} onClick={toggleMenu}>
        <i class="fa-solid fa-bars"></i>
      </button>

      {/* Menú de enlaces */}
      <div className={`${links} ${menuOpen ? open : ""}`}>
        <li>
          <a onClick={() => scrollToSection("#main")}>Inicio</a>
        </li>
        <li>
          <a onClick={() => scrollToSection("#nosotros")}>Nosotros</a>
        </li>
        <li>
          <a onClick={() => scrollToSection("#servicios")}>Servicios</a>
        </li>
        <li>
          <a onClick={() => scrollToSection("#flota")}>Flota</a>
        </li>
      </div>
    </div>
  );
};

export default Header;

