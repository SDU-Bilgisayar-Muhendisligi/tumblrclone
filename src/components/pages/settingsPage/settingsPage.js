import React, { Component } from 'react'
import './settingsPage.css'

const SettingsPage = () => {
    return (
      <div className='homePageContainer'>
        <div className='leftSideF'>
          <div className='settingsContainer'>
            <h2 className='hesap'>Hesap</h2>
            <section className='ayar eposta'>
              <div><h3>E-posta</h3></div>
              <div><p className='Pmail'>xXxXx@Xmail.com</p></div>
            </section>
            <section className='ayar parola'>
              <div><h3>Parola</h3></div>
              <div></div>
            </section>
            <section className='ayar dogumTarihi'>
              <div><h3>Doğum tarihi</h3></div>
              <div></div>
            </section>
            <section className='SEChesapSil'>
              <button className='BTNhesapSil'>Hesabı Sil</button>
            </section>
          </div>
        </div>

        <div className='rightSideF'>      </div>
      </div>
  
    );
  };

  export default SettingsPage;