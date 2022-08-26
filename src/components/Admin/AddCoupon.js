import React from 'react'
import { useState } from 'react'
import axios from "axios"
import { Container } from "reactstrap";
import { useNavigate } from 'react-router-dom';



const AddCoupon = () => {

    const paperStyle = { padding: '45px 30px', width: '500', backgroundColor: "white", borderRadius: 20, }

    const [input, setInput] = useState({
        "couponId": "",
        "productName": "",
        "category": "",
        "couponCode": "",
        "offerDetails": "",
        "expiryDate": "",
        "price": "",
        "imageUrl": ""



    });

    const [formErrors, setFormErrors] = useState({});

    const navigate = useNavigate();

    const onInputChange = event => {

        const { name, value } = event.target;
        setInput((previousvalue) => {
            console.log(previousvalue.data);
            return {
                ...previousvalue,
                [name]: value,
            }



        });
    };



    const onSubmit = async event => {
        event.preventDefault();
        let errors = {};

        if (!input.productName) {
            errors["productNameErr"] = "Product Name is required";
        }
        if (!input.category) {
            errors["categoryErr"] = "Category is required";
        }
        if (!input.couponCode) {
            errors["couponCodeErr"] = "Coupon Code is required";
        }
        if (!input.offerDetails) {
            errors["offerDetailsErr"] = "Offer Detail is required";
        }
        if (!input.expiryDate) {
            errors["expiryDateErr"] = "Expiry Date is required";
        }
        if (!input.price) {
            errors["priceErr"] = "Price is required";
        }
        if (!input.imageUrl) {
            errors["imageUrlErr"] = "Image Url is required";
        }

        setFormErrors(errors);
        const noErrors = Object.keys(errors).length === 0;
        if (noErrors) {
            const payload = {
                productName: input.productName,
                category: input.category,
                couponCode: input.couponCode,
                offerDetails: input.offerDetails,
                expiryDate: input.expiryDate,
                price: input.price,
                imageUrl: input.imageUrl
            };

            try {
                if (
                    axios.post("http://localhost:8082/coupon/save", payload)
                        .then(response => {
                            console.log(response.data);


                        })) { alert("added") }
                navigate('/adminHome')
            }
            catch (error) {
                console.log("error is", error)
            };

        }
    };

  




    return (


        <div>

            <Container style={paperStyle}>
                <div className="container">
                    <div className="w-75 mx-auto shadow p-5">
                        <h2 className="text-center mb-4">Add A Coupon</h2>

                        <form onSubmit={event => onSubmit(event)}>
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control form-control-lg"
                                    placeholder="Enter Product Name"
                                    name="productName"
                                    value={input.productName}
                                    onChange={event => onInputChange(event)}
                                />
                                {formErrors.productNameErr && (
                                    <div style={{ color: "red", paddingBottom: 10 }}>
                                        {formErrors.productNameErr}
                                    </div>
                                )}
                            </div>
                            <br/>
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control form-control-lg"
                                    placeholder="Enter Product Category"
                                    name="category"
                                    value={input.category}
                                    onChange={event => onInputChange(event)}
                                />
                                {formErrors.categoryErr && (
                                    <div style={{ color: "red", paddingBottom: 10 }}>
                                        {formErrors.categoryErr}
                                    </div>
                                )}
                            </div>
                            <br/>
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control form-control-lg"
                                    placeholder="Enter Product Coupon Code"
                                    name="couponCode"
                                    value={input.couponCode}
                                    onChange={event => onInputChange(event)}
                                />
                                {formErrors.couponCodeErr && (
                                    <div style={{ color: "red", paddingBottom: 10 }}>
                                        {formErrors.couponCodeErr}
                                    </div>
                                )}
                            </div>
                            <br/>
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control form-control-lg"
                                    placeholder="Enter Coupon Code Offer"
                                    name="offerDetails"
                                    value={input.offerDetails}
                                    onChange={event => onInputChange(event)}
                                />
                                {formErrors.offerDetailsErr && (
                                    <div style={{ color: "red", paddingBottom: 10 }}>
                                        {formErrors.offerDetailsErr}
                                    </div>
                                )}
                            </div>
                            <br/>
                            <div className="form-group">
                                Expiry Date
                                <input
                                    type="Date"
                                    className="form-control form-control-lg"
                                    placeholder="Enter Coupon Code expiry date"
                                    name="expiryDate"
                                    value={input.expiryDate}
                                    onChange={event => onInputChange(event)}
                                />
                                {formErrors.expiryDateErr && (
                                    <div style={{ color: "red", paddingBottom: 10 }}>
                                        {formErrors.expiryDateErr}
                                    </div>
                                )}
                            </div>
                            <br/>
                            <div className="form-group">
                                <input
                                    type="number"
                                    className="form-control form-control-lg"
                                    placeholder="Enter Product Coupon Code Amount"
                                    name="price"
                                    value={input.price}
                                    onChange={event => onInputChange(event)}
                                />
                                {formErrors.priceErr && (
                                    <div style={{ color: "red", paddingBottom: 10 }}>
                                        {formErrors.priceErr}
                                    </div>
                                )}
                            </div>
                            <br/>
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control form-control-lg"
                                    placeholder="Enter Product image Url"
                                    name="imageUrl"
                                    value={input.imageUrl}
                                    onChange={event => onInputChange(event)}
                                />
                                {formErrors.imageUrlErr && (
                                    <div style={{ color: "red", paddingBottom: 10 }}>
                                        {formErrors.imageUrlErr}
                                    </div>
                                )}
                            </div>
                            <br/>


                            <button className="btn btn-primary btn-block">Add Coupon</button>
                        </form>
                    </div>
                </div>
            </Container>
        </div>

    )
};

export default AddCoupon;
