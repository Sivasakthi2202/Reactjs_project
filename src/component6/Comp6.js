import React from 'react'
import './Comp6.css'
import Pods from './pods1.jpg'
import Pods2 from './pods2.jpg'

export default function Comp6() {
  return (
    <div className='comp6'>
        <div className='sub-comp6'>
        <h3>Reviews for Popular Audio & Video</h3>
        <div className='main-cart2'>
      <div className='cart2'>
        <div className='comp6-cart1'>
            <img src={Pods}/>
        </div>
        <div className='comp6-cart12'>
            <h4>APPLE AirPods Pro (2nd generation) with MagSafe</h4><br></br>
            <a><button>4.3 *</button>&nbsp;&nbsp;&nbsp;<span>1,804 Ratings & 146 Reviews</span></a>
            <h5>$21,990&nbsp;&nbsp;&nbsp;<span>11% Off</span></h5>
            <p>With Mic:Yes</p>
            <p>Connector type: No</p>
            <p>Apple-designed H2 chip, the force behind AirPods Pro, pushes advanced audio performance even further. From smarter noise cancellation to superior three-dimensional sound and battery life, it improves on the best features of AirPods Pro in a big way.</p>

        </div>
        <div className='comp6-cart13'>
            <h6><span>Most Helpful Review</span></h6>
            <a><button>5 *</button>&nbsp;&nbsp;&nbsp;Terrific purchase</a>
            <p>My first apple AirPods. It really amazing products Sound quality is amazing</p>
            <a><span>Rohit Makwana

Certified Buyer

2 months ago</span></a>

        </div>
        <div className='comp6-cart14'>
            <h6><span>Recent Review</span></h6>
            <a><button>5 *</button>&nbsp;&nbsp;&nbsp;Best in the market</a>
            <p>Excellent product and good initiative from Flipkart also. The delivery person will open Product in front of customer.</p>
            <a><span>RAVIKUMAR KANDURI

Certified Buyer

5 days ago</span></a>
        </div>
      </div>
      {/*------------------------------------------ cart-second ----------------------------------------------------------------------*/}
      <div className='cart2'>
        <div className='comp6-cart1'>
            <img src={Pods2}/>
        </div>
        <div className='comp6-cart12'>
            <h4>APPLE AirPods Pro (2nd generation) with MagSafe</h4><br></br>
            <a><button>4.3 *</button>&nbsp;&nbsp;&nbsp;<span>1,804 Ratings & 146 Reviews</span></a>
            <h5>$21,990&nbsp;&nbsp;&nbsp;<span>11% Off</span></h5>
            <p>With Mic:Yes</p>
            <p>Connector type: No</p>
            <p>Apple-designed H2 chip, the force behind AirPods Pro, pushes advanced audio performance even further. From smarter noise cancellation to superior three-dimensional sound and battery life, it improves on the best features of AirPods Pro in a big way.</p>

        </div>
        <div className='comp6-cart13'>
            <h6><span>Most Helpful Review</span></h6>
            <a><button>5 *</button>&nbsp;&nbsp;&nbsp;Terrific purchase</a>
            <p>My first apple AirPods. It really amazing products Sound quality is amazing</p>
            <a><span>Rohit Makwana

Certified Buyer

2 months ago</span></a>

        </div>
        <div className='comp6-cart14'>
            <h6><span>Recent Review</span></h6>
            <a><button>5 *</button>&nbsp;&nbsp;&nbsp;Best in the market</a>
            <p>Excellent product and good initiative from Flipkart also. The delivery person will open Product in front of customer.</p>
            <a><span>RAVIKUMAR KANDURI

Certified Buyer

5 days ago</span></a>
        </div>
      </div>
      </div>
      </div>
    </div>
  )
}
