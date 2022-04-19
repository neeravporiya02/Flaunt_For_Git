import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import UserLogin from './pages/User_Login';
import Home from './pages/Home';



function App() {
  return (
    <div className="App">
        <Header />
        <Home />
          {/* <UserLogin /> */}
        <Footer />
    </div>
  );
}

export default App;
