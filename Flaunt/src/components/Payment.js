import { useEffect, useState } from 'react';
import { Button, Col, Form, ListGroup, Row, Image } from 'react-bootstrap';
import {  Badge, Dropdown, FormControl } from 'react-bootstrap';
import { AiFillDelete } from 'react-icons/ai';
import DropdownToggle from 'react-bootstrap/esm/DropdownToggle'
import {FaShoppingCart, FaCcVisa, FaCcMastercard, FaCcDiscover} from 'react-icons/fa'
import { CartState } from '../context/Context'
import { Rating } from './Rating';
import { useParams, Link } from "react-router-dom";
import './Payment.css'

const Payment = () => {

    // const { email } = useParams();
    const {email} = useParams();

    let [email1, setEmail1] = useState();

    email1 = "np57411n@pace.edu";
    console.log(email);

    if(email === undefined || email === ''){
        
        setEmail1 = email1;
    }
    else{
        setEmail1 = email
    }

    // const {
    //   state: {products, cart},
    //   dispatch,
    //   productDispatch,
    //   productState: {byStock, byFastDelivery, sort, byRating, searchQuery},
    // } = CartState()
    
    

    const {state:{cart},
  dispatch,
      } = CartState();

    const [total, setTotal] = useState();
//     const {state:{cart},
//   dispatch,
//       } = CartState();

        // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    setTotal(cart.reduce((acc,curr) => acc + Number(curr.price) * curr.qty,0));
  }, [cart]);

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
                    {/* <input className="form-control me-2" type="text" placeholder="Search" /> */}
                    <FormControl style={{width:500}}
                placeholder='search a product'
                className='m-auto'
                // onChange={(e) => {
                //     productDispatch({
                //         type:"FILTER_BY_SEARCH",
                //         payload: e.target.value,
                //     })
                // }}
                >
                </FormControl>
                </div>

                <div className="order-lg-last col-lg-5 col-sm-8 col-8 ms-auto">
                    <div className="float-end dropdown">
                        {
                            setEmail1 ? 
                            <div>
                            <a className="btn btn-light dropdown dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                            Hi {setEmail1}
                        </a>
                        <ul className="dropdown-menu" style={{zIndex:"1"}} aria-labelledby="dropdownMenuLink">
                            <li><a className="dropdown-item" href="#">Profile</a></li>
                            <li><a className="dropdown-item" href="#">Orders</a></li>
                            <li><a className="dropdown-item" href="#">Sign out</a></li>
                        </ul>
                        </div>
                            : <Link to="/login" className="btn btn-light btnSpacing"><i className="fa fa-user"></i>  <span className="ms-1 d-none d-sm-inline-block"> </span> Sign in </Link>
                        }
                        
                            

                        {/* <Link to="/register" className="btn btn-light btnSpacing"> <i className="fa fa-heart"></i>  <span className="ms-1 d-none d-sm-inline-block"> </span> Wishlist</Link> */}

                        {/* <a data-bs-toggle="offcanvas" href="#offcanvas_cart" className="btn btn-light">
                            <i className="fa fa-shopping-cart"></i> <span className="ms-1">My cart </span>
                        </a> */}
                        
                    </div>
                    <Dropdown>
                    <DropdownToggle variant='primary'>
                    <FaShoppingCart color='white' fontSize='25px' />
                        <Badge>{cart.length}</Badge>
                    </DropdownToggle>
                    <Dropdown.Menu style={{midWidth:370}}>
                        {cart.length > 0 ? ( 
                        <>
                        {cart.map((prod) => (
                                <span className='cartitem' key={prod.id}>
                                    <img
                                        src={prod.image}
                                        className='cartitemImg'
                                        alt={prod.name}
                                    />
                                    <div className='cartItemDetail'>
                                        <span>{prod.name}</span>
                                        <span>$ {prod.price.split(".")[0]}</span>
                                    </div>
                                    <AiFillDelete
                                        fontSize='20px'
                                        style={{cursor:'pointer'}}
                                        onClick={() =>
                                        dispatch({
                                            type:'REMOVE_FROM_CART',
                                            payload: prod,
                                        })}
                                    />
                                </span>
                            ))
                        }
                        <Link to='/cart'>
                            <Button style={{width:"95%", margin: "0 10px"}}>
                                Go To Cart
                            </Button>
                        </Link>
                        </>
                        ):(
                        <span style={{padding:10}}>Cart is Empty!</span>
                        )}
                    </Dropdown.Menu>
                </Dropdown>
                </div>
            </div>
            </div>
            {/* category navigation bar */}
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

        <div className='home'>
        <div className="wrapper wrapper-content animated fadeInRight">
    <div className="row">
        <div className="col-md-4">
            <div className="payment-card">
                {/* <i className="FaCcVisa payment-icon-big text-success"></i> */}
                <FaCcVisa className=" payment-icon-big text-success"/>
                <h2>
                    **** **** **** 1060
                </h2>
                <div className="row">
                    <div className="col-sm-6">
                        <small>
                            <strong>Expiry date:</strong> 10/27
                        </small>
                    </div>
                    <div className="col-sm-6 text-right">
                        <small>
                            <strong>Name:</strong> Neerav
                        </small>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-md-4">
            <div className="payment-card">
                <FaCcMastercard className=" payment-icon-big text-warning"/>
                <h2>
                    **** **** **** 7002
                </h2>
                <div className="row">
                    <div className="col-sm-6">
                        <small>
                            <strong>Expiry date:</strong> 10/27
                        </small>
                    </div>
                    <div className="col-sm-6 text-right">
                        <small>
                            <strong>Name:</strong> Neerav Poriya
                        </small>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-md-4">
            <div className="payment-card">
                <FaCcDiscover className="fa fa-cc-discover payment-icon-big text-danger" />
                <h2>
                    **** **** **** 3466
                </h2>
                <div className="row">
                    <div className="col-sm-6">
                        <small>
                            <strong>Expiry date:</strong> 10/27
                        </small>
                    </div>
                    <div className="col-sm-6 text-right">
                        <small>
                            <strong>Name:</strong> Neerav
                        </small>
                    </div>
                </div>
            </div>
        </div>

    </div>
    <div className="row">

        <div className="col-lg-12">

            <div className="ibox">
                <div className="ibox-title">
                    Payment method
                </div>
                <div className="ibox-content">

                    <div className="panel-group payments-method" id="accordion">
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <div className="pull-right">
                                    <i className="fa fa-cc-paypal text-success"></i>
                                </div>
                                
                            </div>
                        </div>
                        <div className="panel panel-default">
                            <div id="collapseTwo">
                                <div className="panel-body">

                                    <div className="row">
                                        <div className="col-md-4">
                                            <h2>Summary</h2>
                                            <strong>Product:</strong>: Obsession By Calvin Klein <br />
                                            <strong>Product:</strong>: Obsession By Calvin Klein <br />
                                            <strong>Price:</strong>: <span className="text-navy">$252.90</span>

                                            <p className="m-t">
                                                {/* Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                                nisi ut aliquip ex ea commodo consequat. */}

                                            </p>
                                            <p>
                                                {/* Duis aute irure dolor
                                                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                                nulla pariatur. Excepteur sint occaecat cupidatat. */}
                                            </p>
                                        </div>
                                        <div className="col-md-8">

                                            <form role="form" id="payment-form">
                                                <div className="row">
                                                    <div className="col-xs-12">
                                                        <div className="form-group">
                                                            <label>CARD NUMBER</label>
                                                            <div className="input-group">
                                                                <input type="text" className="form-control" name="Number" placeholder="Valid Card Number" required="" />
                                                                <span className="input-group-addon"><i className="fa fa-credit-card"></i></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-xs-7 col-md-7">
                                                        <div className="form-group">
                                                            <label>EXPIRATION DATE</label>
                                                            <input type="text" className="form-control" name="Expiry" placeholder="MM / YY" required="" />
                                                        </div>
                                                    </div>
                                                    <div className="col-xs-5 col-md-5 pull-right">
                                                        <div className="form-group">
                                                            <label>CV CODE</label>
                                                            <input type="text" className="form-control" name="CVC" placeholder="CVC" required="" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-xs-12">
                                                        <div className="form-group">
                                                            <label>NAME OF CARD</label>
                                                            <input type="text" className="form-control" name="nameCard" placeholder="NAME AND SURNAME" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-xs-12">
                                                        <button className="btn btn-primary" type="submit">Make a payment!</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
               

        </div>
    </div>
  )
}

export default Payment