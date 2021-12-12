
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './componentes/paginas/Dashboard';
import CobroDePredial from './componentes/paginas/CobroDePredial';

import Home from './componentes/paginas/Home';
import Register from './componentes/paginas/Register';

import Login from './componentes/paginas/Login';
import SolicitudComvenioPago from './componentes/paginas/SolicitudComvenioPago';
import News from './componentes/paginas/News';
import PredialConsul from './componentes/paginas/PredialConsul';

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
          <Route path= "/dashboard" element={ <Dashboard /> } />
          <Route path= "/predios" element={ <PredialConsul /> } />
          <Route path= "/cobropredios" element={ <CobroDePredial /> } />
          <Route path= "/solicitudcomveniopago" element={ <SolicitudComvenioPago /> } />
        </Routes>
      </Router>

    </div>

  );
}



export default App;
