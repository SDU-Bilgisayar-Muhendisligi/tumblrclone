import React, { Component } from 'react'
import './followings.css'

const FollowingPage = () => {
    return (
      <div className='homePageContainer'>
        <div className='leftSideF'>
          <section className='partA'>
            <p>0 &nbsp; </p><p> blogu takip ediyorsun</p>
          </section>
          <form className="searchF">
            <input className="search-barF" type="text" placeholder="Kullanıcı Adı" />
          </form>
                
          <div className='partB'>

          </div>
        </div>

        <div className='rightSideF'> 

        </div>
      </div>
    );
  };

  export default FollowingPage;