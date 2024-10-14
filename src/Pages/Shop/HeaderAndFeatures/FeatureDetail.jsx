import React from 'react'
import '../Shop.css'

import vector1 from '../../../Assets/Features/Vector (1).png';
import vector2 from '../../../Assets/Features/Vector (2).png';
import vector3 from '../../../Assets/Features/Vector (3).png';
import group from '../../../Assets/Features/Group.png';

const FeaturesDetail = () => {
  return (
    <>
      <div className='warrantydetail'>
        <div className='quality'>
          <div className='datalogo'>
            <img src={group} alt='image1' className='imglogo'></img>
          </div>

          <div className='aboutdata'>
            <p className='aboutdata-title'>High Quality</p>
            <p className='aboutdata-desc'>crafted from top materials</p>
          </div>
        </div>
        <div className='warranty quality'>
          <div className='datalogo'>
            <img src={vector1} alt='image2' className='imglogo'></img>
          </div>
          <div className='aboutdata'>
            <p className='aboutdata-title'>Warranty Protection</p>
            <p className='aboutdata-desc'>Over 2 years</p>
          </div>
        </div>
        <div className='shipping quality'>
          <div className='datalogo'>
            <img src={vector2} alt='image3' className='imglogo'></img>
          </div>
          <div className='aboutdata'>
            <p className='aboutdata-title'>Free Shipping</p>
            <p className='aboutdata-desc'>Order over 150 $</p>
          </div>
        </div>
        <div className='support quality'>
          <div className='datalogo'>
            <img src={vector3} alt='image4' className='imglogo'></img>
          </div>
          <div className='aboutdata'>
            <p className='aboutdata-title'>24 / 7 Support</p>
            <p className='aboutdata-desc'>Dedicated support</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default FeaturesDetail