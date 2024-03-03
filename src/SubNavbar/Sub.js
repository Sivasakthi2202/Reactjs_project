
import React from 'react'
import Image from './search2.png'
import Profile from './profile.png'
import Cart from './cart.png'
import './Subnav.css'
import Navimg from './Navimg.png'

function Sub(){
    return (
      <div className="app">
          <img src={Navimg} className="background-image"></img>
          <header>
            <a>Electronics</a>
          </header>
        <nav className="navbar">
          {/* <ul>
            <li>Home</li>
            <li>About</li> 
            <li>Contact</li>
          </ul> */}
          <div class="left">
          <div class="left0">
            <a><span>ZeT</span>rO</a>
          </div>
          <div class="left1">
            <div class="searchicon">
              <img src={Image} className="image" alt="" />
            </div>
            <form>
              <input
                type="search"
                placeholder="Try Saree, Kurti or Search from Product Code"
                id="input"
                class="inputsearch"
              />
            </form>
          </div>
        </div>
          <div class="profilecont">
            <div class="profile">
              <div class="picon">
                <img src={Profile} />
              </div>
              <p>Profile</p>
            </div>
            <div class="cart">
              <div class="cicon">
                <img src={Cart} />
              </div>
              <p>Cart</p>
            </div>
          </div>
        
        </nav>
      </div>
    );
  };
export default Sub