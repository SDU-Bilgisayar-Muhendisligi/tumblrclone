import React from 'react';
import styled from 'styled-components';
import "../components/LogInForm/LogInForm.css"
  
const LoginPage = () => {
  return (
    <div>
      <div className="logInFormContainer">
        <form 
        autoComplete='off' 
        
        className="logInFormSection"
        >
          <div className='formLogo'><img  className='form-logo' src='../icons/tumblr-logo.png'></img></div>

          <label className='formLabel'>E-Posta: </label>
          <input className='formInput' type='email' name='email' required /> 
          &nbsp;
          <label className='formLabel'>Şifre: </label>
          <input className='formInput' type='password' name='password'  required />
          <div className="buttonContainer">
            <button className="logInBtn" type='submit'> <label className='formLabel giris'>Giriş</label>
            &nbsp;
            <img src={process.env.PUBLIC_URL+"/icons/right-arrow.png"} alt="right-arrow" className="rightArrow" />
            </button>
          </div>
        </form>
      </div>
      <h1 className='error-message'></h1>
    </div>

  );
};

export default LoginPage;