//import React, { Component } from 'react'
import './inbox.css'
import Navbar from '../../navbar-renes/NavBar.jsx'

const InboxPage = () => {
    return (
<>
      <Navbar />
      <div className='inboxContainer'>
          <div className='leftSideCont'>
            <div className='bosIleti'>
              <div className='bilgi'>
                <h4>Yeni iletin yok</h4>
                <p>Daha fazla bilgi edin.</p>
              </div>
            </div>
          </div>
          
          <div className='rightSideCont'></div>
          
      </div>
      </> 
    );
  };

  export default InboxPage;