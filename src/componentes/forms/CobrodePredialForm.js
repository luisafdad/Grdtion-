import { useState } from 'react';

const CobrodePredialForm = () => {

    const cobrodePredialFormClean = {
        email: "",
        password: ""
    }

    const onInputChange = function (evt) {
        const p = { ...cobrodePredialForm };
        p[evt.target.id] = evt.target.value;

        //Aqui podemos implementar validaciones a nivel de cambio

        setCobrodePredialForm(p);
    }

    const onFormSubmit = function (evt) {
        evt.preventDefault();

        //Aqui podemos implementar validaciones a nivel de formulario.
        console.log(cobrodePredialForm);
    }

    const [cobrodePredialForm, setCobrodePredialForm] = useState(cobrodePredialFormClean);

    return (
        <>
            <div id="box-title">
                <h2 className="main-form-text"><span>Cobro de Predio</span></h2>

            </div>
            <form classname="form-horizontal">
                <div className="mt-3">
                    <label column sm="2">Fecha de Pago Maximo</label>
                    <input column sm="10"
                        className="form-control"
                        id="name"
                        name="name"

                        type="date"
                    />

                </div>
                <div className="mt-3">
                    <label column sm="2">Fecha Maxima de Descuento</label>
                    <input column sm="10"
                        className="form-control"
                        id="name"
                        name="name"

                        type="date"
                    />

                </div>

                <div className="mt-3">
                    <label column sm="2">Descuento Aplicable</label>
                    <input column sm="10"
                        className="form-control"
                        id="name"
                        name="name"

                        type="text"
                    />
                    <br />
                </div>
                <div className="mb-3">
                    <div class="btn-group mr-2" role="group" aria-label="Basic example">
                        <button type="button" class="btn btn-primary">Generar Cobro</button>
                        <br />
                    </div>
                    <div class="btn-group mr-2" role="group" aria-label="Basic example">
                        <button type="button" class="btn btn-primary">Cancelar</button>
                    </div>
                </div>
            </form>
     </>
    );
}

export default CobrodePredialForm;