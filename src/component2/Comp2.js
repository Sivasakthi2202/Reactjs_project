import React from 'react'
import './Comp2.css'
import Co1 from './co1.jpg'
import Co2 from './co2.jpg'
import { Link } from 'react-router-dom';

export default function Comp2() {
  return (
    <div className='parent1'>
    <div className='comp2'>
      <h2>Top Rated&nbsp;<a href='public.html'><span>See more</span></a></h2>
      <div className='start'>
        <div className='stat1'>
          <img src={Co1}/>
          <h4>pTron Pride Lite HBE Ear Wired Earphones</h4>
        <p>$199</p>
        <button><Link to='buy'>Buy Now</Link></button>
        </div>
        <div className='stat2'>
        <img src={Co2}/>
          <h4>pTron Pride Lite HBE Ear Wired Earphones</h4>
        <p>$199</p>
        <button>Buy Now</button>
        </div>
        <div className='stat2'>
        <img src={Co2}/>
          <h4>pTron Pride Lite HBE Ear Wired Earphones</h4>
        <p>$199</p>
        <button>Buy Now</button>
        </div>
      </div>
      <div className='start'>
        <div className='stat1'>
          <img src={Co1}/>
          <h4>pTron Pride Lite HBE Ear Wired Earphones</h4>
        <p>$199</p>
        <button>Buy Now</button>
        </div>
        <div className='stat2'>
        <img src={Co2}/>
          <h4>pTron Pride Lite HBE Ear Wired Earphones</h4>
        <p>$199</p>
        <button>Buy Now</button>
        </div>
        <div className='stat2'>
        <img src={Co2}/>
          <h4>pTron Pride Lite HBE Ear Wired Earphones</h4>
        <p>$199</p>
        <button>Buy Now</button>
        </div>
      </div>
    </div>
    </div>
  )
}
