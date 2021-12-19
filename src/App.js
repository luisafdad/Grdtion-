import {useState} from 'react';
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
import EditarPredio from "./componentes/paginas/EditarPredio";
import PrediosTable from './componentes/tables/PrediosTable';
import Logout from './componentes/paginas/Logout';


function setToken(userToken) {
  sessionStorage.setItem('token', JSON.stringify(userToken));
}

function getToken() {
  const tokenString = sessionStorage.getItem('token');
  return JSON.parse(tokenString);
}

const App = () => {
  const [predios, setPredios] = useState([]);
  
  const token = getToken();

  const fetchData = async () => {
    await fetch("http://localhost:3001/predios")
      .then((res) => res.json())
      .then((data) => setPredios(data))
      .catch((err) => {
        setPredios([]);
        console.log(err);
      });
  };

  const onAdd = async (nuevoPredio) => {
    await fetch("http://localhost:3001/predios", {
      method: "POST",
      body: JSON.stringify(nuevoPredio),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      }
    })
      .then((res) => {
        return res.json();
      })
      .then((datos) => {
        setPredios((predios) => [...predios, datos]);
        alert("Predio agregado correctamente.");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onDelete = async (e) => {
    console.log(e.target);
    const codigo = e.target.getAttribute("codigo");
    await fetch(`http://localhost:3001/predios/${codigo}`, {
      method: "DELETE",
    })
      .then((res) => {
        return res.json();
      })
      .then((datos) => {
        setPredios((predios) => predios.filter((predio) => {
            return predio.codigo !== codigo;
          })
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onUpdate = async (codigo, datos) => {
    await fetch(`http://localhost:3001/predios/${codigo}`, {
      method: "PUT",
      body: JSON.stringify(datos),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then((res) => {
        return res.json();
      })
      .then((datos) => {
        let indice = predios.findIndex((predio) => predio.codigo == codigo);
        Object.assign(predios[indice], datos);
        setPredios(() => predios);
        alert("Datos modificados correctamente.");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  
  console.log(predios);
//import NavbarOpen from './componentes/NavbarOpen';

  return (
    <div className="App">     
    <Router>
      <Routes>
        <Route path= '/' exact element={<Home token={token}/>} />
        <Route path= "/login" element={ <Login setToken={setToken} token={ token }/> } />
        <Route path= "/logout" element={ <Logout setToken={setToken} token={ token }/> } />
        <Route path= "/registro" element={ <Register/> } />
        <Route path= "/noticias" element={ <News/> } />
        <Route path= "/dashboard" element={ <Dashboard onUpdate={onUpdate} predios={predios} onDelete={onDelete} /> } />
        <Route path= "/predios" element={ <PredialConsul onUpdate={onUpdate} predios={predios} onDelete={onDelete} /> } />
        <Route path= "/pagopredial" element={ <PagoPredial /> } />
        <Route path= "/crearpredio" element={ <CrearPredio onAdd={onAdd}/> } />
        <Route path= "/aprorepro" element={ <AproRepro /> } />
        <Route path= "/generarmulta" element={ <GenerarMulta /> } />
        <Route path= "/cobropredios" element={ <CobroDePredial /> } />
        <Route path= "/solicitudconveniopago" element={ <SolicitudConvenioPago /> } />
        <Route path="/EditarPredio/:codigo" element={<EditarPredio onUpdate={onUpdate} />} />

      </Routes>
    </Router>
</div>
);
};

export default App;

