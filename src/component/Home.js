import React from 'react'
import Products from './Products'

const Home = () => {
  return (
    <div className='hero'>
        <div className="card text-white border-0 bg-dark">
  <img src="https://lh3.googleusercontent.com/_oOVlahl5jhw-LJgKvMh3cg5R_AzB9oue-7_V3BLvcZHCad-iXT9sbl2cBuFuQH73s4meXvClxE3Tz8a8LnPPSMa7t8=h450-rw" className="card-img" alt="Background" height={"550px"}/>
  <div className="card-img-overlay d-flex">
    <div className='container'>
    <h5 className="card-title display-3 fw-bolder mb-0 text-end text-dark">NEW ARRIVALS</h5>
    <p className="card-text lead fs-2 text-end text-dark">CHECK OUT ALL THE TRENDS</p>
    </div>
  </div>
</div>
<Products/>

    </div>
    
  )
}

export default Home