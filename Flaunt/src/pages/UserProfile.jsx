import React from 'react'
import { useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const UserProfile = () => {
    const {email} = useParams();
  return (
    <div>
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
        
        <div class="row">
          <aside class="col-lg-3 col-xl-3">
            {/* <!--  COMPONENT MENU LIST  --> */}
            <nav class="nav flex-lg-column nav-pills mb-4">
              <a class="nav-link active" href="#">Account main</a>
              <a class="nav-link" href="#">New orders</a>
              <a class="nav-link" href="#">Orders history</a>
              <a class="nav-link" href="#">My wishlist</a>
              <a class="nav-link" href="#">Transactions</a>
              <a class="nav-link" href="#">Profile setting</a>
              <a class="nav-link" href="#">Log out</a>
            </nav>
            {/* <!--   COMPONENT MENU LIST END .//   --> */}
          </aside>
          <main class="col-lg-9  col-xl-9">
            <article class="card">
            <div class="content-body">
        
            <figure class="itemside align-items-center">
              <div class="aside">
                <span class="bg-gray icon-md rounded-circle">
                  <img src="assets/images/avatars/avatar1.jpg" class="icon-md rounded-circle" />
                </span>
              </div>
              <figcaption class="info">
                <h6 class="title">Mr. Jackson Mike</h6>
                <p>Email: myusername@gmail.com, Phone: +1234567890988 
                  <a href="#" class="px-2"><i class="fa fa-pen"></i></a>
                </p>
              </figcaption>
            </figure>
        
            <hr />
        
            <div class="row g-2 mb-3"> 
              <div class="col-md-6">
                <article class="box bg-light">
                  <b class="mx-2 text-muted"><i class="fa fa-map-marker-alt"></i></b> 
                  United States, 3601 Old Capitol Trail, Unit A-7, Suite
                </article>
              </div> 
              <div class="col-md-6">
                <article class="box  bg-light">
                  <b class="mx-2 text-muted"><i class="fa fa-map-marker-alt"></i></b> 
                   Moscow city, Street name, Building lenin, House 77
                </article>
              </div> 
            </div> 
        
            <a href="#" class="btn btn-light"> <i class="me-2 fa fa-plus"></i> Add new address </a>
        
            <hr class="my-4" />
        
            <h5 class="card-title"> Your orders </h5> 
            {/* <!--  ======== item order ======== --> */}
            <article class="card border-primary mb-4">
            <div class="card-body">
              <header class="d-lg-flex">
                <div class="flex-grow-1">
                  <h6 class="mb-0">Order ID: 8924 <i class="dot"></i>  
                    <span class="text-success"> Shipped</span>
                  </h6>
                  <span class="text-muted">Date: 16 December 2018</span>
                </div>
                <div>
                  <a href="#" class="btn btn-sm btn-outline-danger">Cancel order</a>
                  <a href="#" class="btn btn-sm btn-primary">Track order</a> 
                </div>
              </header>
              <hr />
              <div class="row">
                <div class="col-lg-4">
                  <p class="mb-0 text-muted">Contact</p>
                  <p class="m-0"> 
                    Mike Johnatan <br />  Phone: 371-295-9131 <br /> Email: info@mywebsite.com </p>
                </div> 
                <div class="col-lg-4 border-start">
                  <p class="mb-0 text-muted">Shipping address</p>
                  <p class="m-0"> United States <br /> 
                    3601 Old Capitol Trail, Unit A-7, Suite 170777, Wilmington, DE 19808   </p>
                </div> 
                <div class="col-lg-4 border-start">
                  <p class="mb-0 text-muted">Payment</p>
                  <p class="m-0">
                    <span class="text-success"> Visa  **** 4216   </span> <br /> 
                    Shipping fee:  $56 <br /> 
                    Total paid:  $456 
                  </p>
                </div> 
              </div>
              <hr />
              <ul class="row">
                <li class="col-xl-4  col-lg-6">
                  <figure class="itemside mb-3">
                    <div class="aside">
                      <img width="72" height="72" src="assets/images/items/1.jpg" class="img-sm rounded border" />
                    </div>
                    <figcaption class="info">
                      <p class="title">T-shirts with multiple colors</p>
                      <strong> 2x = $339.90 </strong>
                    </figcaption>
                  </figure> 
                </li>
                <li class="col-xl-4  col-lg-6">
                  <figure class="itemside mb-3">
                    <div class="aside">
                      <img width="72" height="72" src="assets/images/items/2.jpg" class="img-sm rounded border" />
                    </div>
                    <figcaption class="info">
                      <p class="title">Gaming Headset 32db Black</p>
                      <strong> 2x = $339.90 </strong>
                    </figcaption>
                  </figure>
                </li>
                <li class="col-xl-4  col-lg-6"> 
                  <figure class="itemside mb-3">
                    <div class="aside">
                      <img width="72" height="72" src="assets/images/items/7.jpg" class="img-sm rounded border" />
                    </div>
                    <figcaption class="info">
                      <p class="title">Apple Watch Series 4 Space Gray</p>
                      <strong> 2x = $339.90 </strong>
                    </figcaption>
                  </figure>
                </li>
              </ul>
            </div> 
            </article> 
            {/* <!--  ======== item order .// ======== --> */}
        
            {/* <!--  ======== item order ======== --> */}
            <article class="card border-primary">
            <div class="card-body">
              <header class="d-lg-flex">
                <div class="flex-grow-1">
                  <h6 class="mb-0">Order ID: 9088 
                    <i class="dot"></i>  
                    <span class="text-danger"> Pending </span>
                  </h6>
                  <span class="text-muted">Date: 16 December 2018</span> 
                </div>
                <div>
                  <a href="#" class="btn btn-sm btn-outline-danger">Cancel order</a>
                  <a href="#" class="btn btn-sm btn-primary">Track order</a> 
                </div>
              </header>
              <hr />
              <div class="row">
                <div class="col-lg-4">
                  <p class="mb-0 text-muted">Contact</p>
                  <p class="m-0"> 
                    Mike Johnatan <br />  Phone: 371-295-9131 <br /> Email: info@mywebsite.com </p>
                </div> 
                {/* <!-- col.// --> */}
                <div class="col-lg-4 border-start">
                  <p class="mb-0 text-muted">Shipping address</p>
                  <p class="m-0"> United States <br /> 
                    600 Markley Street, Suite 170777 Port Reading, NJ 07064</p>
                </div>
                 {/* <!-- col.// --> */}
                <div class="col-lg-4 border-start">
                  <p class="mb-0 text-muted">Payment</p>
                  <p class="m-0">
                    <span class="text-success"> Visa  **** 4216   </span> <br /> 
                    Shipping fee:  $56 <br /> 
                    Total paid:  $456 
                  </p>
                </div> <hr />
                {/* <!-- col.// --> */}
              </div> 
              {/* <!-- row.// --> */}
              <hr />
              <ul class="row">
                <li class="col-xl-4  col-lg-6">
                  <figure class="itemside mb-3">
                    <div class="aside">
                      <img width="72" height="72" src="assets/images/items/10.jpg" class="img-sm rounded border" />
                    </div>
                    <figcaption class="info">
                      <p class="title">T-shirts with multiple colors</p>
                      <strong> 2x = $339.90 </strong>
                    </figcaption>
                  </figure> 
                </li>
                <li class="col-xl-4 col-lg-6">
                  <figure class="itemside mb-3">
                    <div class="aside">
                      <img width="72" height="72" src="assets/images/items/11.jpg" class="img-sm rounded border" />
                    </div>
                    <figcaption class="info">
                      <p class="title">Gaming Headset 32db Black</p>
                      <strong> 2x = $339.90 </strong>
                    </figcaption>
                  </figure>
                </li>
              </ul>
            </div>
            </article> 
            {/* <!--  ======== item order ======== .// --> */}
            </div> 
            </article> 
          </main>
        </div>
        
        <br /><br />
        
        
        </div> 
        </section>
        {/* <!-- ============== SECTION CONTENT END// ============== --> */}
        {/* </article> */}
    </div>
  )

}

export default UserProfile