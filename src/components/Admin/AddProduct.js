import React from 'react'
import { useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom';
import { Container } from "reactstrap";



const AddProduct = () => {

    const paperStyle = { padding: '45px 30px', width: '500', backgroundColor: "white", borderRadius: 20, }

    const [product, setProduct] = useState({
        "productId": "",
        "productName": "",
        "price": "",
        "imageUrl": ""



    });

    const [formErrors, setFormErrors] = useState({});
    const navigate = useNavigate();


    const onInputChange = event => {

        const { name, value } = event.target;
        setProduct((previousvalue) => {
            // console.log(previousvalue.data);
            return {
                ...previousvalue,
                [name]: value,
            }



        });
    };



    const onSubmit = event => {
        event.preventDefault();
        let errors = {};

        if (!product.productName) {
            errors["productNameErr"] = "Product Name is required";
        }
        if (!product.price) {
            errors["priceErr"] = "Price is required";
        }
        if (!product.imageUrl) {
            errors["imageUrlErr"] = "Image is required";
        }

        setFormErrors(errors);
        const noErrors = Object.keys(errors).length === 0;
        if (noErrors) {
            const payload = {
                productName: product.productName,
                price: product.price,
                imageUrl: product.imageUrl
            };

            try {
                if (
                    axios.post("http://localhost:8083/product/add", payload)
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
                        <h2 className="text-center mb-4">Add A Product</h2>
                        <form onSubmit={event => onSubmit(event)}>
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control form-control-lg"
                                    placeholder="Enter Product Name"
                                    name="productName"
                                    value={product.productName}
                                    onChange={event => onInputChange(event)}
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
                                    type="number"
                                    className="form-control form-control-lg"
                                    placeholder="Enter Product Amount"
                                    name="price"
                                    value={product.price}
                                    onChange={event => onInputChange(event)}
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
                                    value={product.imageUrl}
                                    onChange={event => onInputChange(event)}
                                />
                                {formErrors.imageUrlErr && (
                                    <div style={{ color: "red", paddingBottom: 10 }}>
                                        {formErrors.imageUrlErr}
                                    </div>
                                )}
                            </div>
                            <br />

                            <button className="btn btn-primary btn-block">Add Product</button>
                        </form>
                    </div>
                </div>
            </Container>
        </div>

    )
};

export default AddProduct;
