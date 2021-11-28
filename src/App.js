import logo from './logo.svg';
import './App.css';
import {Contar} from './componetes/prueba01'

function App() {
  return (
    <div className="App">
      <div>
        <nav class="navbar navbar-light bg-light">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">Prueba de Concepto de Bootstrap</a>
          </div>
        </nav>
      </div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Contar/>
      </header>
      
    </div>
  );
}

export default App;
