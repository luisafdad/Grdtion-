import { useState } from 'react';


const GenMultaForm = () => {

    const GenMultaFormClean = {
        fechamax: "",
        multap: ""
       
    }

    const onInputChange = function (evt) {
        const p = { ...GenMultaForm };
        p[evt.target.id] = evt.target.value;

        //Aqui podemos implementar validaciones a nivel de cambio

        setGenMultaForm(p);
    }

    const onFormSubmit = function (evt) {
        evt.preventDefault();

        //Aqui podemos implementar validaciones a nivel de formulario.
        console.log(GenMultaForm);
    }

    const [GenMultaForm, setGenMultaForm] = useState(GenMultaFormClean);

    return (
        <>

            <div class="text-center">
                <h1 class="h4 text-gray-900 mb-4">Generación de Multa</h1>
            </div>
            <form class="user">
                    <div class="form-group row">
                      <div class="col-sm-6 mb-3 mb-sm-0">
                        <input
                          type="date"
                          class="form-control form-control-user"
                          id="fechamax"
                          placeholder="Fecha Maxima de Pago"
                        />
                      </div>
                      <div class="col-sm-6">
                        <input
                          type="number"
                          class="form-control form-control-user"
                          id="multap"
                          placeholder="Multa Aplicar en Porcentaje"
                        />
                      </div>
                    </div>
                    <div>
                    <label for="file">Progreso:</label>
                    </div>

<progress id="file" max="100" value="70"> 70% </progress>




                    <a
                      href="./index.html"
                      class="btn btn-primary btn-user btn-block"
                    >
                      Generar Multa
                    </a>
                    <hr />
                    <a
                      href="index.html"
                      class="btn btn-danger btn-user btn-block"
                      > Cancelar
                    </a>
                  </form>
            <hr />
            
        </>
    );
}

export default GenMultaForm;