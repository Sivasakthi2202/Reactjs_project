import Boat1 from './boat1.jpg'
import Boat2 from './boat2.jpg'
import Boat3 from './boat3.jpg'
import Boat4 from './boat4.jpg'
import "./Comp4.css";
function Comp4() {
  return (
 <div class="comp4">
<div id="sidebar">
  <a href="#">Electronics</a>
  <a href="#">Mobiles & Accessories</a>
  <a href="#">Mobile Accessories</a>
  {/* <!-- Add more categories as needed --> */}

  <a href="#">Brands</a>
  <a href="#">OnePlus</a>
  <a href="#">Xiaomi</a>
  <a href="#">Apple</a>
  {/* <!-- Add more brands as needed --> */}

  <a href="#">Avg. Customer Review</a>
  <a href="#">New Arrivals</a>
  <a href="#">Item Condition</a>
  <a href="#">Price</a>
  <a href="#">Deals & Discounts</a>
  <a href="#">Seller</a>
  <a href="#">Availability</a>
</div>
 {/*-------------------------------------------- cart1 ----------------------------------------------*/}
 <div className='comp4-cart'>
<div className='comp6'>
      <div className='comp6-first'>
        <center>
        <a href='home.html'><img src={Boat1}/></a>
        </center>
        <h6>TEG Deep Bass HiFi Stereo, IPX7 Waterproof Bluetooth</h6>
        <p>Black, True Wireless</p>
        <a><button>4.5 *</button>&nbsp;&nbsp;&nbsp;(602)</a>
        <h4>$1200</h4>
        <p><span>Lowest price since launch</span></p>
      </div>
      <div className='comp6-second'>
        <center>
        <a href='home.html'><img src={Boat2}/></a>
        </center>
        <h6>TEG Deep Bass HiFi Stereo, IPX7 Waterproof Bluetooth</h6>
        <p>Black, True Wireless</p>
        <a><button>4.5 *</button>&nbsp;&nbsp;&nbsp;(602)</a>
        <h4>$1200</h4>
        <p><span>Lowest price since launch</span></p>
      </div>
      <div className='comp6-third'>
        <center>
        <a href='home.html'><img src={Boat3}/></a>
        </center>
        <h6>TEG Deep Bass HiFi Stereo, IPX7 Waterproof Bluetooth</h6>
        <p>Black, True Wireless</p>
        <a><button>4.5 *</button>&nbsp;&nbsp;&nbsp;(602)</a>
        <h4>$1200</h4>
        <p><span>Lowest price since launch</span></p>
      </div>
      <div className='comp6-four'>
        <center>
        <a href='home.html'><img src={Boat4}/></a>
        </center>
        <h6>TEG Deep Bass HiFi Stereo, IPX7 Waterproof Bluetooth</h6>
        <p>Black, True Wireless</p>
        <a><button>4.5 *</button>&nbsp;&nbsp;&nbsp;(602)</a>
        <h4>$1200</h4>
        <p><span>Lowest price since launch</span></p>
      </div>
    </div>
    {/*-------------------------------------------- cart2 ----------------------------------------------*/}
    <div className='Comp7'>
    <div className='comp6-first1'>
        <center>
        <a href='home.html'><img src={Boat1}/></a>
        </center>
        <h6>TEG Deep Bass HiFi Stereo, IPX7 Waterproof Bluetooth</h6>
        <p>Black, True Wireless</p>
        <a><button>4.5 *</button>&nbsp;&nbsp;&nbsp;(602)</a>
        <h4>$1200</h4>
        <p><span>Lowest price since launch</span></p>
      </div>
      <div className='comp6-second1'>
        <center>
        <a href='home.html'><img src={Boat2}/></a>
        </center>
        <h6>TEG Deep Bass HiFi Stereo, IPX7 Waterproof Bluetooth</h6>
        <p>Black, True Wireless</p>
        <a><button>4.5 *</button>&nbsp;&nbsp;&nbsp;(602)</a>
        <h4>$1200</h4>
        <p><span>Lowest price since launch</span></p>
      </div>
      <div className='comp6-third1'>
        <center>
        <a href='home.html'><img src={Boat3}/></a>
        </center>
        <h6>TEG Deep Bass HiFi Stereo, IPX7 Waterproof Bluetooth</h6>
        <p>Black, True Wireless</p>
        <a><button>4.5 *</button>&nbsp;&nbsp;&nbsp;(602)</a>
        <h4>$1200</h4>
        <p><span>Lowest price since launch</span></p>
      </div>
      <div className='comp6-four1'>
        <center>
        <a href='home.html'><img src={Boat4}/></a>
        </center>
        <h6>TEG Deep Bass HiFi Stereo, IPX7 Waterproof Bluetooth</h6>
        <p>Black, True Wireless</p>
        <a><button>4.5 *</button>&nbsp;&nbsp;&nbsp;(602)</a>
        <h4>$1200</h4>
        <p><span>Lowest price since launch</span></p>
      </div>
    </div>
    </div>
</div>
  );
}
export default Comp4
