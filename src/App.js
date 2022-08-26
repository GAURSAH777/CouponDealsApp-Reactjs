import React, { useState, useEffect } from "react";
import { Routes, Route, Link, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AuthService from "./services/auth.service";

import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Profile from "./components/Profile";
import BoardUser from "./components/BoardUser";
import BoardAdmin from "./components/BoardAdmin";

// import AuthVerify from "./common/AuthVerify";
import EventBus from "./common/EventBus";
import AllCoupons from "./components/AllCoupons";
import AllProducts from "./components/AllProducts";
import Footer from './components/Footer'
import About from './components/About'
import Contact from './components/Contact'
import PaymentOpen from "./payment/PaymentOpen";
import ProductCrud from './components/Admin/ProductCrud'
import AddProduct from './components/Admin/AddProduct'
import UpdateProduct from './components/Admin/UpdateProduct'
import CouponCrud from './components/Admin/CouponCrud'
import AddCoupon from './components/Admin/AddCoupon'
import UpdateCoupon from './components/Admin/UpdateCoupon'
import AdminHome from "./components/Admin/AdminHome";

const App = () => {
  // const [showModeratorBoard, setShowModeratorBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
      // setShowModeratorBoard(user.roles.includes("ROLE_MODERATOR"));
      setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
    }

    EventBus.on("logout", () => {
      logOut();
    });

    return () => {
      EventBus.remove("logout");
    };
  }, []);

  const logOut = () => {
    AuthService.logout();
    // setShowModeratorBoard(false);
    setShowAdminBoard(false);
    setCurrentUser(undefined);
  };

  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <Link to={"/"} className="navbar-brand">
          CouponDeals
        </Link>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to={"/home"} className="nav-link">
              Home
            </Link>
          </li>

          {showAdminBoard && (
            <li className="nav-item">
              <Link to={"/adminHome"} className="nav-link">
                Admin Board
              </Link>
            </li>
          )}

          {/* {currentUser && (
            <li className="nav-item">
              <Link to={"/user"} className="nav-link">
                User
              </Link>
            </li>
          )} */}
        </div>



        {currentUser ? (
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to={"/profile"} className="nav-link">
                {currentUser.username}
              </Link>
            </li>
            <li className="nav-item">
              <NavLink activeClassName='menu_active' exact className="nav-link active" aria-current="page" to="/home">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink activeClassName='menu_active' className="nav-link" to="/service">Coupons</NavLink>
            </li>
            <li className="nav-item">
              <NavLink activeClassName='menu_active' className="nav-link" to="/products">Deals</NavLink>
            </li>
            <li className="nav-item">
              <NavLink activeClassName='menu_active' className="nav-link" to="/about">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink activeClassName='menu_active' className="nav-link" to="/contact">Contact</NavLink>
            </li>
            <li className="nav-item">
              <a href="/login" className="nav-link" onClick={logOut}>
                LogOut
              </a>
            </li>
          </div>
        ) : (
          <div className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to={"/login"} className="nav-link">
                Login
              </Link>
            </li>

            <li className="nav-item">
              <Link to={"/register"} className="nav-link">
                Sign Up
              </Link>
            </li>
          </div>
        )}
      </nav>

      <div className="container mt-3">
        <Routes>
          <Route exact path={"/"} element={<Home />} />
          <Route exact path={"/about"} element={<About />} />
          <Route exact path={"/contact"} element={<Contact />} />
          <Route exact path={"/home"} element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route path="/user" element={<BoardUser />} />
          {/* <Route path="/mod" element={<BoardModerator />} /> */}
          <Route path="/admin" element={<BoardAdmin />} />
          <Route path="/service" element={<AllCoupons />} />
          <Route path="/products" element={<AllProducts />} />
          <Route path="/payment" element={<PaymentOpen />} />
          <Route path="/productCrud" element={<ProductCrud />} />
          <Route path="/addProduct" element={<AddProduct />} />
          <Route path="/products/edit/:id" element={<UpdateProduct />} />
          <Route path="/couponCrud" element={<CouponCrud />} />
          <Route path="/addCoupon" element={<AddCoupon />} />
          <Route path="/coupons/edit/:id" element={<UpdateCoupon />} />
          <Route path="/adminHome" element={<AdminHome />} />
        </Routes>
        <Footer />
      </div>

      {/* <AuthVerify logOut={logOut}/> */}
    </div>
  );
};

export default App;
