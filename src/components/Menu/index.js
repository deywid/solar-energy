import React from "react";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <nav className="main-manu">
      <ul>
        <Link to="/">
          <li>Painel</li>
        </Link>
        <Link to="/Unidades">
          <li>Unidades</li>
        </Link>
        <Link to="/Cadastros">
          <li>Cadastro de energia gerada</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Menu;
