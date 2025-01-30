import React, { useState } from "react";
import "./header.css";

const Header = () => {
  const [Toggle, showMenu] = useState(false);

  // Custom function to scroll with offset
  const handleScrollToSection = (id) => {
    const section = document.querySelector(id);
    const offset = -80; // Adjust this value based on your header height
    const yPosition = section.getBoundingClientRect().top + window.scrollY + offset;

    window.scrollTo({
      top: yPosition,
      behavior: "smooth",
    });

    showMenu(false); // Close the menu after clicking
  };

  return (
    <header className="header">
      <nav className="nav container">
        <a href="#home" className="nav__logo">
          Surya J
        </a>

        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a
                href="#home"
                className="nav__link active-link"
                onClick={() => handleScrollToSection("#home")}
              >
                <i className="uil uil-estate nav__icon"></i>Home
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#about"
                className="nav__link"
                onClick={() => handleScrollToSection("#about")}
              >
                <i className="uil uil-user nav__icon"></i>About
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#projects"
                className="nav__link"
                onClick={() => handleScrollToSection("#projects")}
              >
                <i className="uil uil-scenery nav__icon"></i>Projects
              </a>
            </li>

            

            <li className="nav__item">
              <a
                href="#skills"
                className="nav__link"
                onClick={() => handleScrollToSection("#skills")}
              >
                <i className="uil uil-file-alt nav__icon"></i>Skills
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#contact"
                className="nav__link"
                onClick={() => handleScrollToSection("#contact")}
              >
                <i className="uil uil-message nav__icon"></i>Contact
              </a>
            </li>
          </ul>

          <i
            className="uil uil-times nav__close"
            onClick={() => showMenu(!Toggle)}
          ></i>
        </div>

        <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
