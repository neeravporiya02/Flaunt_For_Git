import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import UserLogin from './pages/UserLogin';
import Home from './pages/Home';
import UserRegistration from './pages/UserRegistration';
import UserSignUp from './pages/UserSignUp';
import react, { useState } from 'react';
import { Router } from 'react-router-dom';
import Routerjs from './pages/Route';




function App() {
  // const [isSubmitted, setIsSubmitted] = useState(false);

  // function submitForm(){
  //   setIsSubmitted(true);
  // }
  return (
    <div className="App">
          {/* {!isSubmitted ? <UserSignUp submitForm={submitForm} /> : <Home />} */}
          <Routerjs />
        <Footer />
        
    </div>
  );
}

export default App;
