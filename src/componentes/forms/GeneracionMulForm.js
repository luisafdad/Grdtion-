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
                <h1 class="h4 text-gray-900 mb-4"><strong>Generación de Multa</strong></h1>
                <br></br>
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
                    <br></br>
                    <div class="text-center">
                    <div>
                    <label for="file"><strong>Progreso</strong></label>
                    </div>

                    <progress  max="100" value="50"> 50% </progress>
                    </div>

                    <br></br>

                    <a
                      href="./index.html"
                      class="btn btn-primary btn-user btn-block"
                    >
                      Generar Multa
                    </a>
                    <hr />
                    <a
                      href="index.html"
                      class="btn btn-google btn-user btn-block"
                    >
                      <i class="fab fa-google fa-fw"></i> Cancelar
                    </a>
                  </form>
            <hr />
            
        </>
    );
}

export default GenMultaForm;