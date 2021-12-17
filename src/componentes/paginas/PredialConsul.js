import React from "react";
import NavbarExtUser from "../navegacion/NavbarExtUser";

import PrediosTable from "../tables/PrediosTable";

const PredialConsul = (props) => {

    return (
        <div>
            <NavbarExtUser />
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
                                <PrediosTable onDelete={props.onDelete}
                                    predios={props.predios} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PredialConsul;