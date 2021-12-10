import NavbarOpen from "../NavbarOpen";
import { useState, useEffect } from "react";
import PrediosTable from "../tables/PrediosTable"

const Dashboard = () => {

    const [ prediosApi, setPrediosApi] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3004/predios')
        .then(response => response.json())
        .then(data => setPrediosApi(data));
    }, []);


    return (
        <>
            <NavbarOpen />
            <section class="page-section bg-white">
                <div class="container">

                    <div class="card shadow mb-4">
                        <div class="card-header py-3">
                            <h6 class="m-0 font-weight-bold text-primary">
                                Predios
                            </h6>
                            <h6 class="m-0 font-weight-bold text-primary">
                            <a href="http://localhost:3000/Pagopredios" >Pago Predios</a>
                                
                            </h6>
                            <h6 class="m-0 font-weight-bold text-primary">
                            <a href="http://localhost:3000/solicitudcomveniopago" >Solicitud de Convenio de Pago</a>
                                
                            </h6>
                           
                        </div>
                        <div class="card-body">
                            <div class="table-responsive">
                                <PrediosTable predios={prediosApi} />
                            </div>
                         </div>
                           
                    </div>
                </div>
            </section>
        </>
    );
};

export default Dashboard;