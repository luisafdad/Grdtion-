import React from "react";
import Navbar from "../navegacion/Navbar";

import PrediosTable from "../tables/PrediosTable";

const PredialConsul = ({ onDelete, predios, role }) => {

    return (
        <div >
            <Navbar role = { role } />
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
                                <PrediosTable onDelete={ onDelete }
                                    predios={ predios } />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PredialConsul;