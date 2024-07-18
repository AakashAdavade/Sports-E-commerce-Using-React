import React, { useState } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Link } from 'react-router-dom'; // Import the Link component
import { useSelector } from 'react-redux';
import Cart from '../../Components/Cart/Cart';
import Login from "../Login/Login"

import './Navbar.scss';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const products = useSelector((state) => state.cart.products);

  return (
    <div className="navbar">
      <div className="center">
        <img src="/img/shivaji.png" alt="" width="35px" height="35px" />
        <Link className="link" to="/">
          Chatrapati Shivaji Sports
        </Link>
      </div>
      
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <Link className="link" to="/Products/2">
              Cricket
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/Products/4">
              Football
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/Products/3">
              Badminton
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/Products/1">
              Volleyball
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/Products/5">
              Indoor Games
            </Link>
          </div>
        </div>

        <div className="right">
          <div className="item">
            <Link className="link" to="/">
              Home
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/login">
              Login
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/">
              Contact
            </Link>
          </div>

          <div className="icons">
            <div className="cartIcon" onClick={() => setOpen(!open)}>
              <AiOutlineShoppingCart />
              <span>{products.length}</span>
            </div>
          </div>
        </div>
      </div>
      {open && <Cart />}
    </div>
  );
};

export default Navbar;
