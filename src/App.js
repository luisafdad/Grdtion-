import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './componentes/paginas/Dashboard';
import CobroDePredial from './componentes/predios/CobroDePredial';

import Login from './componentes/paginas/Login';
import SolicitudComvenioPago from './componentes/predios/SolicitudComvenioPago';

function App() {

  return (
    <Router>
      <Routes>
        <Route path= "/login" element={ <Login /> } />
        <Route path= "/dashboard" element={ <Dashboard /> } />
        <Route path= "/cobropredios" element={ <CobroDePredial /> } />
        <Route path= "/solicitudcomveniopago" element={ <SolicitudComvenioPago /> } />
      </Routes>
    </Router>
  );
}



export default App;
