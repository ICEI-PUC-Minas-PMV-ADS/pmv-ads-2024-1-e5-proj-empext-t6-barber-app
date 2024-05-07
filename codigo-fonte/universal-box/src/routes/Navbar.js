import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'

function Navbar() {
  const [showText, setShowText] = useState(true);

  const toggleText = () => {
    setShowText(!showText);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <Link to="/" className="navbar-brand">Gestão de Estoques</Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleText}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${showText ? 'show' : ''}`} id="navbarColor01">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <Link to="/" class="nav-link">Home
                <span class="sr-only">(current)</span>
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/produtos" class="nav-link">Produtos</Link>
            </li>
            <li class="nav-item">
              <Link to="/clientes" class="nav-link">Clientes</Link>
            </li>
            <li class="nav-item">
              <Link to="/fornecedores" class="nav-link">Fornecedores</Link>
            </li>
            <li className="nav-item">
              <Link to="/login" className="nav-link">Login</Link>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="text" placeholder="Search" />
            <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar