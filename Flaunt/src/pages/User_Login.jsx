import React from "react";

const UserLogin = () => {
    return (
        <section className="padding-y bg-light" style={{ minHeight: "90vh" }}>
            <div className="container">
                <div className="card shadow mx-auto" style={{ maxWidth: "400px", marginTop: "40px" }}>
                    <div className="card-body">
                        <h4 className="card-title mb-4">Login</h4>
                        <form>
                            <div className="mb-3">
                                <label className="form-label">Email</label>
                                <input className="form-control" placeholder="Type email" type="text" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Password</label>
                                <input className="form-control" placeholder="Type Password." type="password" />
                            </div>
                            <div className="mb-4">
                                <button type="submit" className="btn btn-primary w-100"> Login  </button>
                            </div>
                            <div className="mb-3">
                                <a>Forgot Password</a>
                            </div>
                        </form>
                        <hr />
                        <p className="text-center mb-2">Don't have an account? <a href="user_registration.html">Sign up</a></p>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default UserLogin;