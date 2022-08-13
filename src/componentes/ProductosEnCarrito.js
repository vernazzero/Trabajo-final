import React from "react";
import { useState, useEffect } from "react";

const ProductosEnCarrito = ({cart, borrarProducto}) => {

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