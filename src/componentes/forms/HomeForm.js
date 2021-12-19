import React from "react";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'



const HomeForm = () =>{

    return (
        <>

            <div id="demo" className="carousel slide " data-bs-ride="carousel">

                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
                </div>


                <div className="carousel-inner App-inicio">
                    <div className="carousel-item active">
                        <img src="./montañaRisaralda.jpg" alt="Risaralda1" className="mx-auto d-block  border App-inicio1" />
                        <div className="carousel-caption">
                            <h3>Risaralda1</h3>
                            <p>Bienvenido a Risaralda!</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="./relieveRisaralda.jpg" alt="Risaralda1" className="mx-auto d-block App-inicio1" />
                        <div className="carousel-caption">
                            <h3>Risaralda 2</h3>
                            <p>Gracias Risaralda!</p>
                        </div> 
                    </div>
                    <div className="carousel-item">
                        <img src="./termales.jpg" alt="New York" className="mx-auto d-block App-inicio1" />
                        <div className="carousel-caption">
                            <h3>Risaralda 3</h3>
                            <p>Que grande eres!</p>
                        </div>  
                    </div>
                </div>

                <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon"></span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                    <span className="carousel-control-next-icon"></span>
                </button>
            </div>

        </>


    );
}

export default HomeForm;