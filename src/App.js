import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './componentes/paginas/Dashboard';

import Login from './componentes/paginas/Login';

function App() {

  return (
    <Router>
      <Routes>
        <Route path= "/login" element={ <Login /> } />
        <Route path= "/dashboard" element={ <Dashboard /> } />

      </Routes>
    </Router>
  );
}



export default App;
