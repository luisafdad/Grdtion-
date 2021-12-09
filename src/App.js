
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './componentes/paginas/Dashboard';
import Home from './componentes/paginas/Home';

import Login from './componentes/paginas/Login';
//import NavbarOpen from './componentes/NavbarOpen';

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path= '/' exact element={<Home/>} />
          <Route path= "/login" element={ <Login /> } />
          <Route path= "/dashboard" element={ <Dashboard /> } />
        </Routes>
      </Router>

    </div>

  );
}



export default App;
