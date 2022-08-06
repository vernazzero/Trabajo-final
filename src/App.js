import './App.css';
import { useState, useEffect } from "react";
import Inicio from './componentes/Inicio'
import Login from './componentes/Login';
import { obtenerProductos } from './FireBase';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {

  const [productos, setProductos] = useState([]);

  useEffect(()=>{

    obtenerProductos()

  },[])

  return(

<BrowserRouter>

<Routes>

  <Route path='/' element={<Inicio/>}/>
  <Route path='login' element={<Login/>}/>

</Routes>

</BrowserRouter>

);

}

export default App;
