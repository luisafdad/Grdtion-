import React from "react";
import Navbar from "../navegacion/Navbar";

const News = ( {role} ) =>{

    return(

        <div className='App-inicio'>
            <Navbar role = { role } />
            <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-xl-10 col-lg-12 col-md-9">
                            <div class="card o-hidden border-0 shadow-lg my-5">
                                <div class="card-body p-0">
                                    <div class="row">
                                        <div class="col-lg-1"></div>
                                        <div class="col-lg-10">
                                            <div class="p-5">
                                            <h1>Feliz Navidad y Prospero Año 2022</h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            
        </div>
    );

}

export default News;