import './App.css';
// import Footer from './components/Footer';
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
        {/* <Footer /> */}
        
    </div>
  );
}

export default App;
