import React from 'react'
import { useState, useEffect } from 'react'
// import { Link } from 'react-router-dom'
import { Col, Container, Row } from 'reactstrap'



const AllProducts = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {

        fetch("http://localhost:8083/product/all").then((result) => {

            result.json().then((resp) => {

                setProducts(resp);

            });

        });

    }, []);




    return (

        <div className='row my-5'>
            <h1 className='text-center mb-5 '>Products List</h1>
            <Container fluid>
                <Row>
                    {/* <div class="row"> */}
                    {products.map((p, index) => (
                        <Col sm="4">
                            <div className='col-sm-6'>
                                <div className="card w-55 shadow-lg  mb-5 bg-white rounded" style={{ width: 350 }}>
                                    <img className="card-img mx-auto" src={p.imageUrl} alt="Card img" style={{ width: 220, height: 220 }} />
                                    <div className="card-body text-center">
                                        <div className="details">
                                            {/* <p>{p.couponId}</p> */}
                                            <h3>{p.productName}</h3>
                                            <p>Price - {p.price}Rs</p>
                                            <a href="/payment" className="btn btn-outline-primary stretched-link">Buy Now</a>
                                            {/* <Link className="btn btn-success" to={`/product/get/${p.productId}`} >View</Link> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    ))}
                    {/* </div> */}
                </Row>
            </Container>

        </div>

    )
}
export default AllProducts;