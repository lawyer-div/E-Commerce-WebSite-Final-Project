import React from 'react';
import './ContactHeader.css'
import { useNavigate } from "react-router-dom";

import logo from '../../Assets/logo.png'
export default function CommonHeader() {
  const navigate = useNavigate();
  return (
    <div>
      <div className='shop-title-main'>
        <div className='shop-title-text'>
          <div><img src={logo} alt=''></img></div>
          <p className='shop-title-shop'>Contact</p>
          <div className='shop-title-breadcrumb-route'>
            <p className='shop-title-breadcrumb' style={{ cursor: "pointer" }} onClick={() => {
              navigate("/")
            }
            } >Home &gt; </p>
            <p className='shop-title-breadcrumb-next'>&nbsp; Contact</p>
          </div>
        </div>
      </div>

    </div>
  )
}
