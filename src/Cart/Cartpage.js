import React from 'react';
import './cartpage.css';

const Cartpage = () => {
  return (
    <div className="cart-page">
      <img src="selected-mobile-image.jpg" alt="Selected Mobile" />
      <h2>Redmi A2 (Classic Black, 2GB RAM, 64GB Storage)</h2>
      <div className="order-details">
        <p>Colour: Classic Black</p>
        <p>Style Name: Redmi A2 (2+64)</p>
        <p>Your order is eligible for FREE Delivery.</p>
      </div>
      <div className="cart-subtotal">
        <p>Cart subtotal: ₹30,498.00</p>
      </div>
      <div className="proceed-to-buy">
        <button>Proceed to Buy (2 items)</button>
      </div>
    </div>
  );
};

export default Cartpage;
