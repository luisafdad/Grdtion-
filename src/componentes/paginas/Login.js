import React from "react";
import NavbarOpen from "../navegacion/NavbarOpen";
import LoginForm from "../forms/LoginForm";


const Login = () => {

    return (
        <>
 
            <NavbarOpen />
            <section class="page-section App-inicio ">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-xl-10 col-lg-12 col-md-9">
                            <div class="card o-hidden border-0 shadow-lg my-5">
                                <div class="card-body p-0">
                                    <div class="row">
                                        <div class="col-lg-3"></div>
                                        <div class="col-lg-6">
                                            <div class="p-5">
                                                <LoginForm />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Login;