import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Product from './Product';

function Navbar() {
    const products = useSelector((state)=> state.cart)
  return (
    <div>
    <NavLink to="/" >Home</NavLink>
    <NavLink to="/checkout" >Checkout</NavLink>
    <span>Cart Value:{products.length}</span>
    </div>
  )
}

export default Navbar
