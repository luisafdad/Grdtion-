import Navbar_InterUser from "../navegacion/Navbar_InterUser";
import AproReproForm from "../forms/AproReproForm";


const AproRepro = () => {

    return (
        <>
            <Navbar_InterUser />
            <section class="page-section App-inicio">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-xl-10 col-lg-12 col-md-9">
                            <div class="card o-hidden border-0 shadow-lg my-5">
                                <div class="card-body p-0">
                                    <div class="row">
                                        <div class="col-lg-3"></div>
                                        <div class="col-lg-6">
                                            <div class="p-5">
                                                <AproReproForm />
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

export default AproRepro;