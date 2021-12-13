import { useState } from 'react';


const CrearPredForm = () => {

    const CrearPredFormClean = {
        codigo: "",
        cedula: "",
        nombre: "",
        direccion: "",
        barrio: "",
        areac: "",
        areat: ""
    }

    const onInputChange = function (evt) {
        const p = { ...CrearPredForm };
        p[evt.target.id] = evt.target.value;

        //Aqui podemos implementar validaciones a nivel de cambio

        setCrearPredForm(p);
    }

    const onFormSubmit = function (evt) {
        evt.preventDefault();

        //Aqui podemos implementar validaciones a nivel de formulario.
        console.log(CrearPredForm);
    }

    const [CrearPredForm, setCrearPredForm] = useState(CrearPredFormClean);

    return (
        <>

            <div class="text-center">
                <h1 class="h4 text-gray-900 mb-4">Crear Predio</h1>
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
                          type="text"
                          class="form-control form-control-user"
                          id="direccion"
                          placeholder="Direccion del Predio"
                        />
                      </div>
                      <div class="col-sm-6">
                        <input
                          type="text"
                          class="form-control form-control-user"
                          id="barrio"
                          placeholder="Barrio del Predio"
                        />
                      </div>
                    </div>
                    <div class="form-group row">
                      <div class="col-sm-6 mb-3 mb-sm-0">
                        <input
                          type="text"
                          class="form-control form-control-user"
                          id="areac"
                          placeholder="Área Construida"
                        />
                      </div>
                      <div class="col-sm-6">
                        <input
                          type="text"
                          class="form-control form-control-user"
                          id="areat"
                          placeholder="Área Total"
                        />
                      </div>
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
                      class="btn btn-danger btn-user btn-block"
                    > Cancelar
                    </a>
                  </form>
            <hr />
            
        </>
    );
}

export default CrearPredForm;