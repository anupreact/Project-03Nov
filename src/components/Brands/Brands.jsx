import React from 'react'
import "./Brands.scss"
import brand from "../../images/man4.png"
const Brands = () => {
  return (
    <div className='Brands'>
       <div className="heading">
        <span>Trusted Brands</span>
      </div>

      <div className="brand-container">
        <div className="card">
          <img src={brand} alt="" />
        </div> <div className="card">
          <img src={brand} alt="" />
        </div> <div className="card">
          <img src={brand} alt="" />
        </div> <div className="card">
          <img src={brand} alt="" />
        </div> <div className="card">
          <img src={brand} alt="" />
        </div> <div className="card">
          <img src={brand} alt="" />
        </div> <div className="card">
          <img src={brand} alt="" />
        </div>
      </div>

    </div>
  )
}

export default Brands