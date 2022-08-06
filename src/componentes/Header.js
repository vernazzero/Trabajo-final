import React from "react";
import { Link } from "react-router-dom"

const Header = () => {

    return (

        <header>

            <nav>

        <div className="container">
 
            <a href="#" id="links"><i className="fa-solid fa-bars"></i></a>

            <h1>Gaming City</h1>

        <div className="cartUser">

            <Link to='login'><a href="#" id="links"><i className="fa-solid fa-user"></i></a></Link>

            <a href="#" className="cart" id="links"><i className="fa-solid fa-cart-shopping"></i></a>

        </div>

        </div>

            </nav>

        </header>

    )
}

export default Header 