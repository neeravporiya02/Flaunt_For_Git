import React from "react";

const Footer = () => {
    return (
        <footer className="section-footer footer-dark" style={{background: '#e9e8e6'}}>
          <div className="container">
            <section className="footer-main padding-y">
              <div className="row">
                <aside className="col-12 col-sm-12 col-lg-3">
                  <article className="me-lg-4">
                    <a className="navbar-brand" href="home.html">
                      <span className=""><img alt='FlauntLogo' src=" /images/Flogo.png" className="m-2" width="150px" /> </span>
                    </a>
                  </article>
                </aside>
                <aside className="col-6 col-sm-4 col-lg-2">
                  <h6 className="title">Store</h6>
                  <ul className="list-menu">
                    <li> <a href="About_us.html" target="_blank">Who Are We</a></li>
                  </ul>
                </aside>
                <aside className="col-6 col-sm-4 col-lg-2">
                  <h6 className="title">Information</h6>
                  <ul className="list-menu">
                    <li> <a href="Terms_and_Conditions.html" target="_blank">Terms & Conditions</a></li>
                  </ul>
                </aside>
                <aside className="col-6 col-sm-4  col-lg-2">
                  <h6 className="title">FAQs</h6>
                  <ul className="list-menu">
                    <li> <a href="Frequently_Asked_Questions.html" target="_blank"> Frequently Asked Questions </a></li>
                  </ul>
                </aside>
                <aside className="col-6 col-sm-4  col-lg-2">
                  <h6 className="title">Contact</h6>
                  <ul className="list-menu">
                    <li> <a href="Contact_us.html" target="_blank"> Contact Us </a></li>
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