import React from "react";
import NavbarOpen from "../navegacion/NavbarOpen";

const News = () =>{

    return(

        <div className='App-inicio'>
            <NavbarOpen/>
            <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-xl-10 col-lg-12 col-md-9">
                            <div class="card o-hidden border-0 shadow-lg my-5">
                                <div class="card-body p-0">
                                    <div class="row">
                                        <div class="col-lg-1"></div>
                                        <div class="col-lg-10">
                                            <div class="p-5">
                                            <h1>MUY PRONTO TE SORPRENDEREMOS CON GRANDES NOTICIAS</h1>
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