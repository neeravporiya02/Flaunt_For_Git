import React from 'react';
import { Link } from 'react-router-dom';
import useForm from './useForm';
import validate from './validateInfo';
import './UserLogin.css';
import axios, { Axios } from 'axios';
import { useState } from 'react';
import { Redirect } from 'react-router-dom';



export const UserLogin = () => {
    const { handleChange, values, handleSubmit, errors, message,email,status } = useForm(validate);
    const [getApiData, setApiData] = useState();

  return (
    <form className="Form" onSubmit={handleSubmit}>
                <section className="padding-y bg-light" style={{ minHeight: "90vh" }}>
                    <div className="container">
                        <div className="panel panel-default">
                        </div>
                        <div className="card shadow mx-auto" style={{ maxWidth: "400px", marginTop: "40px" }}>
                            <div className="card-body">
                                <h4 className="card-title mb-4">Login</h4>
                                {/* <form> */}
                                <div className="mb-3">
                                    <label className="form-label">Email</label>
                                    <input type="email"  
                                        className="form-control" 
                                        name="email"
                                        placeholder="Email"
                                        value={values.email}
                                        onChange={handleChange}
                                    />
                                    {errors.email && <p style={{color:'red'}}>{errors.email}</p>}
                                    {/* <label className="form-label" style={{color:'red'}}>Email Field is required</label> */}

                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Password</label>
                                    <input type="password" 
                                        className="form-control" 
                                        name="password"
                                        placeholder="Password"
                                        value={values.password}
                                        onChange={handleChange}
                                    />
                                    {errors.password && <p style={{color:'red'}}>{errors.password}</p>}
                                    {/* <label className="form-label" style={{ color: 'red' }}>(Password should atleast be 8 characters)</label> */}
                                </div>
                                <div className="mb-4">
                                    {
                                        status 
                                        ? <Redirect to={`/home/${email}`}> <button type="submit" className="btn btn-primary w-100"> Login </button> </Redirect> 
                                        :<button type="submit" className="btn btn-primary w-100"> Login </button>
                                    }
                                    
                                </div>
                                <div className="mb-3">
                                    <a href='#'>Forgot Password</a>
                                </div>
                                {/* </form> */}
                                <hr />
                                <p className="text-center mb-2">Don't have an account? <Link to="/register"> Sign Up </Link></p>
                            </div>
                        </div>
                    </div>

                    <div className="message">{message ? <p>{message}</p> : null}</div>
                </section>

            </form>
  )
}


export default UserLogin
