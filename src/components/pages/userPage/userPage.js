import React, { Component } from 'react'
import './userPage.css'


const UserPage = () => {
    return (
      <div className='UPContainer'>
          <div className='PA'> 
                <h1 className='UPusername'>XXX's Profile</h1>
                <img></img>
                <h2 className='unfButton'> Follow/Unfollow </h2>
          </div>
          
          <section className='postListContainer'>
            <p className='postsBilgi' >Tüm Gönderilerin: </p>
            <div className='post1'>
              <p>örnek post</p>
            </div>
          </section>
          
      </div>
  
    );
  };

  export default UserPage;