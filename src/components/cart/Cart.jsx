import React from "react";
import scart from '../../assets/scart.svg';
import './cart.css'

const Cart = ({ind=0}) => {
    return (
        <div className="cart">
            <img src={scart} alt="" />
            <p>{ind}</p>
        </div>
    );
    }

export default Cart;