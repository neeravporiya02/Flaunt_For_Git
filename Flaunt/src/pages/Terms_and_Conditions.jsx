import React from 'react'
import { useParams, Link } from "react-router-dom";
export const Terms_and_Conditions = () => {
    const { email } = useParams();
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
                            email ? 
                            <div>
                            <a className="btn btn-light dropdown dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                            Hi {email}
                        </a>
                        <ul className="dropdown-menu" style={{zIndex:"1"}} aria-labelledby="dropdownMenuLink">
                            <li><a className="dropdown-item" href="#">Profile</a></li>
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

        <section id="portfolio" class="portfolio">
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h2>Terms &amp; Conditions</h2>
          
            <div class="accordion" id="accordionExample">
              <div class="accordion-item">
                <h3 class="accordion-header" id="headingOne">
                  <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Use of Platform
                  </button>
                </h3>
                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                    <strong>Welcome to www.Flaunt.com ( "Site" or "Flaunt " )</strong> The website www.Flaunt.com is owned and operated by Flaunt E-Retail Private Limited (" Flaunt "), and the retail stores i.e. Flaunt Luxe and Flaunt On Trend is operated under FSN Brands Marketing Private Limited ("FSN B") a company incorporated under the provisions of the Companies Act, 2013 with its registered office at 104, Vasan Udyog Bhavan, Sun Mill Compound, S.B.Marg, Tulsi Pipe Road, Lower Parel, Mumbai 400 013 India. Flaunt and FSN B are together referred to as Flaunt and the Site and retail stores are together referred as Platform. You may be accessing our Site from a computer or mobile phone device (through an iOS or Android application, for example) and these Terms of Use govern your use of our Site and your conduct, regardless of the means of access. You may also be using our interactive services (" Interactive Services "), such as our Beauty Suggestions, Beauty Book etc. and the Beauty Services wherein you can book any beauty service provided by our beauty partners (" Beauty Services ") and these Terms of Use also govern your use of the Interactive and Beauty Services. These Terms of Use govern all the products offered on the Platform including the Interactive and Beauty Services.
                    The Platform is only to be used for your personal non-commercial use and information. Your use of the services and features of the Platform shall be governed by these Terms and Conditions (hereinafter " Terms of Use ") along with the Privacy Policy, Shipping Policy and Cancellation, Refund and Return Policy (together " Policies ") as modified and amended from time to time.</div>
                </div>
              </div>
              <div class="accordion-item">
                <h3 class="accordion-header" id="headingTwo">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Privacy Practices
                  </button>
                </h3>
                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                    <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h3 class="accordion-header" id="headingThree">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Your Account
                  </button>
                </h3>
                <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                    <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h3 class="accordion-header" id="headingThree">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Product &amp; Services Information
                  </button>
                </h3>
                <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                    <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                  </div>
                </div>
              </div>
            </div>
        </div>



      </div>
        </section>
    </div>
  )
}
