import React from "react"
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import Logo from "../icons/logo.png"
import "./NavBar.css"





export default function NavBar() {

    const navigate = useNavigate();
    const navigateHome = () => {
        // 👇️ navigate to /
        navigate('/');
      };
    

    return (
        <div className="navBarContainer">
            <section className="nav-bar-left">
                <section className="logoNavBar">
                    <img src={Logo} alt="logo" className="logo-image" onClick={navigateHome}  />
                </section>
                <section className="searchNavBar">
                    <form className="search">
                        <input className="search-bar" type="text" placeholder="Tumblr'da Ara" />
                    </form>
                </section>
            </section>
            <section className="nav-bar-right">
                <div className="navbar-links">
                    <li>
                        <Link to="/login">login</Link>
                    </li>
                    <li>
                        <Link to="/signup">signup</Link>
                    </li>
                    <li>
                        <Link to="/profile">profile</Link>
                    </li>
                </div>
            </section>
        </div>

    



    )

    
   
}


