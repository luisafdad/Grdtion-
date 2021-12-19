import React from "react";
import { Link } from "react-router-dom";

const NavbarLink = ({ path, label, estilo}) => {

    const style = 'nav-link ' + estilo;
    return (
        <li className="nav-item">
            <Link className={ style } to={ path }>{ label }</Link>
        </li>);
}

export default NavbarLink;