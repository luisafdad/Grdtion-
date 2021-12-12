import { useState, useEffect } from 'react';


const LoginForm = () => {
    
    const [ usuariosApi, setUsuariosApi] = useState([]);

    const consultarUsuario = useEffect((loginForm) => {

        if (loginForm) {
            fetch('http://localhost:3004/usuarios?username='+loginForm.email)
            .then(response => response.json())
            .then(data => setUsuariosApi(data));
        }

    }, []);

    const loginFormClean = {
        email: "",
        password: ""
    }

    const onInputChange = function (evt) {
        const p = { ...loginForm };
        p[evt.target.id] = evt.target.value;

        //Aqui podemos implementar validaciones a nivel de cambio

        setLoginForm(p);
    }

    const onFormSubmit = function (evt) {
        evt.preventDefault();

        //Aqui podemos implementar validaciones a nivel de formulario.
        console.log(loginForm);

        consultarUsuario(loginForm);
        

        if (usuariosApi.length > 0) {
            console.log("Se encontro al usuario");
        }

    }

    const [loginForm, setLoginForm] = useState(loginFormClean);

    return (
        <>

            <div class="text-center">
                <h1 class="h4 text-gray-900 mb-4">Login</h1>
            </div>
            <form class="user" onSubmit={onFormSubmit}>
                <div class="form-group">
                    <input
                        type="email"
                        class="form-control form-control-user"
                        id="email"
                        aria-describedby="emailHelp"
                        placeholder="Ingrese su Dirección de Email..."
                        onChange={onInputChange}
                    />
                </div>
                <div class="form-group">
                    <input
                        type="password"
                        class="form-control form-control-user"
                        id="password"
                        placeholder="Contraseña"
                        onChange={onInputChange}
                    />
                </div>
                <button
                    id="loginBtn"
                    type="submit"
                    class="btn btn-primary btn-user btn-block"
                >Ingresar</button>
            </form>
            <hr />
            <div class="text-center">
                <a class="small" href="forgot-password.html">¿Olvidaste tu contraseña?</a>
            </div>
            <div class="text-center">
                <a class="small" href="./register.html">Registrarte</a>
            </div>
        </>
    );
}

export default LoginForm;