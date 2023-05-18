import React from 'react';
import './SignupNavbar.scss';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { useNavigate } from 'react-router-dom';
import logo2 from '../../components/icons/logo2.png'

const LoginNavbar = () => {
    const navigate = useNavigate()
  return (
    <nav className='nav'>
        <div className='navbarWrapper'>
            <div className='navbar-left'>
                <img className='logo' src= {logo2} alt="logo" onClick={()=>navigate('/')} width={55} height={55}/>
                <div className='inputWrapper'>
                    <input type="text" placeholder="Tumblr'ı Ara" />
                    <MagnifyingGlassIcon width={20} className="icon" />
                </div>
            </div>
            <div className='navbar-right'>
                <button className='sign-up-button' onClick={()=>navigate('/login')}>Oturum aç</button>
            </div>
        </div>

    </nav>
  )
}

export default LoginNavbar