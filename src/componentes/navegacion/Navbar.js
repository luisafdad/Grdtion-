import React from "react";
import { Link } from "react-router-dom";
import LoginSection from "./LoginSection";
import SectionInternalUsers from "./SectionInternalUsers";
import SectionExternalUsers from "./SectionsExternalUsers";

function showSectionsByRole (role) {
    console.log("showSectionsByRole", role);
    if (role === 'externo') {
        return <SectionExternalUsers />;
    }

    if (role === 'interno' || role === 'administrador') {
        return <SectionInternalUsers role={role} />;
    }
}

const Navbar = ({ role }) => {

    return (

        <div >
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
                            { showSectionsByRole(role) }
                        </ul>
                        <LoginSection role={role} />

                    </div>
                </div>
            </nav>

        </div>
    );
};

export default Navbar;