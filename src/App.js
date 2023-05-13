import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css'

import Navbar from './components/Navbar/Navbar';
import HomePage from './pages/homePage';
import LoginPage from './pages/login';
import SignUpPage from './pages/signup';
import Profile from './pages/profile';


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
