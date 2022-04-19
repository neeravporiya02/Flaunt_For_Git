import React from "react";


const Header = () => {
    return (
        <div className="container-fluid p-3">
            <div className="row">
                <div className="col-md-3 col-sm-6">
                    <a className="navbar-brand" href="#">
                        <span className=""><img alt='Flaunt Logo' src="http://webpage.pace.edu/np57411n/cs641/Project1/Flaunt/assets/images/Flogo.png" className="m-2" width="150px" /> </span>
                    </a>
                </div>
                <div className="col-md-4 col-sm-4 ms-auto mt-2">
                    <input className="form-control me-2" type="text" placeholder="Search" />
                </div>

                <div className="order-lg-last col-lg-5 col-sm-8 col-8 ms-auto">
                    <div className="float-end">
                        <a href="user_login.html" className="btn btn-light">
                            <i className="fa fa-user"></i>  <span className="ms-1 d-none d-sm-inline-block">Sign in</span>
                        </a>
                        <a href="#" className="btn btn-light">
                            <i className="fa fa-heart"></i>  <span className="ms-1 d-none d-sm-inline-block">Wishlist</span>
                        </a>
                        <a data-bs-toggle="offcanvas" href="#offcanvas_cart" className="btn btn-light">
                            <i className="fa fa-shopping-cart"></i> <span className="ms-1">My cart </span>
                        </a>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Header;