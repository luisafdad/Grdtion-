import NavbarOpen from "../NavbarOpen";
import {Fragment} from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Form'

const PagoPredios = () => {

  
  

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
                     <br/>
                    </div>
                    <div className="mb-3">
                    <div class="btn-group mr-2" role="group" aria-label="Basic example">
                    <button type="button" class="btn btn-primary">Generar Cobro</button>
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

export default PagoPredios;