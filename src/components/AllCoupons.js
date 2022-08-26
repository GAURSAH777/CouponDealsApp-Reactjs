import React from 'react'
import { useState, useEffect } from 'react'
import { Col, Container, Row } from 'reactstrap'
import CouponService from '../services/CouponService'



const AllCoupons = () => {
    const [coupons, setCoupons] = useState([])

    useEffect(() => {
        getCoupons()
    }, [])

    const getCoupons = () => {

        CouponService.getCoupons().then((response) => {
            setCoupons(response.data)
            console.log(response.data);
        });
    };




    return (
        <div className='row my-5'>
            <h1 className='text-center mb-5 '>Coupons List</h1>
            <Container fluid>
                <Row>

                    {
                        coupons.map(
                            coupon =>
                                <Col sm="4">
                                    {/* <div className='col-sm-6'> */}
                                        <div className="card w-55 shadow-lg  mb-5 bg-white rounded" style={{ width: 350 }}>
                                            <img className="card-img mx-auto" src={coupon.imageUrl} alt="Card img" style={{ width: 220, height: 220 }} />
                                            <div className="card-body text-center">
                                                <div className="details">
                                                    {/* <p>{p.couponId}</p> */}
                                                    <h3>{coupon.productName}</h3>
                                                    <p>Price - {coupon.price}Rs</p>
                                                    <a href="/payment" className="btn btn-outline-primary stretched-link">Buy Now</a>
                                                    {/* <Link className="btn btn-success" to={`/product/get/${p.productId}`} >View</Link> */}
                                                </div>
                                            </div>
                                        </div>
                                    {/* </div> */}
                                </Col>
                        )}
                </Row>
            </Container>

        </div>

    )
}
export default AllCoupons;