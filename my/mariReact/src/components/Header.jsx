import { NavLink } from "react-router-dom";
import ImgLogo from "../assets/logo.png";
import "./HeaderStyle.css";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Header = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duração das animações em milissegundos
      delay: 200,
      once: true,
    });
  }, []);

  return (
    <header className="header-container">
      <nav
        className="navbar navbar-expand-md fixed-top bg-dark"
        data-bs-theme="dark"
      >
        <div className="container container-max-width">
          <a href="index.html" className="navbar-brand">
            <img src={ImgLogo} alt="logo" width="80" />
          </a>

          <button
            className="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#nav-principal"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-center"
            id="nav-principal"
          >
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink
                  to="/"
                  className={({ isActive, isPending, isTransitioning }) =>
                    [
                      "nav-link fs-5 ",
                      isActive ? "nav-active" : "",
                      isPending ? "nav-active" : "",
                      isTransitioning ? "nav-active" : "",
                    ].join(" ")
                  }
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/projetos"
                  className={({ isActive, isPending, isTransitioning }) =>
                    [
                      "nav-link fs-5 ",
                      isActive ? "nav-active" : "",
                      isPending ? "nav-active" : "",
                      isTransitioning ? "nav-active" : "",
                    ].join(" ")
                  }
                >
                  Projetos
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/sobre"
                  className={({ isActive, isPending, isTransitioning }) =>
                    [
                      "nav-link fs-5 ",
                      isActive ? "nav-active" : "",
                      isPending ? "nav-active" : "",
                      isTransitioning ? "nav-active" : "",
                    ].join(" ")
                  }
                >
                  Sobre
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/contato"
                  className={({ isActive, isPending, isTransitioning }) =>
                    [
                      "nav-link fs-5 ",
                      isActive ? "nav-active" : "",
                      isPending ? "nav-active" : "",
                      isTransitioning ? "nav-active" : "",
                    ].join(" ")
                  }
                >
                  Contato
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
