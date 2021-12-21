import React from "react";
import { Link } from "react-router-dom";

const LoginSection = ({ role }) => {
    console.log("LoginSection", role);
    if (role !== undefined && role !== '') {
        return (
            <div style={({ marginLeft: 'auto'})}>
            <ul className=" nav justify-content-center">
                <li className="nav-item  nav-pills">
                    <Link className="nav-link active" to='/logout'>Logout</Link>
                </li>
            </ul>
        </div>
        );
    }

    // Return Home Menu
    return (
        <div style={({ marginLeft: 'auto'})}>
            <ul className=" nav justify-content-center">
                <li className="nav-item">
                    <Link className="nav-link" to='/registro'>Registrate</Link>
                </li>

                <li className="nav-item  nav-pills">
                    <Link className="nav-link active" to='/login'>Login</Link>
                </li>
            </ul>
        </div>
    );

}

export default LoginSection;