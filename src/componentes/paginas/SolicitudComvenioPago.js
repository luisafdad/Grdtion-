import NavbarOpen from "../NavbarOpen";
import {Fragment} from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Form'

const SolicitudComvenioPago = () => {

  
  

    return (
        <Fragment>
            <NavbarOpen />
            <section>
    <div className="container">
        <div className="row">
        <div className="col-lg-7 offset-lg-2 g-0 mx-auto">
            <div className="fill-form form-box">
            <div className="row g-0">
                <div className="col-xl-6 col-lg-12 d-md-none d-sm-none d-xs-none d-lg-block form-box__img">
                <img alt=""  />
             </div>
                <div className="col-xl-6 col-lg-12 col-md-12 form-box__content">
                <div id="box-title">
                    <h2 className="main-form-text"><span>Solicitud Convenio de Pago</span></h2>
                    
                </div>
                <form classname="form-horizontal">
                    <div className="mt-3">
                    <label column sm="2">Codigo</label>
                    <input column sm="10" 
                        className="form-control"
                        id="name"
                        name="name"
                       
                        type="text"
                    />
                    </div>
                    <div className="mt-3">
                    <label column sm="2">cedula Propietario</label>
                    <input column sm="10" 
                        className="form-control"
                        id="name"
                        name="name"
                       
                        type="text"
                    />
                    
                    </div>
                    
                    <div className="mt-3">
                    <label column sm="2">Nombre Propietario</label>
                    <input column sm="10" 
                        className="form-control"
                        id="name"
                        name="name"
                       
                        type="text"
                    />
                     <br/>
                    </div>
                    <div className="mt-3">
                    <label column sm="2">Fecha Maxima de Pago</label>
                    <input column sm="10" 
                        className="form-control"
                        id="name"
                        name="name"
                       
                        type="date"
                    />
                    </div>
                    <div className="mt-3">
                    <label column sm="2">Total a Pagar</label>
                    <input column sm="10" 
                        className="form-control"
                        id="name"
                        name="name"
                       
                        type="text"
                    />
                    </div>
                    <div className="mt-3">
                    <label column sm="2">Acuerdo de Convenio</label>
                    <input column sm="10" 
                        className="form-control"
                        id="name"
                        name="name"
                       
                        type="text"
                    />
                    </div>
                    <div className="mt-3">
                    <label column sm="2">Observaciones</label>
                    <input column sm="10" 
                        className="form-control"
                        id="name"
                        name="name"
                       
                        type="text"
                    />
                    </div>
                    <div className="mb-3">
                    <div class="btn-group mr-2" role="group" aria-label="Basic example">
                    <button type="button" class="btn btn-primary">Guardar</button>
                    <br/>
                    </div>
                    <div class="btn-group mr-2" role="group" aria-label="Basic example">
                    <button type="button" class="btn btn-primary">Cancelar</button>
                    </div>
                    </div>
                  </form>
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>
    </section>
    </Fragment>
    );
};

export default SolicitudComvenioPago;