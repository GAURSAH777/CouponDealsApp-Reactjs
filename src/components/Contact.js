import React, { useState } from 'react';

const Contact = () => {

    const [data, setData] = useState({
        fullname: '',
        phone: '',
        email: '',
        msg: '',
    })

    const [formErrors, setFormErrors] = useState({});

    const InputEvent = (e) => {
        const { name, value } = e.target;

        setData((preVal) => {
            return {
                ...preVal,
                [name]: value,
            }
        })
    }

    const formSubmit = (e) => {
        e.preventDefault();
        let errors = {};
        if (!data.fullname) {
            errors["fullnameErr"] = "Name is required";
        }
        if (!data.phone) {
            errors["phoneErr"] = "Phone Number is required";
        }
        if (!data.email) {
            errors["emailErr"] = "Email is required";
        }
        if (!data.msg) {
            errors["msgErr"] = "Message is required";
        }
        setFormErrors(errors);
        const noErrors = Object.keys(errors).length === 0;
        if (noErrors) {
        alert(`My name is ${data.fullname}. My mobile no. is ${data.phone} and email address is ${data.email}. ${data.msg}`)
        }
    }

    return (
        <>
            <div className="my-5">
                <h1 className="text-center"> Contact Us</h1>
            </div>
            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto ">
                        <form onSubmit={e => formSubmit(e)}>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label" required>Full Name</label>
                                <input type="text" class="form-control" id="exampleFormControlInput1" name="fullname" value={data.fullname} onChange={e=>InputEvent(e)} placeholder="Enter your full name" />
                                {formErrors.fullnameErr && (
                                    <div style={{ color: "red", paddingBottom: 10 }}>
                                        {formErrors.fullnameErr}
                                    </div>
                                )}
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label" required>Phone no.</label>
                                <input type="number" class="form-control" id="exampleFormControlInput1" name="phone" value={data.phone} onChange={e=>InputEvent(e)} placeholder="Mobile number" />
                                {formErrors.phoneErr && (
                                    <div style={{ color: "red", paddingBottom: 10 }}>
                                        {formErrors.phoneErr}
                                    </div>
                                )}
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label" required>Email address</label>
                                <input type="email" class="form-control" id="exampleFormControlInput1" name="email" value={data.email} onChange={e=>InputEvent(e)} placeholder="Enter your email" />
                                {formErrors.emailErr && (
                                    <div style={{ color: "red", paddingBottom: 10 }}>
                                        {formErrors.emailErr}
                                    </div>
                                )}
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" name="msg" value={data.msg} onChange={e=>InputEvent(e)}></textarea>
                                {formErrors.msgErr && (
                                    <div style={{ color: "red", paddingBottom: 10 }}>
                                        {formErrors.msgErr}
                                    </div>
                                )}
                            </div>
                            <div class="col-12">
                                <button class="btn btn-outline-primary" type="submit">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Contact;