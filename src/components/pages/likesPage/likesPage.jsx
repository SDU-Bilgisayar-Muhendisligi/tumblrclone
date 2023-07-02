//import React, { Component } from 'react'
import './likesPage.css'
import Navbar from '../../navbar-renes/NavBar.jsx'
import BlogCard from '../../blogCard/BlogCard';

const LikesPage = () => {
    return (
<>
<Navbar />
      <div className='homePageContainer'>
        <div className='leftSideF'>
          <section className='bos'>
            <p>Gösterilecek gönderi&nbsp;</p><p className='toplamGönderi'>2</p>
          </section>
          
          <hr></hr>
          <section className='postListContainer'>
          <BlogCard />
          <BlogCard />
          
          </section>
        
          <div className='partB'>

          </div>
        </div>

        <div className='rightSideF'> 

        </div>
      </div>
  </>
    );
  };

  export default LikesPage;