import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Signup from './pages/signup/Signup.jsx';
import Login from './pages/login/Login.jsx';


import FollowingPage from './components/pages/followingsPage/followingsPage';
import LikesPage from './components/pages/likesPage/likesPage';
import InboxPage from './components/pages/inboxPage/inboxPage';
import UserPage from './components/pages/userPage/userPage';
import SettingsPage from './components/pages/settingsPage/settingsPage';




const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <Signup />,
  },
  {
    path: '/following', element: <FollowingPage />,// 
  },
  {
    path: '/likes', element: <LikesPage />,// <p> ayar + column hiza
  },
  {
    path: '/inbox', element: <InboxPage />,// 
  },
  {
    path: '/user', element: <UserPage />,// <p> ayar + p-m + 
  },
  {
    path: '/settings', element: <SettingsPage />,//column Hiza, p-m
  }

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <RouterProvider router={router} />
  </React.StrictMode>
);
