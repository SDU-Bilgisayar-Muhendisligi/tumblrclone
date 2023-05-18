import Navbar from './components/navbar/Navbar';
import Hero from './pages/hero/Hero';
import Login from './pages/login/Login';
import SignupNavbar from '../src/pages/signup/SignupNavbar'

const App = () => {
  return (

    <>
    <div>
      <SignupNavbar />
      <Hero />
    </div>
    </>
  );
};

export default App;
