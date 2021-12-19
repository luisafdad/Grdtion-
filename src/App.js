
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './componentes/paginas/Dashboard';
import CobroDePredial from './componentes/paginas/CobroDePredial';

import Home from './componentes/paginas/Home';
import Register from './componentes/paginas/Register';

import Login from './componentes/paginas/Login';
import SolicitudConvenioPago from './componentes/paginas/SolicitudConvenioPago';
import News from './componentes/paginas/News';
import PredialConsul from './componentes/paginas/PredialConsul';
import PagoPredial from './componentes/paginas/PagoPredial';
import CrearPredio from './componentes/paginas/CrearPredio';
import AproRepro from './componentes/paginas/AproRepro';
import GenerarMulta from './componentes/paginas/GenerarMulta';

//import NavbarOpen from './componentes/NavbarOpen';

function App() {

  return (
    <div className="App">
      
      <Router>
        <Routes>
          <Route path= '/' exact element={<Home/>} />
          <Route path= "/login" element={ <Login /> } />
          <Route path= "/registro" element={ <Register/> } />
          <Route path= "/noticias" element={ <News/> } />

          {/*<!-- Usuario Interno -->*/}
          <Route path= "/crearpredio" element={ <CrearPredio/> } />
          <Route path= "/cobropredios" element={ <CobroDePredial /> } />
          <Route path= "/aprorepro" element={ <AproRepro /> } />
          <Route path= "/generarmulta" element={ <GenerarMulta /> } />
          <Route path= "/predios" element={ <PredialConsul /> } />

          {/*<!-- Usuario Externo -->*/}
          <Route path= "/pagopredial" element={ <PagoPredial /> } />
          <Route path= "/solicitudconveniopago" element={ <SolicitudConvenioPago /> } />
          <Route path= "/dashboard" element={ <Dashboard /> } />
        </Routes>
      </Router>

    </div>

  );
}



export default App;
