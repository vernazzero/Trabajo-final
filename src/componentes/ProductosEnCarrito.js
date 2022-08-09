import React from "react";

const ProductosEnCarrito = ({cart}) => {
    
    return(

        <div>

        {cart.map(item => {

            return(

                <div key={item.nombre}>

                    <img src={item.img} alt={item.nombre}/>

                    <div>

                        <p>{item.nombre}</p>
                        <p>{item.precio}</p>

                    </div>

                    <button>X</button>

                </div>

            )

        })}

        </div>

    )


}

export default ProductosEnCarrito