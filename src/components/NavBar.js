import Widget from './CartWidget';

const Navegacion = () => {
  return (
<header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
      <a href="/" class="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">ATLAS MITOLOGICO
      </a>

      <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li><a href="#" class="nav-link px-2 link-secondary">Bestiario</a></li>
        <li><a href="#" class="nav-link px-2 link-dark">Historias</a></li>
        <li><a href="#" class="nav-link px-2 link-dark">Artefactos</a></li>
        <li><a href="#" class="nav-link px-2 link-dark">Contacto</a></li>
      </ul>

      <div className="widget">
    <Widget />
    </div>

      <div class="col-md-3 text-end">
        <button type="button" class="btn btn-outline-primary me-2">Login</button>
        <button type="button" class="btn btn-primary">Sign-up</button>
      </div>
    </header>
  );
}

export default Navegacion;
