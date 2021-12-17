import NavbarOpen from "../navegacion/NavbarOpen";
import { useState, useEffect } from "react";
import PrediosTable from "../tables/PrediosTable"

const Dashboard = (props) => {

    // const [ prediosApi, setPrediosApi] = useState([]);
    const onDelete = props.onDelete;
    const onUpdate = props.onUpdate;
    const predios = props.predios;

    // useEffect(() => {
    //     fetch('http://localhost:3001/predios')
    //     .then(response => response.json())
    //     .then(data => setPrediosApi(data));
    // }, []);


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
                            
                        </div>
                        <div class="card-body">
                            <div class="table-responsive">
                                <PrediosTable onUpdate={onUpdate} onDelete={onDelete} predios={predios} />
                            </div>
                         </div>
                           
                    </div>
                </div>
            </section>
        </>
    );
};


export default Dashboard;