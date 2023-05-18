import React from 'react';
import './SignupNavbar.scss'
import SignupNavbar from './SignupNavbar';
import tumblrrr from '../../components/icons/tumblrrr.png'
import google from '../../components/icons/google.png'
import './Signup.scss'
import { useNavigate } from 'react-router-dom';




const Signup = () => {
  const navigate = useNavigate()

  return (
    <>

        <SignupNavbar/>

        <div className='table'>
          <img className='tumblrrr' src={tumblrrr} alt="tumblr" height={160} width={280} onClick={()=>navigate('/')} />
          <div className='gap-setter'>
          <div className='mail-pw'>
            <input className='mail' type="text" placeholder='E-posta' />
            <input className='pw' type="text" placeholder='Parola' />
          </div>
      
         </div>
          <button className='login'>Kaydol</button>
          <p className='veya'>veya</p>
          <div className='googlex'>
          <button className='google' >Google ile devam et</button>
          <img className='googleicon2' src={google} alt="googleicon" width={15}height={15} />    
         </div>
         </div>
        

    

    



    
    
    
    </>
  )
}

export default Signup