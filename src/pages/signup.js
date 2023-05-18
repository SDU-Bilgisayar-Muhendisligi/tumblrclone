
import React from 'react';
import styled from 'styled-components'
  
const SignUp = () => {
  return (
    <div>
      <div className="logInFormContainer">
        <form 
        autoComplete='off' 
        
        className="logInFormSection"
        >
          <div className='formLogo'><img  className='form-logo' src='../icons/tumblr-logo.png'></img></div>
          <div><label className='formLabel caption'>İnternetteki köşene hoş geldin. Bi' daha sıkılmak mıkılmak yok.</label></div>
          <div className="buttonContainer">

            <button className="logInBtn goBtn" type='submit'><img src={process.env.PUBLIC_URL+"/icons/logo-google.png"} alt="right-arrow" className="label-logo" /> <label className='formLabel giris'>Google ile devam et</label>
            &nbsp;
            </button>
          </div>
          <div className="buttonContainer">
            
            <button className="logInBtn goBtn" type='submit'><img src={process.env.PUBLIC_URL+"/icons/logo-apple.png"} alt="right-arrow" className="label-logo" /> <label className='formLabel giris'>Apple ile devam et</label>
            &nbsp;
            </button>
          </div>
          <div className="buttonContainer">
            
            <button className="logInBtn goBtn" type='submit'><img src={process.env.PUBLIC_URL+"/icons/logo-mail.png"} alt="right-arrow" className="label-logo" /> <label className='formLabel giris'>E-posta ile devam et</label>
            &nbsp;
            </button>
          </div>
          <div ><label className='formLabel twitter-caption'>Twitter'dan mı geliyorsun? Hadi kaydol</label></div>
        </form>
      </div>
    </div>

  );
};
export default SignUp;