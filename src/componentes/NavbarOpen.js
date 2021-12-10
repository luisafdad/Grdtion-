const NavbarOpen = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
                <div class="container">
                    <a class="navbar-brand" href="../index.html">Mintic</a>
                    <button
                        class="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarResponsive"
                        aria-controls="navbarResponsive"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        Menú
                        <i class="fas fa-bars ms-1"></i>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarResponsive">
                        <ul class="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
                            <li class="nav-item">
                                <a class="nav-link" href="../index.html"><strong>Inicio</strong></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="./news.html#news"><strong>Noticias</strong></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="./news.html#projects"><strong>Proyectos</strong></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="../index.html#contact"><strong>Contacto</strong></a>
                            </li>
                            <li class="nav-item">
                                <a
                                    class="btn btn-primary btn-sm text-uppercase"
                                    href="./login.html"
                                >Login</a
                                >
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>

    );
};

export default NavbarOpen;