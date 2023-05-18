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
          
            <p className='postsBilgi userP' >(test post)Tüm Gönderilerin: </p>
          <section className='postListContainer'>
          <div className='pp'></div>  
            <div className='post1'>
              <p>örnek post</p>
            </div>
          </section>
          
      </div>
  
    );
  };

  export default UserPage;