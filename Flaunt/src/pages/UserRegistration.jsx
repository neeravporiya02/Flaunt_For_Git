import React, { Component } from 'react';

import { FormErrors } from '../FormErrors';

class Form1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            repeatpassword:'',
            terms:'',
            formErrors: { email: '', password: '', repeatpassword: ''},
            emailValid: false,
            passwordValid: false,
            repeatpasswordValid:false,
            termsValid:false,
            formValid: false
        }
    };

    handleUserInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value },
            () => { this.validateField(name, value) });
    }

    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let emailValid = this.state.emailValid;
        let passwordValid = this.state.passwordValid;
        let repeatpasswordValid = this.state.repeatpasswordValid;

        switch (fieldName) {
            case 'email':
                emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                fieldValidationErrors.email = emailValid ? '' : ' is invalid';
                break;
            case 'password':
                passwordValid = value.length >= 8;
                fieldValidationErrors.password = passwordValid ? '' : ' is too short';
                break;
            case 'repeatpassword':
                repeatpasswordValid = value.match(passwordValid);
                fieldValidationErrors.repeatpassword = repeatpasswordValid ? '' : ' should be equal to Password';
                break;
            default:
                break;
        }
        this.setState({
            formErrors: fieldValidationErrors,
            emailValid: emailValid,
            passwordValid: passwordValid,
            repeatpasswordValid: repeatpasswordValid
        }, this.validateForm);
    }

    validateForm() {
        this.setState({ formValid: this.state.emailValid && this.state.passwordValid && this.state.repeatpasswordValid });
    }

    errorClass(error) {
        return (error.length === 0 ? '' : 'has-error');
    }

    render() {
        return (
            <form className="Form">
                <section className="padding-y bg-light" style={{ minHeight: '90vh' }}>
                    <div className="container">
                        <div className="panel panel-default">
                            <FormErrors formErrors={this.state.formErrors} />
                        </div>
                        <div className="card shadow mx-auto" style={{ maxWidth: "400px", marginTop: "40px" }}>
                            <div className="card-body">
                                <h4 className="card-title mb-4">User Registration</h4>
                                    <div className="row gx-2">
                                        <div className="col-6 mb-3">
                                            <label className="form-label">First name</label>
                                            <input type="text" className="form-control" name="fname" placeholder='First Name' />
                                        </div>
                                        <div className="col-6 mb-3">
                                            <label className="form-label">Last name</label>
                                            <input type="text" className="form-control" name="lname" placeholder='Last Name' />
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Email</label>
                                        <input type="email" required className="form-control" name="email"
                                            placeholder="Email"
                                            value={this.state.email}
                                            onChange={this.handleUserInput} />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Phone</label>
                                        <div className="row gx-2">
                                            <div className="col-2"> <input className="form-control" value="+1" type="text" /> </div>
                                            <div className="col-10"> <input className="form-control" placeholder="Phone" type="number" /> </div>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Create password</label>
                                        <input type="password" className="form-control" name="password"
                                            placeholder="Password"
                                            value={this.state.password}
                                            onChange={this.handleUserInput} />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Confirm password</label>
                                        <input type="password" className="form-control" name="repeatpassword"
                                            placeholder="Confirm Password"
                                            value={this.state.repeatpassword}
                                            onChange={this.handleUserInput} />
                                    </div>
                                    <div className="mb-4">
                                        <button type="submit" className="btn btn-primary w-100" disabled={!this.state.formValid}> Sign Up  </button>
                                    </div>
                                    
                                <hr />
                                <p className="text-center mb-2">Already have account? <a href="user_login.html">Sign in</a></p>
                            </div>
                        </div>
                    </div>
                </section>
                </form>

        )
    }
}

export default Form1;