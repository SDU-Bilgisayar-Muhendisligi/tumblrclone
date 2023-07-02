//import React, { Component } from 'react'
import './followings.css'

import Navbar from '../../navbar-renes/NavBar.jsx'



function FollowingPage() {
  return (
    <>
      
      <Navbar />
      <div className='homePageContainer'>
        <div className='leftSideF'>
          <section className='partA'>
            <p>0 &nbsp; </p><p> blogu takip ediyorsun</p>
          </section>
          <form className="searchF">
            <input className="search-barF" type="text" placeholder="Kullanıcı Adı" />
          </form>

          <div className='followingContainer'>
            <section className='followed'>
              <div className='smPP'></div>
              <div className='kAd'> <p>xYx</p></div>
              <div className='BtnTakip'><p>Takip Et</p></div>
            </section>
            <section className='followed'>
              <div className='smPP'></div>
              <div className='kAd'> <p>Verolps</p></div>
              <div className='BtnTakip'><p>Takip Et</p></div>
            </section>
            <section className='followed'>
              <div className='smPP'></div>
              <div className='kAd'> <p>xadımalix</p></div>
              <div className='BtnTakip'><p>Takip Et</p></div>
            </section>
            
          </div>
          



        </div>

        <div className='rightSideF'>

        </div>
      </div>

    </>
  );
}

  export default FollowingPage;