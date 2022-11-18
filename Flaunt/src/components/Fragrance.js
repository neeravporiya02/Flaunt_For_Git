import React from 'react'
import './styles.css'
import { useParams, Link } from "react-router-dom";
import {  Badge, Button, Dropdown, FormControl } from 'react-bootstrap';
import DropdownToggle from 'react-bootstrap/esm/DropdownToggle'
import { AiFillDelete } from 'react-icons/ai'
import {FaShoppingCart} from 'react-icons/fa'
import { useState } from "react"
// -- Import components
import { CartState } from '../context/Context'
import SingleProduct from './SingleProduct';
import Filters from './Filters';

const Fragrance = () => {

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

    const {
      state: {products, cart},
      dispatch,
      productDispatch,
      productState: {byStock, byFastDelivery, sort, byRating, searchQuery},
    } = CartState()
    
    const transformProducts = () => {
      let sortedProducts = products;
  
      if(sort){
        sortedProducts = sortedProducts.sort((a,b) => 
          sort ==="lowToHigh"? a.price - b.price : b.price - a.price
        )}
  
  
      if(!byStock){
        sortedProducts = sortedProducts.filter((prod) => prod.inStock);
      }
  
      if(byFastDelivery){
        sortedProducts = sortedProducts.filter((prod) => prod.fastDelivery);
      }
  
      if(byRating){
        sortedProducts = sortedProducts.filter(
          (prod) => prod.ratings >= byRating
        );
      }
  
      if(searchQuery){
        sortedProducts = sortedProducts.filter(
          (prod) => prod.name.toLowerCase().includes(searchQuery)
        );
      }
      
      return sortedProducts;
    }
    
    return (
        <div>
             {/* header */}
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
                onChange={(e) => {
                    productDispatch({
                        type:"FILTER_BY_SEARCH",
                        payload: e.target.value,
                    })
                }}
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
                <Filters/>
                <div className='productContainer'>
                {
                    transformProducts().map((prod) => {
                    return <SingleProduct prod = {prod} key={prod.id} />
                    })
                }
                </div>
            </div>
      </div>
    )
  }
  
  export default Fragrance
