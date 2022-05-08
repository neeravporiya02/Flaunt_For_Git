import React, { useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
const Home = () => {
    const {email} = useParams();
    return (
        <div>
            <div className="container-fluid p-3">
            <div className="row">
                <div className="col-md-3 col-sm-6">
                    <a className="navbar-brand" href="#">
                        <span className=""><img alt='Flaunt Logo' src=" /images/Flogo.png" className="m-2" width="150px" /> </span>
                    </a>
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
                            <li><Link to={`/`}><a className="dropdown-item" href="#">Sign out</a></Link></li>
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
                                <a className="nav-link navcontent">New</a>
                            </li>
                            <li><a className="nav-link navcontent" href="product_grid.html">Brands</a></li>
                            <li><a className="nav-link navcontent" href="product_grid.html">Makeup</a></li>
                            <li><a className="nav-link navcontent" href="product_grid.html">Skincare</a></li>
                            <li><a className="nav-link navcontent" href="product_grid.html">Hair</a></li>
                            <li><a className="nav-link navcontent" href="product_grid.html">Fragrance</a></li>
                            <li><a className="nav-link navcontent" href="product_grid.html">Bath & Body</a></li>
                            <li><a className="nav-link navcontent" href="product_grid.html">Wellness</a></li>
                            <li><a className="nav-link navcontent" href="product_grid.html">Sales & Promotions</a></li>
                        </ul>
                    </div>
                </nav>
            </div>

            {/* Carousel Section */}
            <div id="demo" className="carousel slide" data-bs-ride="carousel">

                {/* <!-- Indicators/dots */}
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
                </div>

                {/* The slideshow/carousel */}
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src=" /images/banner2.png" alt="Bath and Body" className="d-block w-100" />
                    </div>
                    <div className="carousel-item">
                        <img src=" /images/banner5.jpg" alt="Black Fox" className="d-block w-100" />
                    </div>
                    <div className="carousel-item">
                        <img src=" /images/banner4.jpg" alt="Axe" className="d-block w-100" />
                    </div>
                </div>

                {/* Left and right controls/icons */}
                <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon"></span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                    <span className="carousel-control-next-icon"></span>
                </button>
            </div>

            {/* Portfolio Section  */}
            <section id="portfolio" className="portfolio">
                <div className="container" data-aos="fade-up">

                    <div className="section-title">
                        <h2>Featured Products</h2>
                        <p>Featuring our top 3 categories which are favourites amongst our customer base.</p>
                    </div>

                    <div className="row" data-aos="fade-up" data-aos-delay="100">
                        <div className="col-lg-12 d-flex justify-content-center">
                            <ul id="portfolio-flters">
                                <li data-filter="*" className="filter-active">All</li>
                                <li data-filter=".filter-skincare">Skincare</li>
                                <li data-filter=".filter-makeup">Makeup</li>
                                <li data-filter=".filter-fragrance">Fragrance</li>
                            </ul>
                        </div>
                    </div>

                    <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="200">

                        <div className="col-lg-4 col-md-6 portfolio-item filter-skincare">
                            <div className="portfolio-wrap">
                                <img src="https://webpage.pace.edu/np57411n/cs641/Project1/Flaunt/assets/images/products/image1.jpg" className="img-fluid" alt="" />
                                <div className="portfolio-info">
                                    <h4>App 1</h4>
                                    <p>App</p>
                                    <div className="portfolio-links">
                                        <a href="https://webpage.pace.edu/np57411n/cs641/Project1/Flaunt/assets/images/products/image1.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 1"><i className="bx bx-plus"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 portfolio-item filter-skincare">
                            <div className="portfolio-wrap">
                                <img src="https://webpage.pace.edu/np57411n/cs641/Project1/Flaunt/assets/images/products/image2.jpg" className="img-fluid" alt="" />
                                <div className="portfolio-info">
                                    <h4>Web 3</h4>
                                    <p>Web</p>
                                    <div className="portfolio-links">
                                        <a href="https://webpage.pace.edu/np57411n/cs641/Project1/Flaunt/assets/images/products/image2.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 3"><i className="bx bx-plus"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 portfolio-item filter-skincare">
                            <div className="portfolio-wrap">
                                <img src="https://webpage.pace.edu/np57411n/cs641/Project1/Flaunt/assets/images/products/skincare3.jpg" className="img-fluid" alt="" />
                                <div className="portfolio-info">
                                    <h4>App 2</h4>
                                    <p>App</p>
                                    <div className="portfolio-links">
                                        <a href="https://webpage.pace.edu/np57411n/cs641/Project1/Flaunt/assets/images/products/skincare3.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 2"><i className="bx bx-plus"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 portfolio-item filter-skincare">
                            <div className="portfolio-wrap">
                                <img src="https://webpage.pace.edu/np57411n/cs641/Project1/Flaunt/assets/images/products/portfolio-5.jpg" className="img-fluid" alt="" />
                                <div className="portfolio-info">
                                    <h4>Web 2</h4>
                                    <p>Web</p>
                                    <div className="portfolio-links">
                                        <a href="https://webpage.pace.edu/np57411n/cs641/Project1/Flaunt/assets/images/products/portfolio-5.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 2"><i className="bx bx-plus"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 portfolio-item filter-skincare">
                            <div className="portfolio-wrap">
                                <img src="https://webpage.pace.edu/np57411n/cs641/Project1/Flaunt/assets/images/products/portfolio-6.jpg" className="img-fluid" alt="" />
                                <div className="portfolio-info">
                                    <h4>App 3</h4>
                                    <p>App</p>
                                    <div className="portfolio-links">
                                        <a href="https://webpage.pace.edu/np57411n/cs641/Project1/Flaunt/assets/images/products/portfolio-6.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 3"><i className="bx bx-plus"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Makeup */}
                        <div className="col-lg-4 col-md-6 portfolio-item filter-makeup">
                            <div className="portfolio-wrap">
                                <img src="https://webpage.pace.edu/np57411n/cs641/Project1/Flaunt/assets/images/products/makeup1.jpg" className="img-fluid" alt="" />
                                <div className="portfolio-info">
                                    <h4>Marc Jacob</h4>
                                    <p>Decadence</p>
                                    <div className="portfolio-links">
                                        <a href="https://webpage.pace.edu/np57411n/cs641/Project1/Flaunt/assets/images/products/makeup1.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 3"><i className="bx bx-plus"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 portfolio-item filter-makeup">
                            <div className="portfolio-wrap">
                                <img src="https://webpage.pace.edu/np57411n/cs641/Project1/Flaunt/assets/images/products/makeup2.jpeg" className="img-fluid" alt="" />
                                <div className="portfolio-info">
                                    <h4>Marc Jacob</h4>
                                    <p>Decadence</p>
                                    <div className="portfolio-links">
                                        <a href="https://webpage.pace.edu/np57411n/cs641/Project1/Flaunt/assets/images/products/makeup2.jpeg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 3"><i className="bx bx-plus"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 portfolio-item filter-makeup">
                            <div className="portfolio-wrap">
                                <img src="https://webpage.pace.edu/np57411n/cs641/Project1/Flaunt/assets/images/products/makeup3.jpg" className="img-fluid" alt="" />
                                <div className="portfolio-info">
                                    <h4>Marc Jacob</h4>
                                    <p>Decadence</p>
                                    <div className="portfolio-links">
                                        <a href="https://webpage.pace.edu/np57411n/cs641/Project1/Flaunt/assets/images/products/makeup3.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 3"><i className="bx bx-plus"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 portfolio-item filter-makeup">
                            <div className="portfolio-wrap">
                                <img src="https://webpage.pace.edu/np57411n/cs641/Project1/Flaunt/assets/images/products/makeup4.jpg" className="img-fluid" alt="" />
                                <div className="portfolio-info">
                                    <h4>Marc Jacob</h4>
                                    <p>Decadence</p>
                                    <div className="portfolio-links">
                                        <a href="https://webpage.pace.edu/np57411n/cs641/Project1/Flaunt/assets/images/products/makeup4.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 3"><i className="bx bx-plus"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 portfolio-item filter-makeup">
                            <div className="portfolio-wrap">
                                <img src="https://webpage.pace.edu/np57411n/cs641/Project1/Flaunt/assets/images/products/portfolio-details-3.jpg" className="img-fluid" alt="" />
                                <div className="portfolio-info">
                                    <h4>Marc Jacob</h4>
                                    <p>Decadence</p>
                                    <div className="portfolio-links">
                                        <a href="https://webpage.pace.edu/np57411n/cs641/Project1/Flaunt/assets/images/products/portfolio-details-3.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 3"><i className="bx bx-plus"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 portfolio-item filter-makeup">
                            <div className="portfolio-wrap">
                                <img src="https://webpage.pace.edu/np57411n/cs641/Project1/Flaunt/assets/images/products/image6.jpg" className="img-fluid" alt="" />
                                <div className="portfolio-info">
                                    <h4>Marc Jacob</h4>
                                    <p>Decadence</p>
                                    <div className="portfolio-links">
                                        <a href="https://webpage.pace.edu/np57411n/cs641/Project1/Flaunt/assets/images/products/image6.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 3"><i className="bx bx-plus"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Fragrance */}
                        <div className="col-lg-4 col-md-6 portfolio-item filter-fragrance">
                            <div className="portfolio-wrap">
                                <img src="https://webpage.pace.edu/np57411n/cs641/Project1/Flaunt/assets/images/products/fragrance1.png" className="img-fluid" alt="" />
                                <div className="portfolio-info">
                                    <h4>Marc Jacob</h4>
                                    <p>Decadence</p>
                                    <div className="portfolio-links">
                                        <a href="https://webpage.pace.edu/np57411n/cs641/Project1/Flaunt/assets/images/products/fragrance1.png" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 3"><i className="bx bx-plus"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 portfolio-item filter-fragrance">
                            <div className="portfolio-wrap">
                                <img src="https://webpage.pace.edu/np57411n/cs641/Project1/Flaunt/assets/images/products/fragrance2.png" className="img-fluid" alt="" />
                                <div className="portfolio-info">
                                    <h4>Gentlemen</h4>
                                    <p>Givenchy</p>
                                    <div className="portfolio-links">
                                        <a href="https://webpage.pace.edu/np57411n/cs641/Project1/Flaunt/assets/images/products/fragrance2.png" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 3"><i className="bx bx-plus"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 portfolio-item filter-fragrance">
                            <div className="portfolio-wrap">
                                <img src="https://webpage.pace.edu/np57411n/cs641/Project1/Flaunt/assets/images/products/fragrance3.png" className="img-fluid" alt="" />
                                <div className="portfolio-info">
                                    <h4>Gentlemen</h4>
                                    <p>Givenchy</p>
                                    <div className="portfolio-links">
                                        <a href="https://webpage.pace.edu/np57411n/cs641/Project1/Flaunt/assets/images/products/fragrance3.png" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 3"><i className="bx bx-plus"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 portfolio-item filter-fragrance">
                            <div className="portfolio-wrap">
                                <img src="https://webpage.pace.edu/np57411n/cs641/Project1/Flaunt/assets/images/products/fragrance4.png" className="img-fluid" alt="" />
                                <div className="portfolio-info">
                                    <h4>YvesSaintLaurent</h4>
                                    <div className="portfolio-links">
                                        <a href="https://webpage.pace.edu/np57411n/cs641/Project1/Flaunt/assets/images/products/fragrance4.png" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 3"><i className="bx bx-plus"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 portfolio-item filter-fragrance">
                            <div className="portfolio-wrap">
                                <img src="https://webpage.pace.edu/np57411n/cs641/Project1/Flaunt/assets/images/products/fragrance5.png" className="img-fluid" alt="" />
                                <div className="portfolio-info">
                                    <h4>CK</h4>
                                    <p>be</p>
                                    <div className="portfolio-links">
                                        <a href="https://webpage.pace.edu/np57411n/cs641/Project1/Flaunt/assets/images/products/fragrance5.png" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 3"><i className="bx bx-plus"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 portfolio-item filter-fragrance">
                            <div className="portfolio-wrap">
                                <img src="https://webpage.pace.edu/np57411n/cs641/Project1/Flaunt/assets/images/products/fragrance6.png" className="img-fluid" alt="" />
                                <div className="portfolio-info">
                                    <h4>Miss Dior</h4>
                                    <p>Eau De Parfum</p>
                                    <div className="portfolio-links">
                                        <a href="https://webpage.pace.edu/np57411n/cs641/Project1/Flaunt/assets/images/products/fragrance6.png" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 3"><i className="bx bx-plus"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </section>
            {/* End Portfolio Section  */}

            {/* Brand Section */}
            <section id="newBrand" className="contact">
                <div className="container">
                    <div className="section-title">
                        <h2>New Brands</h2>
                    </div>
                    <div className="row">

                        <div className="col-lg-4 col-md-4 col-sm-12 mt-2">
                            <img src="https://webpage.pace.edu/np57411n/cs641/Project1/Flaunt/assets/images/products/image1.jpg" className="img-fluid p-2" />
                            <img src="https://webpage.pace.edu/np57411n/cs641/Project1/Flaunt/assets/images/products/image2.jpg" className="img-fluid p-2" />
                        </div>

                        <div className="col-lg-4 col-md-4 col-sm-12 mt-2">
                            <img src="https://webpage.pace.edu/np57411n/cs641/Project1/Flaunt/assets/images/products/image3.jpg" className="img-fluid p-2" />
                            <img src="https://webpage.pace.edu/np57411n/cs641/Project1/Flaunt/assets/images/products/image6.jpg" className="img-fluid p-2" />
                        </div>

                        <div className="col-lg-4 col-md-4 col-sm-12 mt-2">
                            <img src="https://webpage.pace.edu/np57411n/cs641/Project1/Flaunt/assets/images/products/verticalImage.png" className="img-fluid p-2" />
                        </div>

                    </div>
                </div>
            </section>
            {/* Brand Section Ends */}

            {/* Influencer Section */}
            <section id="portfolio" className="portfolio">
                <div className="container" data-aos="fade-up">

                    <div className="section-title">
                        <h2>Influencers</h2>
                        <p>Hey! Wanna know why Flaunt has the best offered products?</p>
                        <p>We have a list of collaborations with the top influencers that not are our brand partners but also, a part of Flaunts customerbase.</p>
                    </div>

                    <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="200">

                        <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                            <div className="portfolio-wrap">
                                <img src="https://webpage.pace.edu/np57411n/cs641/Project1/Flaunt/assets/images/products/image4.jpg" className="img-fluid" alt="" />
                                <div className="portfolio-info">
                                    <h4>V Adams</h4>
                                    <p>Instagram</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                            <div className="portfolio-wrap">
                                <img src="https://webpage.pace.edu/np57411n/cs641/Project1/Flaunt/assets/images/products/image7.png" className="img-fluid" alt="" />
                                <div className="portfolio-info">
                                    <h4>NeoDynamics</h4>
                                    <p>Youtube</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                            <div className="portfolio-wrap">
                                <img src="https://webpage.pace.edu/np57411n/cs641/Project1/Flaunt/assets/images/products/image8.jpg" className="img-fluid" alt="" />
                                <div className="portfolio-info">
                                    <h4>V Adams</h4>
                                    <p>Instagram</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            {/* Influencer Section End */}
        </div>
    );
};

export default Home;