import Navbar_InterUser from "../navegacion/Navbar_InterUser";
import CrearPredForm from "../forms/CrearPredForm";

const CrearPredio = ({onAdd}) => {

    return (
        <>
            <NavbarOpen />
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
                                                <CrearPredForm onAdd={onAdd}/>
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

export default CrearPredio;