import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css'

import Navbar from './components/Navbar/Navbar';
import HomePage from './components/pages/homePage';
import LoginPage from './components/pages/login';
import SignUpPage from './components/pages/signup';
import Profile from './components/pages/profile';


function App() {
  return (
   
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/signup' element={<SignUpPage />} />
      </Routes>
    </Router>
    
  );
}

export default App;
