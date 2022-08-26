import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import { Col, Container, Row } from 'reactstrap'
import Swal from 'sweetalert2'


 const ProductCrud = () => {

    const [product, setProducts] = useState([])
    // const [message, setMessage] = useState("")

    // let navigate = useNavigate();

    useEffect(() => {

        getAllProducts();
    }, [])

    const getAllProducts = () => {
        fetch("http://localhost:8083/product/all").then((result) => {

            result.json().then((resp) => {

                setProducts(resp);

            });

        });
    }



    const deleteProduct = (productId) => {


        axios.delete(`http://localhost:8083/product/delete/${productId}`)
            .then((result) => {
                if (result.isConfirmed) {
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                    )
                }
            })
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        })




    }






    // const deleteProduct = (productId) => {
    //     axios.delete(`http://localhost:8083/product/delete/${productId}`)
    //         .then(response => {
    //             console.log(response.data);
    //             setMessage("The Product was deleted successfully!");
    //             // navigate("/adminAllProducts");
    //         })
    //         .catch(e => {
    //             console.log(e);
    //         });
    // };




    return (


        <div>

            <Container fluid>
                <span>
                    <h3>Products</h3>
                </span>

                <Link to="/addProduct" className="btn btn-primary mb-2" > Add Product </Link>

                <Row>
                    {product.map((p, index) => (
                        <Col sm="4">
                            <div className="card w-55 shadow-lg  mb-5 bg-white rounded" style={{ width: 350 }}>
                                <img className="card-img mx-auto" src={p.imageUrl} alt="Card img" style={{ width: 220, height: 220 }} />
                                <div className="card-body text-center">
                                    <div className="details">
                                        {/* <p>{p.couponId}</p> */}
                                        <h3>{p.productName}</h3>
                                        <p>Price - {p.price}Rs</p>

                                        <Link className="btn btn-info" to={`/products/edit/${p.productId}`} >Update</Link>
                                        <button className="btn btn-danger" onClick={() => deleteProduct(p.productId)}
                                            style={{ marginLeft: "10px" }}> Delete</button>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>

            </Container>
        </div>

    )
}
export default ProductCrud;

