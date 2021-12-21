import React from "react";
import NavbarLink from "./NavbarLink";


const SectionExternalUsers = ( ) => {

    const listSections = [
        {
            path: "/predios",
            label: "Mis Predios",
            estilo: ""
        },
        {
            path: "/solicitudconveniopago",
            label: "Solicitar Convenio",
            estilo: ""
        },
        {
            path: "/pagopredial",
            label: "Realizar Pago",
            estilo: ""
        },
        {
            path: "/noticias",
            label: "Noticias",
            estilo: ""
        }
    ];

    return (
        listSections.map((section) => <NavbarLink path={section.path} label={section.label} estilo={section.estilo} /> )
    );
}

export default SectionExternalUsers;