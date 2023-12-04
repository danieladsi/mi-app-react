
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './css/App.css';
import Navbar from './navbar';
import Menu from './menu';
import Inicio from './inicio'
import Pedidos from './pedidos'
import Contactos from './contactos'



function App (){
  
  return (
    <div className="App">
      <div>
      <h1>Restaurante v</h1>
      
      <Router>
      <Navbar/>
        <Routes>
          <Route path="/Menu" element={<Menu/>}/>
          <Route path="/Inicio" element={<Inicio/>}/>
          <Route path="Pedidos" element={<Pedidos/>}/>
          <Route path="Contactos" element={<Contactos/>}/>
        </Routes>
      </Router>
    </div>
    
    </div>
  );
}

export default App;

