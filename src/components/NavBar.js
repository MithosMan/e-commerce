import React from 'react';
import Widget from './CartWidget';
import atlas from "./img/atlas.png";

const Navegacion = () => {
  return (
<header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
<img src={atlas} className="col-1"></img>
      <a href="/" class="d-flex align-items-center mb-md-0 text-dark text-decoration-none">ATLAS MITOLOGICO
      </a>

      <ul className="nav col-6 col-md-auto mb-2 justify-content-center align-items-center mb-md-0">
        <li><a href="#" class="nav-link px-2 link-secondary">Bestiario</a></li>
        <li><a href="#" class="nav-link px-2 link-dark">Historias</a></li>
        <li><a href="#" class="nav-link px-2 link-dark">Artefactos</a></li>
        <li><a href="#" class="nav-link px-2 link-dark">Contacto</a></li>
      </ul>

      <div className="col-4 text-end">
      <Widget/>
        <button type="button" class="btn btn-outline-primary me-2">Login</button>
        <button type="button" class="btn btn-primary">Sign-up</button>
      </div>
    </header>
  );
}

export default Navegacion;
