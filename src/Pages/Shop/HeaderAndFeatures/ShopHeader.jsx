import React from 'react'
import logo from '../../../Assets/logo.png'
import '../Shop.css'

import { useNavigate } from "react-router-dom";

const ShopHeader = () => {

  const navigate = useNavigate();

  return (
    <div className='shop-title-main'>
      <div className='shop-title-text'>
        <div><img src={logo} alt='' /></div>
        <p className='shop-title-shop'>Shop</p>
        <div className='shop-title-breadcrumb-route'>
          <p className='shop-title-breadcrumb' style={{ cursor: "pointer" }} onClick={() => {
            navigate("/")
          }
          }>Home &gt; </p>
          <p className='shop-title-breadcrumb-next'>&nbsp; Shop</p>
        </div>
      </div>
    </div>
  )
}

export default ShopHeader