import NavbarOpen from "../NavbarOpen";


const Login = ( ) => {

    return (
        <>
            <NavbarOpen />
            <section class="page-section bg-white" id="login">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-xl-10 col-lg-12 col-md-9">
                            <div class="card o-hidden border-0 shadow-lg my-5">
                                <div class="card-body p-0">
                                    <div class="row">
                                        <div class="col-lg-3"></div>
                                        <div class="col-lg-6">
                                            <div class="p-5">
                                                <div class="text-center">
                                                    <h1 class="h4 text-gray-900 mb-4">Login</h1>
                                                </div>
                                                <form class="user">
                                                    <div class="form-group">
                                                        <input
                                                            type="email"
                                                            class="form-control form-control-user"
                                                            id="inputEmail"
                                                            aria-describedby="emailHelp"
                                                            placeholder="Ingrese su Dirección de Email..."
                                                        />
                                                    </div>
                                                    <div class="form-group">
                                                        <input
                                                            type="password"
                                                            class="form-control form-control-user"
                                                            id="inputPassword"
                                                            placeholder="Contraseña"
                                                        />
                                                    </div>
                                                    <a
                                                        href="./dashboard.html"
                                                        id="loginBtn"
                                                        type="submit"
                                                        class="btn btn-primary btn-user btn-block"
                                                    >Ingresar</a>
                                                </form>
                                                <hr />
                                                <div class="text-center">
                                                    <a class="small" href="forgot-password.html">¿Olvidaste tu contraseña?</a>
                                                </div>
                                                <div class="text-center">
                                                    <a class="small" href="./register.html">Registrarte</a>
                                                </div>
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