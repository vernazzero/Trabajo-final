import React from "react";
import Header from "./Header";
import Hero from './Hero';
import About from './About';
import Caracteristicas from './Caracteristicas';
import Fin from './Fin';
import Footer from './Footer';

const Inicio = () =>{

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


)

}

export default Inicio 