import React from "react";
import NavbarLink from "./NavbarLink";


const SectionExternalUsers = ( ) => {

    const listSections = [
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