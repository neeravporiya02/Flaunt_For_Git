import React from 'react'
import { useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import './EditUserProfile.css'
import { Alert } from 'react-bootstrap';

export const OrderConfirmation = () => {

    // const {email} = useParams();
    let [email, setEmail] = useState();
    let [isDeleted, setIsDeleted] = useState(false);

    setEmail = "np57411n@pace.edu";

    const handleClick = () => {
        document.getElementById("deleteBtn").disabled = true;
        
        // eslint-disable-next-line no-restricted-globals
        const isConfirmed = confirm('Are you sure you want to delete this account, All the data will be deleted permanently?');

if(isConfirmed) {
    // do something if the user has confirmed
    setIsDeleted = true;
    setEmail="";
    email="np57411n@pace.edu"
    window.location.replace('http://localhost:3000/');
} else {
    // do something else if the user declined
    document.getElementById("deleteBtn").disabled = false;
}
    };

    
  return (
        <div>

    <div className="container-fluid p-3">
            <div className="row">
                <div className="col-md-3 col-sm-6">
                    <Link to={`/`} className="navbar-brand">
                        <span className=""><img alt='Flaunt Logo' src=" /images/Flogo.png" className="m-2" width="150px" /> </span>
                    </Link>
                </div>
                <div className="col-md-4 col-sm-4 ms-auto mt-2">
                    <input className="form-control me-2" type="text" placeholder="Search" />
                </div>

                <div className="order-lg-last col-lg-5 col-sm-8 col-8 ms-auto">
                    <div className="float-end dropdown">
                        {
                            setEmail ? 
                            <div>
                            <a className="btn btn-light dropdown dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                            Hi {setEmail}
                        </a>
                        <ul className="dropdown-menu" style={{zIndex:"1"}} aria-labelledby="dropdownMenuLink">
                            {/* <li><a className="dropdown-item" href="#">Profile</a></li> */}
                            <Link to={`/UserProfile`} className="dropdown-item">Profile</Link>
                            <li><a className="dropdown-item" href="#">Orders</a></li>
                            <li><a className="dropdown-item" href="#">Sign out</a></li>
                        </ul>
                        </div>
                            : <Link to="/login" className="btn btn-light btnSpacing"><i className="fa fa-user"></i>  <span className="ms-1 d-none d-sm-inline-block"> </span> Sign in </Link>
                        }
                        
                            

                        <Link to="/register" className="btn btn-light btnSpacing"> <i className="fa fa-heart"></i>  <span className="ms-1 d-none d-sm-inline-block"> </span> Wishlist</Link>

                        <a data-bs-toggle="offcanvas" href="#offcanvas_cart" className="btn btn-light">
                            <i className="fa fa-shopping-cart"></i> <span className="ms-1">My cart </span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        
        <div>
                <nav className="navbar navbar-expand-sm navbar-light bg-light sticky-top" style={{zIndex:"-1"}}>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbar">
                    <ul className="navbar-nav  w-100 justify-content-center px-3">
                            <li className="nav-item">
                            <Link to={`/Product`} className="nav-link navcontent">New</Link>
                            </li>
                            <li><Link to={`/Product`} className="nav-link navcontent">Brands</Link></li>
                            <li><Link to={`/Product`} className="nav-link navcontent">Makeup</Link></li>
                            <li><Link to={`/Product`} className="nav-link navcontent">Skincare</Link></li>
                            <li><Link to={`/Product`} className="nav-link navcontent">Hair</Link></li>
                            <li><Link to={`/Product`} className="nav-link navcontent">Fragrance</Link></li>
                            <li><Link to={`/Product`} className="nav-link navcontent">Bath & Body</Link></li>
                            <li><Link to={`/Product`} className="nav-link navcontent">Wellness</Link></li>
                            <li><Link to={`/Product`} className="nav-link navcontent">Sales & Promotions</Link></li>
                        </ul>
                    </div>
                </nav>
        </div>

        {/* <!-- ============== SECTION PAGETOP ============== --> */}
        <section class="bg-primary padding-y-sm p-2">
        <div class="container">
        
        <ol class="breadcrumb ondark mb-0">
            <li class="breadcrumb-item"><a href="#">Home</a></li>
            <li class="breadcrumb-item"><a href="#">Profile</a></li>
            <li class="breadcrumb-item active" aria-current="page">Account main</li>
        </ol>
        
        </div> 
        {/* <!-- container //  --> */}
        </section>
    {/* <!-- ============== SECTION PAGETOP END// ============== --> */}

        
        {/* <!-- ============== SECTION CONTENT ============== --> */}
        <section class="padding-y bg-light mt-3">
        <div class="container">
        
        <Alert variant="success">
      <Alert.Heading>Order Successfully Placed</Alert.Heading>
      <p>
        <b>Order Id:</b> 129048.
      </p>
      <p>Your Order is successfully placed and you will receive email confirmation for the same on the registered email address.</p>
    </Alert>
        <br /><br />
        
        
        </div> 
        </section>
        {/* <!-- ============== SECTION CONTENT END// ============== --> */}
        {/* </article> */}
    </div>

    
    
  )
}
