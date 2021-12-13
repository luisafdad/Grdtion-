import NavbarExtUser from "../navegacion/NavbarExtUser";
import SolicitudConvenioPagoForm from "../forms/SolicitudConvenioPagoForm";

const SolicitudConvenioPago = () => {
    return (
        <>
        <NavbarExtUser />
        <section class="page-section bg-white">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-xl-10 col-lg-12 col-md-9">
                        <div class="card o-hidden border-0 shadow-lg my-5">
                            <div class="card-body p-0">
                                <div class="row">
                                    <div class="col-lg-3"></div>
                                    <div class="col-lg-6">
                                        <div class="p-5">
                                            <SolicitudConvenioPagoForm />
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
};

export default SolicitudConvenioPago;