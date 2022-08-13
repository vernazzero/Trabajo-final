import React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion"
import Header from "./Header";
import Hero from './Hero';
import About from './About';
import Caracteristicas from './Caracteristicas';
import Fin from './Fin';
import Footer from './Footer';
import CarritoVacio from './CarritoVacio';
import ProductosEnCarrito from "./ProductosEnCarrito";
import { Link } from "react-router-dom";
import App from "../App";
import Swal from 'sweetalert2'

const Inicio = () =>{

    const [productos, setProductos] = useState([])
    const [isOpen, setIsOpen] = useState(false)
    const [isAbierto, setIsAbierto] = useState(false)
    const [cart, setCart] = useState([])

    const buscarProductos = (id) => {

      const encontrarProductos = productos.find(producto => producto.id === id)
      return encontrarProductos

    }

    const añadirAlCarrito = (e) => {

      const productoEnCarrito = buscarProductos(e.target.id)
      setCart([...cart, productoEnCarrito])
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Agregado al carrito',
        showConfirmButton: false,
        timer: 1600
      })

    }

    const borrarProducto = (id) => {

      const sacarProducto = cart.filter(item => item.id !==id)
      setCart(sacarProducto)
      
    }

    const variants = {
      open: { opacity: 1, x: 0 },
      closed: { opacity: 0, x: "60vw" },
    }

    const menu = {
      abierto: { opacity: 1, x: 0 },
      cerrado: { opacity: 0, x: "-40vw" },
    }

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

<Header setIsOpen={setIsOpen} isOpen={isOpen} setIsAbierto={setIsAbierto} isAbierto={isAbierto} borrarProducto={borrarProducto}/>

<motion.div className="mostrarCarrito" cart={cart}

      animate={isOpen ? "open" : "closed"}
      variants={variants}
      transition={{bounce: 0}}>

      {cart.length > 0 ? <ProductosEnCarrito cart={cart} borrarProducto={borrarProducto} /> : <CarritoVacio/> }

</motion.div>

<motion.div className="mostrarMenu" cart={cart}

      animate={isAbierto ? "abierto" : "cerrado"}
      variants={menu}
      transition={{bounce: 0}}>

        <ul className="listas">

          <li><a href="#productos" className="secciones">Nuestos productos</a></li>
          <li><a href="#about" className="secciones">Acerca de nosotros</a></li>
          <li><a href="#contacto" className="secciones">Contactanos</a></li>

        </ul>

</motion.div>

<main>

<Hero/>

<About/>

<h3 id="productos">Nuestros productos</h3>

<div className="containerProductos">

{productos.map((producto)=>{

  return(

    <div className='cards' key={producto.id} cart={cart} setCart={setCart} buscarProductos={buscarProductos}>

    <img src={producto.img} className="img" alt={producto.nombre}/>

    <div>

    <h5 className="nombreProducto">{producto.nombre}</h5>

    <p className="precio">${producto.precio}</p>

    <button className="boton Carrito" onClick={añadirAlCarrito} id={producto.id}>Agregar al carrito</button>

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