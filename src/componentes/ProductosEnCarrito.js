import React from "react";
import { useState, useEffect } from "react";
import Swal from 'sweetalert2'
import CarritoVacio from "./CarritoVacio";

const ProductosEnCarrito = ({cart, borrarProducto, comprar, vaciarCarrito}) => {

    const [total, setTotal] = useState(0)

    const obtenerTotal = () => {

        cart.forEach(item => setTotal (total+item.precio));

    }

    useEffect(() => {

        obtenerTotal()

    },[cart])
    
    return(

        <>

            <p className="precioTotal">Total:${total}</p>
            <button className="btnComprar" onClick={comprar}>Comprar</button>
            <button className="btnVaciar" onClick={vaciarCarrito}>Vaciar carrito</button>

        {cart.map(item => {

            return(

                <div key={item.nombre} className="contenedorCarrito">

                    <img src={item.img} alt={item.nombre} className="imgCarrito"/>

                    <div className="nombreYprecio">

                        <p className="nombre">{item.nombre}</p>
                        <p className="precio">${item.precio}</p>

                    </div>

                    <button className="btn-eliminar" onClick={()=>borrarProducto(item.id)}><i className="fa-solid fa-xmark"></i></button>

                </div>

            )

        })}

        </>

    )


}

export default ProductosEnCarrito