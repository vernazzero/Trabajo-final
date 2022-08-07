import React from "react";
import { useState, useEffect } from "react";
import Header from "./Header";
import Hero from './Hero';
import About from './About';
import Caracteristicas from './Caracteristicas';
import Fin from './Fin';
import Footer from './Footer';

const Inicio = () =>{

    const [productos, setProductos] = useState([]);

    const obtenerProductos = async () => {
  
      const response = await fetch ("https://62ee8591f5521ecad5770799.mockapi.io/productos")
      const responseJson = await response.json()
      setProductos(responseJson)
      
    }
  
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

<h3 id="productos">Nuestros productos</h3>

<div className="containerProductos">

{productos.map((producto)=>{

  return(

    <div className='cards' key={producto.id}>

    <img src={producto.img} className="img" alt={producto.nombre} logo/>

    <div>

    <h5 className="nombreProducto">{producto.nombre}</h5>

    <p className="precio">${producto.precio}</p>

    <button className="boton Carrito">Agregar al carrito</button>

    </div>

    </div>
    
  )

})}

</div>

<Caracteristicas/>

<Fin/>

</main>

<Footer/>

</>


)

}

export default Inicio 