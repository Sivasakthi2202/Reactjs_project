import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';

function Navbar(){
    return (
      <div className="app">
        <div className="navbar1">
          <Link to='/'>Home</Link>
            <Link to ='pods'>Airpods</Link>
            <Link to='laptop'>Laptop and Accessory</Link>
            <Link to ='watches'>Smart watches</Link>
            <Link to ='camera'>cameras</Link>
            <Link to ='mobiles'>Mobile</Link>
            <Link to='Mobaccess'>Mobile Accessories</Link>
            <Link to='computer'>Computer</Link>
            <Link to='Home-electro'>Home Electronics</Link>
        </div>
      </div>
    );
  };

export default Navbar
