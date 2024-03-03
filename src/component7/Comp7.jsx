// App.js (React Component)

import React, { useState } from 'react';
import './Comp7.css'; // Import your CSS file

const Comp7 = () => {
  const [selectedColor, setSelectedColor] = useState('purple'); // Initial color

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  return (
    <div className="buy-now-container">
      <div className="product-image">
        <img src={`images/product_${selectedColor}.jpg`} alt="Product" />
      </div>
      <div className="product-details">
        <h2>Titan Women Purple Ceramics Round Mother of Pearl Watches</h2>
        <p>3 lines of description for the product...</p>
        <div className="product-rating">
          <span>4.5 star</span>
        </div>
        <div className="product-price">
          <p>Price: $3000</p>
        </div>
        <div className="product-info">
          <p>Material: Stainless Steel</p>
          <p>Size: 40mm, 30mm, 20mm</p>
          <p>Type: Type Name</p>
          <p>Availability: 10 in stock</p>
          <p>Quantity: <input type="number" defaultValue="1" /></p>
          <div className="color-options">
            <span
              className={selectedColor === 'purple' ? 'selected' : ''}
              onClick={() => handleColorChange('purple')}
            ></span>
            <span
              className={selectedColor === 'blue' ? 'selected' : ''}
              onClick={() => handleColorChange('blue')}
            ></span>
            {/* Add more color options as needed */}
          </div>
        </div>
        <div className="product-actions">
          <button>Add to Cart</button>
          <button>Add to Wishlist</button>
          <button>Buy It Now</button>
        </div>
        <div className="delivery-timeline">
          <p>Delivery Time: 3-5 business days</p>
        </div>
        <div className="share-button">
          <button>Share</button>
        </div>
      </div>
    </div>
  );
};

export default Comp7;


// chatgpt
// using reactjs, js,html, css, bootstrap i want one buynow page. leftside product image and rightside have one title Titan Women Purple ceramics Round Mother of pearl Watches and down give 3 lines of description for the product and then down give 4.5 star and below give price of the product like price $3000 and below give material stainless steel and below give size of the image 40mm 30mm 20mm and below give type and below give Avaliability 10 in stock and below give quantity and below give product color we i click the color it will change the color of the right side product image and below give 3 buttons add to cart and add to wislist and buy it now and this below give delivery time line and below give share button mainly give css page also
