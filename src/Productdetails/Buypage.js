import React, { useState } from 'react';
import './buypage.css';
import { Link } from 'react-router-dom';

const BuyPage = () => {
  const [selectedImage, setSelectedImage] = useState('https://m.media-amazon.com/images/I/71yl-NIFgpL._AC_UY218_.jpg'); // Replace with actual image paths
  const [selectedColor, setSelectedColor] = useState('Stellar Green');
  const [selectedSize, setSelectedSize] = useState('6 GB Ram + 128 GB Storage');
  const [cart, setCart] = useState([]);
  const mobileName = 'Realme Narzo 60X 5G';

  const addToCart = () => {
    const mobileDetails = {
      name: mobileName,
      image: selectedImage,
      color: selectedColor,
      size: selectedSize,
      price: 14499,
    };

    setCart([...cart, mobileDetails]);
  };

  return (
    <div className="mobile-buying-page">
      <div className="left-section">
        <img className="fullscreen-image" src={selectedImage} alt="Mobile" />
        <div className="thumbnail-images">
          {/* Replace with actual thumbnail images */}
          <img src="https://m.media-amazon.com/images/I/61V-uzan3wL._AC_UY218_.jpg" alt="Thumbnail 1" onClick={() => setSelectedImage('https://m.media-amazon.com/images/I/61V-uzan3wL._AC_UY218_.jpg')} />
          <img src="https://m.media-amazon.com/images/I/71qvHi7qXEL._AC_UL320_.jpg" alt="Thumbnail 2" onClick={() => setSelectedImage('https://m.media-amazon.com/images/I/71qvHi7qXEL._AC_UL320_.jpg')} />
          <img src="https://m.media-amazon.com/images/I/61+ux1NlBjL._AC_UY218_.jpg" alt="Thumbnail 3" onClick={() => setSelectedImage('https://m.media-amazon.com/images/I/61+ux1NlBjL._AC_UY218_.jpg')} />
        </div>
      </div>
      <div class="col-md-6 product-details">
      <h2>Realme Narzo 60X 5G</h2>
      <p>(Stellar Green, 6GB, 128GB Storage)</p>
      <p>Up to 2TB External Memory | 50 MP AI Primary Camera | 33W Supervooc Charge</p>

      <div class="rating">&#9733;&#9733;&#9733;&#9733;&#9734; <span class="text-warning">4.5 stars</span></div>

      <p class="product-price">&#8377;14,499 <span class="discount">-9%</span></p>
      <p class="mrp">M.R.P.: &#8377;15,999.00</p>

      <div class="additional-details">
        <p><img src="image/replacement.png"/> 7 days Service Centre Replacement</p>
        <p><img src="image/delivery.png"/> Free Delivery</p>
        <p><img src="image/warranty.jpg"/> 1 Year Warranty</p>
        <p><img src="image/payondelivery.png"/>Cash on Delivery</p>
      </div>

      <div class="form-group">
        <label for="color">Colour:</label>
        <select class="form-control" id="color">
          <option>Stellar Green</option>
        </select>
      </div>

      <div class="form-group">
        <label for="size">Size:</label>
        <select class="form-control" id="size">
          <option>6 GB Ram + 128 GB Storage</option>
        </select>
      </div>

      <button class="add-to-cart-btn" onclick="addToCart()">Add to Cart</button>
    </div>
  </div>
  );
};

export default BuyPage;
