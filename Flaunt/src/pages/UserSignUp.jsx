import React from 'react';
import useForm from './useForm';
import validate from './validateInfo';
import './UserRegistration.css'
import { Link } from 'react-router-dom';

const UserSignUp = () => {
    const { handleChange, values,handleSignUpSubmit, errors,status } = useForm(validate);
    return (
        <div>
            <section style={{ float: 'left' }}>
                <img src='/images/banner2.png' alt='BannerImg'></img>
            </section>
            <section>
                <h2>User Registration</h2>
                <form className="Form" onSubmit={handleSignUpSubmit}>
                    <section className=" bg-light" style={{ minHeight: '90vh', marginTop: '-90px' }}>
                        <div className="card shadow mx-auto" style={{ maxWidth: "400px", marginTop: "40px" }}>
                            <div className="card-body">

                                <div className="row gx-2 formInputs">
                                    <div className="col-6 mb-3">
                                        <label htmlFor='firstName' className="form-label">First name</label>

                                        <input
                                            type="text"
                                            id='firstName'
                                            className="form-control"
                                            name="firstName"
                                            placeholder='First Name'
                                            value={values.firstName}
                                            onChange={handleChange}
                                        />
                                        {errors.firstName && <p>{errors.firstName}</p>}
                                    </div>
                                    <div className="col-6 mb-3 formInputs">
                                        <label htmlFor='lastName' className="form-label">Last name</label>

                                        <input
                                            type="text"
                                            id='lastName'
                                            className="form-control"
                                            name="lastName"
                                            placeholder='Last Name'
                                            value={values.lastName}
                                            onChange={handleChange}
                                        />
                                        {errors.lastName && <p>{errors.lastName}</p>}
                                    </div>
                                </div>
                                <div className="mb-3 formInputs">
                                    <label htmlFor='email' className="form-label">Email</label>
                                    <input
                                        id='email'
                                        type="email"
                                        className="form-control"
                                        name="email"
                                        placeholder="Email"
                                        value={values.email}
                                        onChange={handleChange}
                                    />
                                    {errors.email && <p>{errors.email}</p>}
                                </div>
                                <div className="mb-3 formInputs">
                                    <label htmlFor='phone' className="form-label">Phone</label>
                                    <div className="row">
                                        <div> <input
                                            id='phone'
                                            name='phone'
                                            className="form-control"
                                            placeholder="Phone"
                                            type="number"
                                            value={values.phone}
                                            onChange={handleChange}
                                        />
                                            {errors.phone && <p>{errors.phone}</p>}
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-3 formInputs">
                                    <label htmlFor='password' className="form-label">Password</label>
                                    <input
                                        id='password'
                                        type="password"
                                        className="form-control"
                                        name="password"
                                        placeholder="Password"
                                        value={values.password}
                                        onChange={handleChange}
                                    />
                                    {errors.password && <p>{errors.password}</p>}
                                </div>
                                <div className="mb-3 formInputs">
                                    <label htmlFor='confirmPassword' className="form-label">Confirm Password</label>
                                    <input
                                        id='confirmPassword'
                                        type="password"
                                        className="form-control"
                                        name="confirmPassword"
                                        placeholder="Confirm Password"
                                        value={values.confirmPassword}
                                        onChange={handleChange}
                                    />
                                    {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
                                </div>
                                <div className="mb-4">
                                    
                                    {
                                        status 
                                        ? <Link to={`/login`}> <button type="submit" className="btn btn-primary w-100"> Sign Up </button> </Link> 
                                        :<button type="submit" className="btn btn-primary w-100"> Sign Up </button>
                                    }
                                        
                                    
                                </div>

                                <hr />
                                <p className="text-center mb-2">Already have account? Sign in</p>
                            </div>
                        </div>
                    </section>
                </form>
            </section>
        </div>
    )
}

export default UserSignUp