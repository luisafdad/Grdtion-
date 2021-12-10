import { useState } from 'react';
import logo from './pagos.png';


const PagoPredialForm = () => {

    const PagoPredialFormClean = {
        codigo: "",
        cedula: "",
        nombre: "",
        direccion: "",
        barrio: "",
        areac: "",
        areat: "",
        valorp: "",
        descuento: "",
        multa: "",
        total: ""
    }

    const onInputChange = function (evt) {
        const p = { ...PagoPredialForm };
        p[evt.target.id] = evt.target.value;

        //Aqui podemos implementar validaciones a nivel de cambio

        setPagoPredialForm(p);
    }

    const onFormSubmit = function (evt) {
        evt.preventDefault();

        //Aqui podemos implementar validaciones a nivel de formulario.
        console.log(PagoPredialForm);
    }

    const [PagoPredialForm, setPagoPredialForm] = useState(PagoPredialFormClean);

    return (
        <>
            <div class="text-center">
              <img class="col-12 col-md-6 bm-transparente" className="imag" src={logo} width="300"/>
            </div>
            <br></br>
            <br></br>

            <div class="text-center">
                <h1 class="h4 text-gray-900 mb-4"><strong>Pago de Predial</strong></h1>
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
                          type="number"
                          class="form-control form-control-user"
                          id="areac"
                          placeholder="Area Construida"
                        />
                      </div>
                      <div class="col-sm-6">
                        <input
                          type="text"
                          class="form-control form-control-user"
                          id="areat"
                          placeholder="Area Total"
                        />
                      </div>
                    </div>
                    
                    <div class="form-group row">
                      <div class="col-sm-6 mb-3 mb-sm-0">
                        <input
                          type="number"
                          class="form-control form-control-user"
                          id="valorp"
                          placeholder="Valor a Pagar"
                        />
                      </div>
                      <div class="col-sm-6">
                        <input
                          type="text"
                          class="form-control form-control-user"
                          id="descuento"
                          placeholder="Descuento"
                        />
                      </div>
                    </div>

                    <div class="form-group row">
                      <div class="col-sm-6 mb-3 mb-sm-0">
                        <input
                          type="number"
                          class="form-control form-control-user"
                          id="multa"
                          placeholder="Multa"
                        />
                      </div>
                      <div class="col-sm-6">
                        <input
                          type="text"
                          class="form-control form-control-user"
                          id="total"
                          placeholder="Total a Pagar"
                        />
                      </div>
                    </div>


                    
                    <a
                      href="./login.html"
                      class="btn btn-primary btn-user btn-block"
                    >
                      Pagar
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

export default PagoPredialForm;