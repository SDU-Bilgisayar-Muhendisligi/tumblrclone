import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css'

import Navbar from './components/Navbar/Navbar';
import HomePage from './components/pages/homePage';
import LoginPage from './components/pages/login';
import SignUpPage from './components/pages/signup';
import Profile from './components/pages/profile';
import FollowingsPage from './components/pages/followingsPage/followingsPage';
import LikesPage from './components/pages/likesPage/likesPage';
import InboxPage from './components/pages/inboxPage/inboxPage';
import UserPage from './components/pages/userPage/userPage';
import SettingsPage from './components/pages/settingsPage/settingsPage';


function App() {
  return (
   
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        
        <Route path='/profile' element={<Profile />} />
        <Route path='/following' element={<FollowingsPage />} />
        <Route path='/likes' element={<LikesPage />} />
        <Route path='/inbox' element={<InboxPage />} />
        <Route path='/user' element={<UserPage />} />
        <Route path='/settings' element={<SettingsPage />} />
      </Routes>
    </Router>
    
  );
}

export default App;
