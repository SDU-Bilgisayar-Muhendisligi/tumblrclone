import React, { Component } from 'react'
import './likesPage.css'

const LikesPage = () => {
    return (
      <div className='homePageContainer'>
        <div className='leftSideF'>
          <section className='bos'>
            <p>Gösterilecek gönderi yok.</p>
          </section>
          <p className='postsBilgi' >test gönderi: </p>
          <section className='postListContainer'>
            
            <div className='pp'></div>

            <div className='post1'>
              <p>örnek post</p>
            </div>
          </section>
        
          <div className='partB'>

          </div>
        </div>

        <div className='rightSideF'> 

        </div>
      </div>
  
    );
  };

  export default LikesPage;