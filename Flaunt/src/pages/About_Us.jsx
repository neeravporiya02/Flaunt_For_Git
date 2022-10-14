import React from 'react'
import { useParams, Link } from "react-router-dom";

const About_Us = () => {
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
                    <h2 style={{color: '#fc2779'}}>The Flaunt Story</h2>
                    <p style={{color: '#fc2779'}}>USA's largest omnichannel Beauty, Health and Wellness destination</p><br></br>
                    <p>Since our launch, we have not only redefined the art of e-retailing beauty and personal care in USA, but also have been instrumental in fostering the growth of a previously relatively nascent ecosystem. From bringing you domestic brands, international brands, luxury and prestige brands, premium brands, niche and cult brands and expert advice and videos, coupled with our understanding of the needs and preferences of the consumers,to more than 72 Luxe and On-Trend and Kiosk Stores, an ever growing online community for beauty buffs, and a Beauty Helpline, we go out of our way to give you only the very best. With 2400+, 100% authentic brands Flaunt offers a well curated comprehensive selection of makeup, skincare, haircare, bath and body, fragrance, grooming appliances, personal care, and health and wellness categories.</p><br></br>
                    <p>Flaunt is all about celebrating the star in each woman, and being her confidante and companion as she embarks on her own journey to discover her unique identity and personal style. From the widest selection of genuine beauty products from around the world to beauty advice, Flaunt is truly passionate about catering to your every beauty and wellness need. Because after all, Your Beauty is Our Passion.</p><br></br>
                    
                    <h3 style={{color: '#fc2779'}}>Vision</h3>
                    <p>Provide customers with best Beauty, Wellness and Health Products</p>
                    <br></br>

                    <h3 style={{color: '#fc2779'}}>Mission</h3>
          <p>To create a world where our consumers have access to a finely curated, authentic product and service that delight and elevate the human spirit.</p>
          <br></br>
          <img src="http://webpage.pace.edu/np57411n/cs641/Project1/Flaunt/assets/images/products/seal.png" width="50" height="50" />
          <h3>Authenticity</h3>
          <p>We have developed systems and processes to ensure that the products sold on our platform are authentic, and build trust among our consumers and brands. For our beauty and personal care offering, our business is predominantly inventory led. This approach ensures sourcing directly from brands or their authorized distributors in USA. It allows us to guarantee authenticity of products bought by our consumers, an important consideration for consumers of such products. We also conduct quality checks at our warehouses periodically on our beauty and personal care products. For our fashion offering, we operate a managed marketplace and ensure that the sellers we onboard are authorized resellers only. We have also developed systems to monitor and address consumer complaints towards our ongoing commitment to authenticity.</p>
                </div>
            </div>
        </section>
        
    </div>
  )
}

export default About_Us