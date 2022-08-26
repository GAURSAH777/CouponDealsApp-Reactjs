import React, { Component } from "react";
import PaymentService from "./PaymentService";
import payment from '../components/images/payment.png'

export default class PaymentOpen extends Component {
    state = {
        amount: "",
    };

    onHandleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    componentDidMount() {
        const script = document.createElement("script");
        script.src = "https://checkout.razorpay.com/v1/checkout.js";
        script.async = true;
        document.body.appendChild(script);
    }

    onSubmit = (e) => {
        e.preventDefault();
        let orderDetail = { amount: this.state.amount };

        PaymentService.createOrder(orderDetail).then((res) => {
            console.log("PAYMENT ORDER RESPONSE", res);
            var options = {
                key: "Enter Key Id", // Enter the Key ID generated from the Dashboard
                amount: res.data.amount,
                currency: "INR",
                name: "Coupon Store",
                //description: "Coupon Purchase",
                // "image": "https://example.com/your_logo",
                order_id: res.data.id,
                handler: function (response) {
                    console.log(response);
                    alert("Payment Successfull !!!");
                    window.location.href = "/home";
                },
                prefill: {
                    name: "",
                    email: "",
                    contact: "",
                },
                notes: {
                    address: "Bangalore",
                },
                theme: {
                    color: "#26a69a",
                },
            };
            var rzp1 = new window.Razorpay(options);
            rzp1.open();
        });
    };

    render() {
        return (


            <section className="vh-100">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-6 text-black">
                            <div className="px-5 ms-xl-4">
                                <i className="fas fa-crow fa-2x me-3 pt-5 mt-xl-4" style={{ color: '#709085' }} />
                                <span className="h1 fw-bold mb-0">.</span>
                            </div>
                            <div className="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">
                                <form style={{ width: '23rem' }}>
                                    <h3 className="fw-normal mb-3 pb-3" style={{ letterSpacing: '1px' }}>Payment</h3>

                                    <div className="form-outline mb-4">
                                        <label className="form-label" htmlFor="form2Example18">Amount</label>
                                        <input type="number" id="form2Example18" name="amount" className="form-control form-control-lg"
                                            value={this.state.amount}
                                            onChange={this.onHandleChange}
                                        />

                                    </div>


                                    <div className="pt-1 mb-4">
                                        <button className="btn btn-info btn-lg btn-block" type="button" onClick={this.onSubmit}>Proceed To Pay</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-sm-6 px-0 d-none d-sm-block">
                            <img src={payment}
                                alt="Login img" className="w-100 vh-100" style={{ objectFit: 'cover', objectPosition: 'left' }} />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
