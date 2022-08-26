import React from 'react'
import CouponCrud from './CouponCrud'
import ProductCrud from './ProductCrud'



const AdminHome = () => {

  return (
    <>
    <div>
       <h1 style={{color:'blue'}}>Welcome to Admin Panel</h1><br/>
        <CouponCrud/>
        <h1 style={{color:'blue'}}>Product/Deals to perform CRUD </h1><br/>
        <ProductCrud/>
        
    </div>

    </>
  )
}

export default AdminHome