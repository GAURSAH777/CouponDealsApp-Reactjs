import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Container } from "reactstrap";



const UpdateProduct = () => {

    const paperStyle = { padding: '45px 30px', width: '500', backgroundColor: "white", borderRadius: 20, }


    const { productId } = useParams();
    let navigate = useNavigate();
    const initialProductState = {
        productId: "",
        productName: "",
        price: "",
        imageUrl: ""
    };
    const [formErrors, setFormErrors] = useState({});
    const [product, setProduct] = useState(initialProductState);
    const [message, setMessage] = useState("");

    const getProduct = productId => {
        axios.get(`http://localhost:8083/product/get/${productId}`)
            .then(response => {
                setProduct(response.data);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    useEffect(() => {
        if (productId)
            getProduct(productId);
    }, [productId]);

    const handleChange = e => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
    };




    const onSubmit = e => {
        e.preventDefault();

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

            axios.put(`http://localhost:8083/product/update/${productId}`, payload)
                .then(response => {
                    console.log(response.data);
                    setMessage("The Product was updated successfully!");
                })

                .catch(e => {
                    console.log(e);
                });
        }
    };



    return (
        <div>

            <Container style={paperStyle}>
                <div className="container">
                    <div className="w-75 mx-auto shadow p-5">
                        <h2 className="text-center mb-4">Edit A Product</h2>
                        <form onSubmit={e => onSubmit(e)}>
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control form-control-lg"
                                    placeholder="Enter Product Name"
                                    name="productName"
                                    value={product.productName}
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
                                    type="number"
                                    className="form-control form-control-lg"
                                    placeholder="Enter Product Amount"
                                    name="price"
                                    value={product.price}
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
                                    value={product.imageUrl}
                                    onChange={e => handleChange(e)}
                                />
                                {formErrors.imageUrlErr && (
                                    <div style={{ color: "red", paddingBottom: 10 }}>
                                        {formErrors.imageUrlErr}
                                    </div>
                                )}
                            </div>
                            <br />

                            <button className="btn btn-warning btn-block">Update Product</button>
                        </form>
                    </div>
                </div>
            </Container>
        </div>

    )
}

export default UpdateProduct