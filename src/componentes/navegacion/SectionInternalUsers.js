import React from "react";
import NavbarLink from "./NavbarLink";


const SectionInternalUsers = ( { role } ) => {

    const listSections = [
        {
            path: "/predios",
            label: "Predios",
            estilo: ""
        },
        {
            path: "/aprorepro",
            label: "| Solicitudes de Convenio |",
            estilo: ""
        }
    ];

    if (role === 'administrador') {
        listSections.push({
            path: "/usuarios",
            label: "Usuarios",
            estilo: ""
        });
    }

    listSections.push({
        path: "/noticias",
        label: "Noticias",
        estilo: ""
    });

    return (
        listSections.map((section) => <NavbarLink path={section.path} label={section.label} estilo={section.estilo} /> )
    );
}

export default SectionInternalUsers;