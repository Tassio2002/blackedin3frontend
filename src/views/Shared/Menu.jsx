import React from "react";
import { Link } from "react-router-dom";
import "./assets/css/menustyles.css";

import BlackedinLogo from "./assets/img/BlackedinLogo.svg";

const Menu = () => {
  return (
    <>
      <nav class="navbar navbar-dark navbar-expand-md navigation-clean-search">
        <div class="container">
          <Link to="/">
            <a class="navbar-brand" href="/">
              <img src={BlackedinLogo} alt="Logo BlackedIn" />
            </a>
          </Link>

          <div class="collapse navbar-collapse" id="navcol-2">
            <ul class="navbar-nav">
              <li class="nav-item"></li>
            </ul>
            <form class="form-inline mr-auto" target="_self">
              <div class="form-group mb-0">
                <label for="search-field"></label>
              </div>
            </form>
            <span class="navbar-text"> </span>
          </div>

          <Link to="/login">
            <a class="btn action-button" role="button" href="/">
              Login
            </a>
          </Link>

          <div class="dropdown">
            <button
              class="dropdown-toggle btn-cadastre-se"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Cadastre-se
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <Link to="/cadastroProfissional">
                  <a class="dropdown-item" href="/">
                    Profissional
                  </a>
                </Link>
              </li>
              <li>
                <Link to="/cadastroEmpresa">
                  <a class="dropdown-item" href="/">
                    Empresa
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Menu;
