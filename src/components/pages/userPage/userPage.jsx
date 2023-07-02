//import React, { Component } from 'react'
import './userPage.css'
import Navbar from '../../navbar-renes/NavBar.jsx'
import BlogCard from '../../blogCard/BlogCard';


const UserPage = () => {
    return (
<>

      <Navbar />
      <div className='UPContainer'>
          <div className='PA'> 
                <h1 className='UPusername'>XXX*s Profile</h1>
                <img></img>
                <h2 className='unfButton'> Follow/Unfollow </h2>
          </div>
          
          <h3 className='bilgiUser' >Tüm Gönderilerin: </h3>

          <section className='postListContainer'>
          <BlogCard />
          <BlogCard />
          <BlogCard />
          </section>
          
      </div>
      </>
    );
  };

  export default UserPage;