import './App.css';
import { useState, useEffect } from "react";
import Header from './componentes/Header';
import Hero from './componentes/Hero';
import About from './componentes/About';
import Caracteristicas from './componentes/Caracteristicas';
import Fin from './componentes/Fin';
import Footer from './componentes/Footer';
import { obtenerProductos } from './FireBase';

function App() {

  const [productos, setProductos] = useState([]);

  useEffect(()=>{

    obtenerProductos()

  },[])

  return(

<>

<div className="imgContainer"></div> 

<Header/>

<main>

<Hero/>

<About/>

<h3>Nuestros productos</h3>

<div id="productos"></div>

<Caracteristicas/>

<Fin/>

</main>

<Footer/>
      
    </>

  );

}

export default App;
