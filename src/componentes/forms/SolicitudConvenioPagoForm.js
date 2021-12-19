import { useState } from 'react';


const SolicitudConvenioPagoForm = () => {

    const solicitudConvenioPagoFormClean = {
        email: "",
        password: ""
    }

    const onInputChange = function (evt) {
        const p = { ...solicitudConvenioPagoForm };
        p[evt.target.id] = evt.target.value;

        //Aqui podemos implementar validaciones a nivel de cambio

        setSolicitudConvenioPagoForm(p);
    }

    const onFormSubmit = function (evt) {
        evt.preventDefault();

        //Aqui podemos implementar validaciones a nivel de formulario.
        console.log(solicitudConvenioPagoForm);
    }

    const [solicitudConvenioPagoForm, setSolicitudConvenioPagoForm] = useState(solicitudConvenioPagoFormClean);

    return (
        <>
            <div id="box-title">
                <h2 className="main-form-text"><span>Solicitud Convenio de Pago</span></h2>

            </div>
            <form class="user">
                <div className="mt-3">
                    <label column sm="2">Codigo</label>
                    <input column sm="10"
                        className="form-control form-control-user"
                        id="name"
                        name="name"

                        type="text"
                    />
                </div>
                <div className="mt-3">
                    <label column sm="2">cedula Propietario</label>
                    <input column sm="10"
                        className="form-control form-control-user"
                        id="name"
                        name="name"

                        type="text"
                    />

                </div>

                <div className="mt-3">
                    <label column sm="2">Nombre Propietario</label>
                    <input column sm="10"
                        className="form-control form-control-user"
                        id="name"
                        name="name"

                        type="text"
                    />
                    <br />
                </div>
                <div className="mt-3">
                    <label column sm="2">Fecha Maxima de Pago</label>
                    <input column sm="10"
                        className="form-control form-control-user"
                        id="name"
                        name="name"

                        type="date"
                    />
                </div>
                <div className="mt-3">
                    <label column sm="2">Total a Pagar</label>
                    <input column sm="10"
                        className="form-control form-control-user"
                        id="name"
                        name="name"

                        type="text"
                    />
                </div>
                <div className="mt-3">
                    <label column sm="2">Acuerdo de Convenio</label>
                    <input column sm="10"
                        className="form-control form-control-user"
                        id="name"
                        name="name"

                        type="text"
                    />
                </div>
                <div className="mt-3">
                    <label column sm="2">Observaciones</label>
                    <input column sm="10"
                        className="form-control form-control-user"
                        id="name"
                        name="name"

                        type="text"
                    />
                </div>
                <div className="mb-3">
                    <div class="btn-group mr-2" role="group" aria-label="Basic example">
                        <button type="button" class="btn btn-primary">Guardar</button>
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

export default SolicitudConvenioPagoForm;