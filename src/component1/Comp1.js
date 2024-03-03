import React from 'react'
import './Comp1.css'
import Image1 from './image1.png'
import Image2 from './image2.jpg'
import Image3 from './image3.jpg'
import Image4 from './image4.png'
import Image5 from './image5.jpg'
import Image6 from './image6.jpg'
import Image7 from './image7.jpg'
import Image8 from './image8.jpg'
import Image9 from './image9.jpg'

 function Comp1() {
  return (
    <div className='comp1'>
      <h2>TODAY'S DEALS</h2>
    <div className='main'>
      <div className='first'>
        <h3>Starts early for Prime members</h3>
        <a href='#'><img src={Image1}/></a>
        <a href='#'>Start 30-day Prime FREE trial</a>
      </div>
      <div className='second'>
        <h3>Up to 75% off | Headphones</h3>
        <div className='sec'>
          <div className='subsec1'>
           <a href='#'><img src={Image2}/></a>
            <p>Up to 75% off | boAt</p>
          </div>
          <div className='subsec2'>
          <a href='#'><img src={Image3}/></a>
          <p>Up to 75% off | boAt</p>
          </div>
        </div>
        <div className='sec2'>
          <div className='subsec21'>
          <a href='#'> <img src={Image4}/></a>
          <p>Up to 75% off | boAt</p>
          </div>
          <div className='subsec22'>
          <a href='#'> <img src={Image5}/></a>
          <p>Up to 75% off | boAt</p>
          </div>
        </div>
      </div>
      <div className='third'>
        <h3>Up to 75% off | Headphones</h3>
        <div className='sec'>
          <div className='subsec1'>
           <a href='#'><img src={Image6}/></a>
            <p>Air Conditioners</p>
          </div>
          <div className='subsec2'>
          <a href='#'><img src={Image7}/></a>
          <p>Refrigerators</p>
          </div>
        </div>
        <div className='sec2'>
          <div className='subsec21'>
          <a href='#'> <img src={Image8}/></a>
          <p>Microwave</p>
          </div>
          <div className='subsec22'>
          <a href='#'> <img src={Image9}/></a>
          <p>Washing machines</p>
          </div>
        </div>
      </div>
    </div>
    <div className='frames'>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/J07ADL9D-jw?si=0173QF4olclTunHm" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    </div>
  )
}
export default Comp1
