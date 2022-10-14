import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="section-footer footer-dark" style={{background: '#e9e8e6'}}>
          <div className="container">
            <section className="footer-main padding-y">
              <div className="row">
                <aside className="col-12 col-sm-12 col-lg-3">
                  <article className="me-lg-4">
                    <Link to={`/`} className="navbar-brand">
                      <span className=""><img alt='FlauntLogo' src=" /images/Flogo.png" className="m-2" width="150px" /> </span>
                    </Link>
                  </article>
                </aside>
                <aside className="col-6 col-sm-4 col-lg-2">
                  <h6 className="title">Store</h6>
                  <ul className="list-menu">
                    <li><Link to={`/About_Us`}> Who Are We</Link> </li>
                  </ul>
                </aside>
                <aside className="col-6 col-sm-4 col-lg-2">
                  <h6 className="title">Information</h6>
                  <ul className="list-menu">
                  <Link to='/TAC'> Terms and Conditions</Link>
                  </ul>
                </aside>
                <aside className="col-6 col-sm-4  col-lg-2">
                  <h6 className="title">FAQs</h6>
                  <ul className="list-menu">
                    <li> 
                      <Link to='/FAQ'> Frequently Asked Questions</Link>
                    </li>
                  </ul>
                </aside>
                <aside className="col-6 col-sm-4  col-lg-2">
                  <h6 className="title">Contact</h6>
                  <ul className="list-menu">
                    <li> <Link to={`/Contact_Us`}> Contact Us </Link></li>
                  </ul>
                </aside>

              </div> 
            </section>  
            <hr className="my-0" />
            <section className="footer-bottom d-flex justify-content-lg-between">
              <div>
                <i className="fab fa-lg fa-cc-visa"></i>
                <i className="fab fa-lg fa-cc-amex"></i>
                <i className="fab fa-lg fa-cc-mastercard"></i>
                <i className="fab fa-lg fa-cc-paypal"></i>
              </div>
              <div>
                <p> © 2022 New Jersey. All rights reserved. </p>
              </div>
            </section>
          </div> 
          </footer>
    );
};

export default Footer;