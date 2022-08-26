import axios from 'axios';
import React, { useState } from 'react'

const SmsMessaging = () => {
    const [sms, setSms] = useState({
        "to": "",
        "message": ""

    })
    const [formErrors, setFormErrors] = useState({});
    const onChange = e => {
        setSms(sms => ({ ...sms, [e.target.name]: e.target.value }));
    };
    const sendSms = e => {
        e.preventDefault();
        //validation login form
        let errors = {};
        if (!sms.to) {
            errors["toErr"] = "Recipient mobile number is required"
        }
        if (!sms.message) {
            errors["messageErr"] = "Message is required"
        }


        setFormErrors(errors);
        const noErrors = Object.keys(errors).length === 0;
        if (noErrors) {
            const payload = {
                to: sms.to,
                message: sms.message,

            }


            axios.post(`http://localhost:9001/sms`, payload)
                .then(response => {
                    console.log(response.data);
                    alert('Message Sent Successfully')
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
                       
                        <div className="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">
                            <form style={{ width: '23rem' }}>
                                <h3 className="fw-normal mb-3 pb-3" style={{ letterSpacing: '1px' }}>Send SMS</h3>

                                <div className="form-outline mb-4">
                                    <label className="form-label" htmlFor="form2Example18">Recipient Mobile Number</label>
                                    <input type="text" id="form2Example18" name="to" className="form-control form-control-lg"
                                        value={sms.to}
                                        onChange={onChange}
                                    />
                                    {
                                        formErrors.toErr && <div style={{ color: "red", paddingBottom: 10 }}>{formErrors.toErr}</div>
                                    }
                                </div>

                                <div className="form-outline mb-4">
                                    <label className="form-label" htmlFor="form2Example28">Message</label>
                                    <input type="text" id="form2Example28" name='message' className="form-control form-control-lg"
                                        value={sms.message}
                                        onChange={onChange}
                                    />
                                    {
                                        formErrors.messageErr && <div style={{ color: "red", paddingBottom: 10 }}>{formErrors.messageErr}</div>
                                    }
                                </div>

                               

                                <div className="pt-1 mb-4">
                                    <button className="btn btn-info btn-lg btn-block" type="button" onClick={sendSms}>Send</button>
                                </div>
                        
                            </form>
                        </div>
                    </div>
                    <div className="col-sm-6 px-0 d-none d-sm-block">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXOnD2Cpc6eBSG7dArHzvY416eocIxuplthg&usqp=CAU"
                            alt="Login img" className="w-100 vh-100" style={{ objectFit: 'cover', objectPosition: 'left' }} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SmsMessaging