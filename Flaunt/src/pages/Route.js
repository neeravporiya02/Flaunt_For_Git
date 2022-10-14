import React from 'react'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Importing components
import Home from './Home';
import Footer from '../components/Footer';
import Header from '../components/Header';
import UserLogin from './UserLogin';
import UserSignUp from './UserSignUp';
import { Frequently_Asked_Questions as FAQ} from './Frequently_Asked_Questions';
import {Terms_and_Conditions as TAC} from './Terms_and_Conditions';
import { Contact_Us as Contactus} from './Contact_Us';
import About_Us from './About_Us';
import { Product } from './Product';

function Routejs() {
    return (
        
            <div>
                <Router>
                    {/* <Header/> */}
                    <Routes>
                        <Route exact path="/" element={ <Home />} />
                        <Route exact path="/home/:email?" element={ <Home/> } />
                        <Route exact path="/login" element={ <UserLogin/> } />
                        <Route exact path="/register" element= { <UserSignUp/> } />
                        <Route exact path="/FAQ" element={ <FAQ/> } />
                        <Route exact path="/TAC" element={ <TAC/> } />
                        <Route exact path="/Contact_Us" element={ <Contactus/> } />
                        <Route exact path="/About_Us" element={ <About_Us/> } />
                        <Route exact path="/Product" element={ <Product/> } />
                    </Routes>
                    <Footer />
                </Router>
            </div>
    )
}

export default Routejs