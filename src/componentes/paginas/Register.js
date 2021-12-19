import React from "react";
import Navbar from "../navegacion/Navbar";
import RegisterForm from "../forms/RegisterForm";

const Register = ({ role }) =>{

    return(
        <div className='App-inicio'>
            <Navbar role = { role } />
            <div className="container ">
                <div className="row justify-content-sm-center">
                    <div className="col-xl-7 col-lg-8 col-md-9">
                        <div className="card o-hidden border-0 shadow-lg my-5 ">
                            <div className="card-body p-0">
                                {/*<!-- Nested Row within Card Body -->*/}
                                <div className="row ">
                                    <div className="col-lg-1"></div>
                                    <div className="col-lg-10">
                                        <div className="p-5">
                                            <RegisterForm />                                        
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Register;