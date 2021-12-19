import { useState } from 'react';

const CrearPredForm = ({ onAdd }) => {
  
  const handleOnSubmit = (e) => {
      e.preventDefault();
      const datos = {
        codigo:e.target.codigo.value,
        cedula:e.target.cedula.value,
        nombre:e.target.nombre.value,
        direccion:e.target.direccion.value,
        barrio:e.target.barrio.value,
        aconstruida:e.target.aconstruida.value,
        atotal:e.target.atotal.value
      }
      onAdd(datos);
  }
  const CrearPredFormClean = {
      codigo: "",
      cedula: "",
      nombre: "",
      direccion: "",
      barrio: "",
      aconstruida: "",
      atotal: ""
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
          <div className="text-center">
              <h1 className="h4 text-gray-900 mb-4">Crear Predio</h1>
          </div>
            <form className="user" onSubmit={handleOnSubmit}>
                  <div className="form-group row">
                    <div className="col-sm-6 mb-3 mb-sm-0">
                      <input
                        type="number"
                        className="form-control form-control-user"
                        id="codigo"
                        name="codigo"
                        placeholder="Codigo"
                      />
                    </div>
                    <div className="col-sm-6">
                      <input
                        type="text"
                        className="form-control form-control-user"
                        id="cedula"
                        name="cedula"
                        placeholder="Cedula del Propietario"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control form-control-user"
                      id="nombre"
                      name="nombre"
                      placeholder="Nombre del Propietario"
                    />
                  </div>
                  <div className="form-group row">
                    <div className="col-sm-6 mb-3 mb-sm-0">
                      <input
                        type="text"
                        className="form-control form-control-user"
                        id="direccion"
                        name="direccion"
                        placeholder="Direccion del Predio"
                      />
                    </div>
                    <div className="col-sm-6">
                      <input
                        type="text"
                        className="form-control form-control-user"
                        id="barrio"
                        name="barrio"
                        placeholder="Barrio del Predio"
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="col-sm-6 mb-3 mb-sm-0">
                      <input
                        type="text"
                        className="form-control form-control-user"
                        id="aconstruida"
                        name="aconstruida"
                        placeholder="Área Construida"
                      />
                    </div>
                    <div className="col-sm-6">
                      <input
                        type="text"
                        className="form-control form-control-user"
                        id="atotal"
                        name="atotal"
                        placeholder="Área Total"
                      />
                    </div>
                  </div>
                  <button onSubmit={handleOnSubmit}
                    className="btn btn-primary btn-user btn-block"
                  > Crear
                  </button>
                  <hr />
                  <button 
                    href="index.html"
                    className="btn btn-danger btn-user btn-block"
                  > Cancelar
                  </button>
            </form>
          <hr/>
      </>
    );
}

export default CrearPredForm;