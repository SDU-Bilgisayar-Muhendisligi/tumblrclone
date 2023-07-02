import React from 'react';
import './Login.scss';
import LoginNavbar from './LoginNavbar';
import tumblrrr from '../../components/icons/tumblrrr.png'
import google from '../../components/icons/google.png'
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate()
  
  
  return (
    <>



    <LoginNavbar/>

    <div className='table'>
        <img className='tumblrrr' src={tumblrrr} alt="tumblr" height={160} width={280} onClick={()=>navigate('/')}  />
        <div className='gap-setter'>
        <div className='mail-pw'>
            <input className='mail' type="text" placeholder='E-posta' />
            <input className='pw' type="text" placeholder='Parola' />
        </div>
        <p className='text'>Oturum aç düğmesine tıkladığında ya da aşağıda yer 
            alan diğer seçenekleri kullandığında, Tumblr’ın 
            Hizmet Şartlarını kabul etmiş ve Gizlilik Politikasını
             okumuş sayılırsın.
        </p>
        </div>
        <button className='login'>Oturum Aç</button>
        <p className='pw-res'>Parolanı mı unuttun?</p>

        <p className='veya'>veya</p>
        <div className='google-wrapper'>
        <button className='google' >Google ile devam et</button>
        <img className='googleicon' src={google} alt="googleicon" width={15}height={15} />
        </div>

        <p className='ru-new' >Tumblrda yeni misin? <a className='kaydol' href="" onClick={()=>navigate('/signup')}>Kaydol</a></p>
    
        

    

    </div>

    </>
  )
}

export default Login