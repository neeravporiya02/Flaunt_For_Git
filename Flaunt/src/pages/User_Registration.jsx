import React from "react";

const UserRegistration = () => {
    return (
        <section class="padding-y bg-light" style={{minHeight:'90vh'}}>
            <div class="container">
                <div class="card shadow mx-auto" style={{maxWidth:"400px", marginTop:"40px;"}}>
                    <div class="card-body">
                        <h4 class="card-title mb-4">User Registration</h4>
                        <form>
                            <div class="row gx-2">
                                <div class="col-6 mb-3">
                                    <label class="form-label">First name</label>
                                    <input type="text" class="form-control" name="lorem" />
                                </div>
                                <div class="col-6 mb-3">
                                    <label class="form-label">Last name</label>
                                    <input type="text" class="form-control" name="lorem" />
                                </div>
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Email</label>
                                <input class="form-control" placeholder="Type email" type="text" />
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Phone</label>
                                <div class="row gx-2">
                                    <div class="col-4"> <input class="form-control" value="+998" type="text" /> </div>
                                    <div class="col-8"> <input class="form-control" placeholder="Phone" type="text" /> </div>
                                </div>
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Create password</label>
                                <input class="form-control" placeholder="At least 6 characters." type="password" />
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Repeat password</label>
                                <input class="form-control" placeholder="" type="password" />
                            </div>
                            <div class="mb-4">
                                <button type="submit" class="btn btn-primary w-100"> Login  </button>
                            </div>

                            <div class="mb-4">
                                <label class="form-check">
                                    <input class="form-check-input" type="checkbox" checked value="" />
                                    <span class="form-check-label"> I agree with Terms and Conditions </span>
                                </label>
                            </div>
                        </form>
                        <hr />
                        <p class="text-center mb-2">Already have account? <a href="user_login.html">Sign in</a></p>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default UserRegistration;