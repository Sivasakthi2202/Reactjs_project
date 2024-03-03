import React from 'react'
import Comp1 from './component1/Comp1'
import Comp2 from './component2/Comp2'
import Sub from './SubNavbar/Sub'
import Navbar from './Navbar/Navbar'
import Foot from './component5/Foot'
import Comp3 from './component3/Comp3'

function Home() {
  return (
    <div>
      <Navbar />
      <Sub />
      <Comp1 />
      <Comp2 />
      {/* <Comp3 /> */}
      <Foot />
    </div>
  )
}

export default Home
