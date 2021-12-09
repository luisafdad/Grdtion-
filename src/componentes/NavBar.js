import logo from './imagenG.png';

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
        <div className="">
        <img className="imag" src={logo} />
          <a className="navbar-brand" href="none">GESTIÓN CATASTRAL</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="btn btn-outline-light mr-2" aria-current="page" href="#" type="submit">Crear Predio</a>
              </li>
              <li className="nav-item">
                <a className="btn btn-outline-light mr-2" aria-current="page" href="#" type="submit">Cobro del Predial</a>
              </li>
              <li className="nav-item">
                <a className="btn btn-outline-light mr-2" aria-current="page" href="#" type="submit">Generacion de Multa</a>
              </li>
              <li className="nav-item">
                <a className="btn btn-outline-light mr-2" aria-current="page" href="#" type="submit">Aprobar /Reprobar Convenio</a>
              </li>

            </ul>
            
          </div>
          </div>
        </div>
    
            
      </nav>
      
    );
}
export default NavBar;