import React from 'react'
import { Route, Switch } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import Home from './Home';
import UserLogin from './UserLogin';
import UserSignUp from './UserSignUp';
import Header from '../components/Header';
import Footer from '../components/Footer';


const Routejs = () => {
    return (
        <Router>
            
            <div>
            {/* <Header /> */}
                <Switch>
                    {/* <Route path="/">
                        <Home />
                    </Route> */}
                    <Route exact path="/" component={Home} />
                    <Route exact path="/home/:email?" component={Home} />
                    <Route exact path="/login" component={UserLogin} />
                    <Route exact path="/register" component={UserSignUp} />
                </Switch>
            </div>
            {/* <Footer /> */}
        </Router>
    )
}

export default Routejs