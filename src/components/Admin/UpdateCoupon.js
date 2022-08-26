import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { Card, Container } from 'reactstrap';
import { useParams } from 'react-router-dom';


function UpdateCoupon() {

    const paperStyle = { padding: '45px 30px', width: '500', backgroundColor: "white", borderRadius: 20, }
    const [coupon, setCoupon] = useState({
        couponId: "",
        productName: "",
        category: "",
        couponCode: "",
        offerDetails: "",
        expiryDate: "",
        price: "",
        imageUrl: ""

    });
    const { couponId } = useParams();
    const [message, setMessage] = useState("");

    const [formErrors, setFormErrors] = useState({});

    let navigate = useNavigate();

    const getCoupon = couponId => {
        axios.get(`http://localhost:8082/coupon/get/${couponId}`)
            .then(response => {
                setCoupon(response.data);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };


    useEffect(() => {
        if (couponId)
            getCoupon(couponId);
    }, [couponId]);

    const handleChange = e => {
        const { name, value } = e.target;
        setCoupon({ ...coupon, [name]: value });
    };


    const onSubmit = e => {
        e.preventDefault();
        let errors = {};

        if (!coupon.productName) {
            errors["productNameErr"] = "Product Name is required";
        }
        if (!coupon.category) {
            errors["categoryErr"] = "category is required";
        }
        if (!coupon.couponCode) {
            errors["couponCodeErr"] = "couponCode is required";
        }
        if (!coupon.offerDetails) {
            errors["offerDetailsErr"] = "offerDetails is required";
        }
        if (!coupon.expiryDate) {
            errors["expiryDateErr"] = "expiryDate is required";
        }
        if (!coupon.price) {
            errors["priceErr"] = "price is required";
        }
        if (!coupon.imageUrl) {
            errors["imageUrlErr"] = "Image Url is required";
        }


        setFormErrors(errors);
        const noErrors = Object.keys(errors).length === 0;
        if (noErrors) {
            const palyload = {
                couponId: coupon.couponId,
                productName: coupon.productName,
                category: coupon.category,
                couponCode: coupon.couponCode,
                offerDetails: coupon.offerDetails,
                expiryDate: coupon.expiryDate,
                price: coupon.price,
                imageUrl: coupon.imageUrl

            }
            axios.put(`http://localhost:8082/coupon/update/${couponId}`, palyload)
                .then(response => {
                    console.log(response.data);
                    setMessage("The Product was updated successfully!");
                })

                .catch(e => {
                    console.log(e);
                });
        }
    }



    return (
        <Container style={paperStyle}>
            <div className="container">
                <div className="w-75 mx-auto shadow p-5">
                    <h2 className="text-center mb-4">Edit A Coupon</h2>
                    <form onSubmit={e => onSubmit(e)}>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Enter Product Name"
                                name="productName"
                                value={coupon.productName}
                                onChange={e => handleChange(e)}
                            />
                            {formErrors.productNameErr && (
                                <div style={{ color: "red", paddingBottom: 10 }}>
                                    {formErrors.productNameErr}
                                </div>
                            )}
                        </div>
                        <br />
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Enter Product Category"
                                name="category"
                                value={coupon.category}
                                onChange={e => handleChange(e)}
                            />
                            {formErrors.categoryErr && (
                                <div style={{ color: "red", paddingBottom: 10 }}>
                                    {formErrors.categoryErr}
                                </div>
                            )}
                        </div>
                        <br />
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Enter Product Category"
                                name="couponCode"
                                value={coupon.couponCode}
                                onChange={e => handleChange(e)}
                            />
                            {formErrors.couponCodeErr && (
                                <div style={{ color: "red", paddingBottom: 10 }}>
                                    {formErrors.couponCodeErr}
                                </div>
                            )}
                        </div>
                        <br />
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Enter Product Category"
                                name="offerDetails"
                                value={coupon.offerDetails}
                                onChange={e => handleChange(e)}
                            />
                            {formErrors.offerDetailsErr && (
                                <div style={{ color: "red", paddingBottom: 10 }}>
                                    {formErrors.offerDetailsErr}
                                </div>
                            )}
                        </div>
                        <br />
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Enter Product Category"
                                name="expiryDate"
                                value={coupon.expiryDate}
                                onChange={e => handleChange(e)}
                            />
                            {formErrors.expiryDateErr && (
                                <div style={{ color: "red", paddingBottom: 10 }}>
                                    {formErrors.expiryDateErr}
                                </div>
                            )}
                        </div>
                        <br />
                        <div className="form-group">
                            <input
                                type="number"
                                className="form-control form-control-lg"
                                placeholder="Enter Product Amount"
                                name="price"
                                value={coupon.price}
                                onChange={e => handleChange(e)}
                            />
                            {formErrors.priceErr && (
                                <div style={{ color: "red", paddingBottom: 10 }}>
                                    {formErrors.priceErr}
                                </div>
                            )}
                        </div>
                        <br />
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control form-control-lg"
                                placeholder="Enter Product Image Url"
                                name="imageUrl"
                                value={coupon.imageUrl}
                                onChange={e => handleChange(e)}
                            />
                            {formErrors.imageUrlErr && (
                                <div style={{ color: "red", paddingBottom: 10 }}>
                                    {formErrors.imageUrlErr}
                                </div>
                            )}
                        </div>
                        <br />

                        <button className="btn btn-warning btn-block">Update Coupon</button>
                    </form>
                </div>
            </div>
        </Container>

    )
}
export default UpdateCoupon;