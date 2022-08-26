import axios from 'axios';
import React, { useState } from 'react'

const Mailer = () => {
    const [mail, setMail] = useState({
        "recipient": "",
        "msgBody": "",
        "subject": "",
        "attachment": ""
    })

    const [formErrors, setFormErrors] = useState({});

    const onChange = e => {
        setMail(mail => ({ ...mail, [e.target.name]: e.target.value }));
    };

    const sendMail = e => {
        e.preventDefault();
        //validation login form
        let errors = {};
        if (!mail.recipient) {
            errors["recipientErr"] = "Recipient is required"
        }
        if (!mail.subject) {
            errors["subjectErr"] = "Subject is required"
        }
        if (!mail.msgBody) {
            errors["msgBodyErr"] = "Message Body is required"
        }
        // if (!mail.attachment) {
        //     errors["attachmentErr"] = "Attachment is required"
        // }

        setFormErrors(errors);
        const noErrors = Object.keys(errors).length === 0;
        if (noErrors) {
            const payload = {
                recipient: mail.recipient,
                msgBody: mail.msgBody,
                subject: mail.subject
                // attachment: mail.attachment

            }


            axios.post(`http://localhost:9000/sendMail`, payload)
                .then(response => {
                    console.log(response.data);
                    alert('Mail Sent Successfully')
                }).catch(error => {
                    console.log(error.response);
                    alert("Something went wrong");
                })
        }
    }

    return (
        <section className="vh-100">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-6 text-black">
                        {/* <div className="px-5 ms-xl-4">
                            <i className="fas fa-crow fa-2x me-3 pt-5 mt-xl-4" style={{ color: '#709085' }} />
                            <span className="h1 fw-bold mb-0">Customer</span>
                        </div> */}
                        <div className="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">
                            <form style={{ width: '23rem' }}>
                                <h3 className="fw-normal mb-3 pb-3" style={{ letterSpacing: '1px' }}>Send Mail</h3>

                                <div className="form-outline mb-4">
                                    <label className="form-label" htmlFor="form2Example18">Recipient</label>
                                    <input type="text" id="form2Example18" name="recipient" className="form-control form-control-lg"
                                        value={mail.recipient}
                                        onChange={onChange}
                                    />
                                    {
                                        formErrors.recipientErr && <div style={{ color: "red", paddingBottom: 10 }}>{formErrors.recipientErr}</div>
                                    }
                                </div>

                                <div className="form-outline mb-4">
                                    <label className="form-label" htmlFor="form2Example28">Subject</label>
                                    <input type="text" id="form2Example28" name='subject' className="form-control form-control-lg"
                                        value={mail.subject}
                                        onChange={onChange}
                                    />
                                    {
                                        formErrors.subjectErr && <div style={{ color: "red", paddingBottom: 10 }}>{formErrors.subjectErr}</div>
                                    }
                                </div>
                                
                                <div className="form-outline mb-4">
                                    <label className="form-label" htmlFor="form2Example28">Message Body</label>
                                    <input type="text" id="form2Example28" name='msgBody' className="form-control form-control-lg"
                                        value={mail.msgBody}
                                        onChange={onChange}
                                    />
                                    {
                                        formErrors.msgBodyErr && <div style={{ color: "red", paddingBottom: 10 }}>{formErrors.msgBodyErr}</div>
                                    }
                                </div>

                                <div className="pt-1 mb-4">
                                    <button className="btn btn-info btn-lg btn-block" type="button" onClick={sendMail}>Send</button>
                                </div>
                                {/* <p className="small mb-5 pb-lg-2"><a className="text-muted" href="#!">Forgot password?</a></p> */}
                                {/* <p>Don't have an account? <a href="/register" className="link-info">Register here</a></p> */}
                            </form>
                        </div>
                    </div>
                    <div className="col-sm-6 px-0 d-none d-sm-block">
                        <img src="https://cdn2.vectorstock.com/i/1000x1000/62/41/background-with-mail-envelopes-vector-1616241.jpg"
                            alt="Login img" className="w-100 vh-100" style={{ objectFit: 'cover', objectPosition: 'left' }} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Mailer