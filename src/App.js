import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './componentes/paginas/Dashboard';

import Login from './componentes/paginas/Login';
import CrearPredio from './componentes/paginas/CrearPredio';
import GenerarMulta from './componentes/paginas/GenerarMulta';
import AproRepro from './componentes/paginas/AproRepro';
import PagoPredial from './componentes/paginas/PagoPredial';

function App() {

  return (
    <Router>
      <Routes>
        <Route path= "/login" element={ <Login /> } />
        <Route path= "/dashboard" element={ <Dashboard /> } />
        <Route path= "/crearpredio" element={ <CrearPredio /> } />
        <Route path= "/generarmulta" element={ <GenerarMulta /> } />
        <Route path= "/aprobareprobar" element={ <AproRepro /> } />
        <Route path= "/pagopredial" element={ <PagoPredial /> } />  

        PagoPredial

      </Routes>
    </Router>
  );
}



export default App;
