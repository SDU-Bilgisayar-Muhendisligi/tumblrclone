import React from "react"
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import Popup from "reactjs-popup"
import Logo from "../icons/logo.png"
import homeBtn from '../icons/1.png'
import inboxBtn from '../icons/3.png'
import accountBtn from '../icons/2.png'
import postBtn from '../icons/post.png'
import account from "./navbarDropdown";
import "./NavBar.css"





export default function NavBar() {

    const navigate = useNavigate();
    const navigateHome = () => {

        navigate('/');
    };
    const navigateInbox = () => {

        navigate('/inbox');
    };




    return (
        <div className="navBarContainer">
            <section className="nav-bar-left">
                <section className="logoNavBar">
                    <img src={Logo} alt="logo" className="logo-image" onClick={navigateHome} />
                </section>
                <section className="searchNavBar">
                    <form className="search">
                        <input className="search-bar" type="text" placeholder="Tumblr'da Ara" />
                    </form>
                </section>
            </section>
            <section className="nav-bar-right">
                <div className="navbar-links">
                    <img src={homeBtn} alt="logo" className="home icon" onClick={navigateHome} />
                    <img src={inboxBtn} alt="logo" className="inbox icon" onClick={navigateInbox} />
                    <Popup trigger={<button className="account-button"><img className="acc icon" src={accountBtn} alt="account" /></button>} >
                        <div className="popup">
                            <ul className="ULpopup">
                                <li className="listE"> <Link to="/likes" className='text-link'><span>Beğeniler</span> <span className="jF6A2">0</span></Link></li>
                                <li className="listE"> <Link to="/following" className='text-link'><span>Takip Edilenler</span> <span className="jF6A2">0</span></Link></li>
                                <li className="listE"> <Link to="/settings" className='text-link'><span>Ayarlar</span></Link></li>
                                <li className="listE"> <Link to="/user" className='text-link'><div> <span class="ZC1wz">Profil</span> </div></Link></li>
                            </ul>
                        </div>
                    </Popup>


                    <img src={postBtn} alt="logo" className="post icon" onClick='' />

                    <button className='BTNoturum'>Oturum Aç</button>

                    {/* <li>
                        <Link to="/profile">profile</Link>
    </li>  */}
                </div>
            </section>
        </div>

    )

}


{/* <li class="IYrO9 ywBwc QKL2M">
    <a class="tDT48" href="/likes">
        <div class="kn4U3">
            <svg xmlns="http://www.w3.org/2000/svg" height="18" width="20" role="presentation" style="--icon-color-primary: rgba(var(--black), 0.65);">
                <use href="#managed-icon__like-filled"></use>
            </svg></div>
        <div class="a132D">
            

        </div></a></li> */}
