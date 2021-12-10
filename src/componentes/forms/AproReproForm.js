import { useState } from 'react';


const AproReproForm = () => {

    const AproReproFormClean = {
        codigo: "",
        cedula: "",
        nombre: "",
        fmaxima: "",
        totalp: "",
        apago: "",
        areat: ""
    }

    const onInputChange = function (evt) {
        const p = { ...AproReproForm };
        p[evt.target.id] = evt.target.value;

        //Aqui podemos implementar validaciones a nivel de cambio

        setAproReproForm(p);
    }

    const onFormSubmit = function (evt) {
        evt.preventDefault();

        //Aqui podemos implementar validaciones a nivel de formulario.
        console.log(AproReproForm);
    }

    const [AproReproForm, setAproReproForm] = useState(AproReproFormClean);

    return (
        <>

            <div class="text-center">
                <h1 class="h4 text-gray-900 mb-4">Aprobar/ Reprobar Convenio</h1>
            </div>
            <form class="user">
                    <div class="form-group row">
                      <div class="col-sm-6 mb-3 mb-sm-0">
                        <input
                          type="number"
                          class="form-control form-control-user"
                          id="codigo"
                          placeholder="Codigo"
                        />
                      </div>
                      <div class="col-sm-6">
                        <input
                          type="text"
                          class="form-control form-control-user"
                          id="cedula"
                          placeholder="Cedula del Propietario"
                        />
                      </div>
                    </div>
                    <div class="form-group">
                      <input
                        type="text"
                        class="form-control form-control-user"
                        id="nombre"
                        placeholder="Nombre del Propietario"
                      />
                    </div>
                    <div class="form-group row">
                      <div class="col-sm-6 mb-3 mb-sm-0">
                        <input
                          type="date"
                          class="form-control form-control-user"
                          id="fmaxima"
                          placeholder="Fecha Maxima de Pago"
                        />
                      </div>
                      <div class="col-sm-6">
                        <input
                          type="text"
                          class="form-control form-control-user"
                          id="totalp"
                          placeholder="Total a Pagar"
                        />
                      </div>
                    </div>
                    <div class="form-group row">
                      <div class="col-sm-6 mb-3 mb-sm-0">
                        <input
                          type="text"
                          class="form-control form-control-user"
                          id="apago"
                          placeholder="Ácuerdo de Pago"
                        />
                      </div>
                      

                    </div>
                    <div class="form-group purple-border">
  <label for="exampleFormControlTextarea4">Observación</label>
  <textarea class="form-control" id="exampleFormControlTextarea4" rows="3"></textarea>
</div>

<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"/>
  <label class="form-check-label" for="inlineCheckbox1">Aprobado</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox" id="inlineCheckbox2" value="option2"/>
  <label class="form-check-label" for="inlineCheckbox2">No Aprobado</label>
</div>



                    <a
                      href="./login.html"
                      class="btn btn-primary btn-user btn-block"
                    >
                      Crear
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

export default AproReproForm;