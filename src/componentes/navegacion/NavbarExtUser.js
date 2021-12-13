import React from "react";
import { Link } from "react-router-dom";

const NavbarExtUser = () => {
    return (
        
        <div>
            {/*<!-- Creo Barra de Navegacion de Inicio -->*/}
            <nav className="navbar navbar-expand-lg navbar-light bg-light "> 
                <div className="container-fluid">
                    <Link className='img-thumbnail' to='/'>
                        <img src='./GoberRisaralda.png' width='200' />                 
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mx-auto">
                        <li className="nav-item ">
                                {/*<!-- <Link className="nav-link active" to='/'>Inicio</Link> -->*/}
                                <Link className="nav-link " to='/'>Home</Link>
                            </li>
                            <li className="nav-item ">
                                {/*<!-- <Link className="nav-link active" to='/'>Inicio</Link> -->*/}
                                <Link className="nav-link " to='/cobropredios'>Cobro Predios</Link>
                            </li>
                            <li className="nav-item ">
                                {/*<!-- <Link className="nav-link active" to='/'>Inicio</Link> -->*/}
                                <Link className="nav-link " to='/solicitudconveniopago'>Solicitud Convenio Pago</Link>
                            </li>
                            <li className="nav-item ">
                                <Link className="nav-link " to='/noticias'>Noticias</Link>
                            </li>
                            <li className="nav-item ">
                                <Link className="nav-link " to='/pagopredial'>Pago Predial</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/convenios'>Convenios</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/dashboard'>Dashboard</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled">Contacto </a>
                            </li>
                        </ul>
                        <ul className=" nav justify-content-center">
                            
                            <li className="nav-item  nav-pills">
                                <Link className="nav-link active" to='/login'>LogOut</Link>
                            </li>  
                        </ul>                   
                    </div>
                </div>
            </nav>
            
        </div>

    );
};

export default NavbarExtUser;