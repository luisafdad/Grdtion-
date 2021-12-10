import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './componentes/paginas/Dashboard';
import PagoPredios from './componentes/predios/PagoPredios';

import Login from './componentes/paginas/Login';
import SolicitudComvenioPago from './componentes/predios/SolicitudComvenioPago';

function App() {

  return (
    <Router>
      <Routes>
        <Route path= "/login" element={ <Login /> } />
        <Route path= "/dashboard" element={ <Dashboard /> } />
        <Route path= "/pagopredios" element={ <PagoPredios /> } />
        <Route path= "/solicitudcomveniopago" element={ <SolicitudComvenioPago /> } />
      </Routes>
    </Router>
  );
}



export default App;
