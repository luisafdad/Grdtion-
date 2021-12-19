import React from "react";
import Navbar_InterUser from "../navegacion/Navbar_InterUser";

import { useState, useEffect } from "react";
import PrediosTable from "../tables/PrediosTable"

const PredialConsul = () => {

    const [ prediosApi, setPrediosApi] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3004/predios')
        .then(response => response.json())
        .then(data => setPrediosApi(data));
    }, []);


    return (
        <div >
            <Navbar_InterUser />
            <section className="page-section bg-white">
                <div className="container">

                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-primary">
                                Predios Usuario Externo
                            </h6>
                        </div>
                        <div className="card-body">
                            <div className="table-responsive">
                                <PrediosTable predios={prediosApi} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PredialConsul;