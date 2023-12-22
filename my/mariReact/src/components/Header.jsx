import { Link } from "react-router-dom";
import ImgLogo from "../assets/logo.png";
import "./HeaderStyle.css";

const Header = () => {
  return (
    <header className="header-container">
      <nav
        className="navbar navbar-expand-md fixed-top bg-dark"
        data-bs-theme="dark"
      >
        <div className="container">
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
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/projetos" className="nav-link">
                  Projetos
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/sobre" className="nav-link">
                  Sobre
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contato" className="nav-link">
                  Contato
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
