import React from 'react'
import Services from '../Services/Services'
import "./PremiumServices.scss"

const PremiumServices = () => {
  return (
    <div className='PremiumServices'>
        <Services row1={true} row2={false} heading={"Premium Services"} bannerText={
            "  We Know How Tedious it is to find the right electronics/elecrical service providers who can help you through the journey from very start. No Need to worry about what to pick & what to not, Where to place & where to not, What colors to pick and what to not. We have experienced professionals who are experts in Illumination and electric fitting industry, Who can help you through all these."}/>
    </div>
  )
}

export default PremiumServices