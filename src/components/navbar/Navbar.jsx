import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import './Navbar.scss';
import { useNavigate } from 'react-router-dom';
import logo2 from '../../components/icons/logo2.png'



const Navbar = () => {

  const navigate = useNavigate()
  return (
    <nav className="nav">
      <div className="navbarWrapper">
        <div className="sol-taraf">
        <img className='logo' src= {logo2} alt="logo" onClick={()=>navigate('/')} width={55} height={55}/>
          <div className="inputWrapper">
            <input type="text" placeholder="Tumblr'ı Ara" />
            <MagnifyingGlassIcon width={20} className="icon" />
          </div>
        </div>
        <button className="signBtn" onClick={()=>navigate('/login')} >Oturum Aç</button>
      </div>
    </nav>
  );
};

export default Navbar;
