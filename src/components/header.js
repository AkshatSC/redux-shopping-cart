import React from "react";
import bagicon from "../images/bag-icon.svg";
import { useDispatch, useSelector } from 'react-redux';
import {toggleCart} from "../redux/slices/cartSlice.js";
import "./header.css";

function Header(){
  const dispatch = useDispatch();

  const {cartItems} = useSelector((state)=>state.cart);

  function handleOpenCart(istrue){
    dispatch(toggleCart(istrue));
  }

  const cartQuantity = cartItems.length;

  return(
    <>
      <header id="header">
                <div className="container">
                    <div className="navbar">
                        <h4>Redux Shopping Cart</h4>
                        <div className="nav_menu">
                            <div
                                title="Cart"
                                className="cart_icon"
                                onClick={()=>handleOpenCart(true)}
                            >
                                <img src={bagicon} alt="bag-icon" />
                                <span className="badge">{cartQuantity}</span>
                            </div>
                        </div>
                    </div>
                </div>
        </header>
      </>
  );
}

export default Header;
