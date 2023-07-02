//import React, { Component } from 'react'
import './settingsPage.css'
import Navbar from '../../navbar-renes/NavBar.jsx'


/*
function clicked(e)
{
    if(!confirm('Are you sure?')) {
        e.preventDefault();
    }
}*/
/*
function uyar = alert();
    
    function uyarA = () => {

        uyar("Hesabını Silmek İstediğine Emin misin?");
    };
*/
    function clicked() {
      alert('Hesabını Silmek İstediğine Emin misin?');
  }


const SettingsPage = () => {
    return (

<>
      <Navbar />
      <div className='homePageContainer'>
        <div className='leftSideF'>
          <div className='settingsContainer'>
            <h2 className='hesap'>Hesap Ayarları</h2>
            <section className='ayar kullA'>
              <div className='Hac'><h3 >Kullanıcı Adı:</h3></div>
              <div><p className='userName'>xXx</p></div>
            </section>
            <section className='ayar eposta'>
              <div className='Hac'><h3>E-posta:</h3></div>
              <div><p className='Pmail'>xXxXx@Xmail.com</p></div>
            </section>
            <section className='ayar parola'>
              <div className='Hac'><h3>Parola:</h3></div>
              <div><input className='Ipassword' type="password" value="abcd123" disabled></input>
              <image className="eye" src="" alt="logo" /> 
              </div>
            </section>
            <section className='ayar dogumTarihi'>
              <div className='Hac'><h3>Doğum tarihi:</h3></div>
              <div><p className='Pmail'>xx-xx-xxxx</p></div>
            </section>
            <section className='SEChesapSil'>
            <button className='BTNhesapSil' onClick={()=>clicked()}>Hesabı Sil</button> 
            </section>
          </div>
        </div>

        
      </div>
      </>
    );
  };

  /*  <input className='BTNhesapSil' onClick={alert("Hesabını Silmek İstediğine Emin misin?")} value="Hesabı Sil" />  
  <button className='BTNhesapSil' onClick={alert("Hesabını Silmek İstediğine Emin misin?")}>Hesabı Sil</button>  */

  export default SettingsPage;