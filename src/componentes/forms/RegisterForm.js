import React from "react";
import { Link } from "react-router-dom";


const RegisterForm = () => {

    return(
        <>
            <div className="text-center">
                <h1 className="h4 text-gray-900 mb-4">Registrate!</h1>
            </div>
            <form className="user">

                <div className="form-group">
                    <input type="text" className="form-control form-control-user" id="inputEmail"
                        placeholder="Nombre Completo"/>
                </div>


                <div className="form-group row">
                    <div className="col-sm-6 mb-3 mb-sm-0">
                        <input type="text" className="form-control form-control-user" id="exampleFirstName"
                            placeholder="Cedula"/>
                    </div>
                    <div className="col-sm-6">
                        <input type="text" className="form-control form-control-user" id="exampleLastName"
                            placeholder="Celular"/>
                    </div>
                </div>
                <div className="form-group">
                    <input type="email" className="form-control form-control-user" id="exampleInputEmail"
                        placeholder="Email Address"/>
                </div>
                <div className="form-group row">
                    <div className="col-sm-6 mb-3 mb-sm-0">
                        <input type="password" className="form-control form-control-user"
                            id="exampleInputPassword" placeholder="Contraseña"/>
                    </div>
                    <div className="col-sm-6">
                        <input type="password" className="form-control form-control-user"
                            id="exampleRepeatPassword" placeholder="Repetir Contraseña"/>
                    </div>
                </div>
                <Link to="/login" className="btn btn-primary btn-user btn-block">
                    Registrar Cuenta
                </Link>
                <hr/>
                <div className='container row '>

                </div>
                {/*<!--
                <a href="index.html" className="btn btn-google btn-user btn-block">
                    <i className="fab fa-google fa-fw"></i> Register with Google
                </a>
                <a href="index.html" className="btn btn-facebook btn-user btn-block">
                    <i className="fab fa-facebook-f fa-fw"></i> Register with Facebook
                </a>
                -->*/}
            </form>
            <hr/>

            <div className="text-center">
                <Link className="small" to="/">Tienes una cuenta? Ingresa ya!</Link>
            </div>


        </>

    );

}

export default RegisterForm;