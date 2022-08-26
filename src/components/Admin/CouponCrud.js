import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Col, Container, Row } from 'reactstrap'


 const CouponCrud = () => {

    const [coupon, setCoupons] = useState([])

    useEffect(() => {

        getAllCoupons();
    }, [])

    const getAllCoupons = () => {
        fetch("http://localhost:8082/coupon/allCoupons").then((result) => {

            result.json().then((resp) => {

                setCoupons(resp);

            });

        });
    }



    const deleteCoupon = (couponId) => {
        axios.delete(`http://localhost:8082/coupon/delete/${couponId}`)
            .then((response) => {
                getAllCoupons();

            }).catch(error => {
                console.log(error);
            })

    }

    return (


        <div>
            
            <Container fluid>
                <span>
                    <h3>Coupons</h3>
                </span>
                <Link to="/addCoupon" className="btn btn-primary mb-2" > Add Coupon </Link>
                <Row>
                    {coupon.map((p, index) => (
                        <Col sm="4">
                            <div className="card w-55 shadow-lg  mb-5 bg-white rounded" style={{ width: 350 }}>
                                <img className="card-img mx-auto" src={p.imageUrl} alt="Card img" style={{ width: 220, height: 220 }} />
                                <div className="card-body text-center">
                                    <div className="details">
                                    <p>Coupon Id - {p.couponId}</p>
                                            <p>Product Name - {p.productName}</p>
                                            <p>Category - {p.category}</p>
                                            <p>Coupon Code - {p.couponCode}</p>
                                            <p>Offer Detail - {p.offerDetails}</p>
                                            <p>Expiry Date - {p.expiryDate}</p>
                                            <p>Price - {p.price}Rs</p>

                                        <Link className="btn btn-success" to={`/coupons/edit/${p.couponId}`} >Update</Link>
                                        <button className="btn btn-danger" onClick={() => deleteCoupon(p.couponId)}
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
export default CouponCrud
