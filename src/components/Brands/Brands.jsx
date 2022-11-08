import React from 'react'
import "./Brands.scss"
import brand from "../../images/man4.png"
import havells from "../../images/Havells.png"
import siemens from "../../images/siemens.png"


const bajaj = "https://static.javatpoint.com/top10-technologies/images/top-10-electrical-companies-in-india6.png"

const polycab ="https://static.javatpoint.com/top10-technologies/images/top-10-electrical-companies-in-india7.png"

const orient ="https://static.javatpoint.com/top10-technologies/images/top-10-electrical-companies-in-india10.png"

const finolex = "https://static.javatpoint.com/top10-technologies/images/top-10-electrical-companies-in-india9.png"


const syska = "https://www.mobilityindia.com/wp-content/uploads/2019/09/syska-logo-300x169.jpg"


const Brands = () => {
  return (
    <div className='Brands'>
       <div className="heading">
        <span>Trusted Brands</span>
      </div>

      <div className="brand-container">
        <div className="card">
          <img src={bajaj} alt="" />
        </div> <div className="card">
          <img src={polycab} alt="" />
        </div> <div className="card">
          <img src={orient} alt="" />
        </div> <div className="card">
          <img src={finolex} alt="" />
        </div> <div className="card">
          <img src={syska} alt="" />
        </div> <div className="card">
          <img src={havells} alt="" />
        </div> <div className="card">
          <img src={siemens} alt="" />
        </div>
      </div>

    </div>
  )
}

export default Brands

