import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/login.css"
import Inicio from "./Inicio";

const Login = () => {

    return(

<>

<header>

<nav>

    <div className="container2">

        <a href="#" id="menu"><i className="fa-solid fa-bars"></i></a>

        <h1 className="titulo">Gaming City</h1>

        <div className="cartUser">

            <a href="#" id="user"><i className="fa-solid fa-user"></i></a>

            <a href="#" id="cart"><i className="fa-solid fa-cart-shopping"></i></a>

        </div>

    </div>

</nav>

</header>

<main>

        <div className="iniciarSesion">

            <h2 className="subtitulo">Ingresar</h2>

            <p>¿No tenes una cuenta? Registrate.</p>

            <form>

                <input type="email" className="formulario" placeholder="Email" required/> <br/>

                <input type="password" className="formulario" placeholder="Contraseña" required/>

                <div className="btnA">

                    <input type="button" className="btn" value="Ingresar"/>

                    <Link to="/"><a href="#">Volver atras</a></Link>

                </div>

            </form>

        </div>

    </main>

<footer>

<div className="footer-login" id="contacto">

    <h3>Nuestas redes</h3>
    <a href="https://twitter.com/" className="redes-login"><i className="fa-brands fa-twitter"></i></a>
    <a href="https://www.instagram.com/" className="redes-login"><i className="fa-brands fa-instagram"></i></a>
    <a href="https://www.facebook.com/" className="redes-login"><i className="fa-brands fa-facebook"></i></a>

</div>

</footer>
            
</>

)

}

export default Login 