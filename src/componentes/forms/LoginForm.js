import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

async function loginUser(credentials) {
    return fetch('http://localhost:3001/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
        .then(data => data.json())
}


const LoginForm = ({ setToken }) => {

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

    const onFormSubmit = async (evt) => {
        evt.preventDefault();
        const response = await loginUser(loginForm);

        if (response.message) {
            setToken(null);
            alert("Datos inválidos");
            console.log("no se logueo");
            return (<></>);
        }
        console.log(response);
        setToken(response);
        window.location.href = '/';
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
                <a class="small" href="/forgot-password">¿Olvidaste tu contraseña?</a>
            </div>
            <div class="text-center">
                <a class="small" href="/registro">Regístrate</a>
            </div>
        </>
    );
}

export default LoginForm;
LoginForm.propTypes = {
    setToken: PropTypes.func.isRequired
}