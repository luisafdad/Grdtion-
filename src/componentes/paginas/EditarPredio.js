import Navbar from "../navegacion/Navbar";
import EditarPredial from "../forms/EditarPredial";

const EditarPredio = (props) => {
    const onUpdate = props.onUpdate;
    const role = props.role;
    return (
        <>
            <Navbar role = { role } />
            <section className="page-section bg-white">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-10 col-lg-12 col-md-9">
                            <div className="card o-hidden border-0 shadow-lg my-5">
                                <div className="card-body p-0">
                                    <div className="row">
                                        <div className="col-lg-3"></div>
                                        <div className="col-lg-6">
                                            <div className="p-5">
                                                <EditarPredial onUpdate={onUpdate} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default EditarPredio;