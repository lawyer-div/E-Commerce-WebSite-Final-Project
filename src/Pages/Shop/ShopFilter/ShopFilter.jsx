import React from 'react'
import '../Shop.css';
import vector from '../../../Assets/Comper.png'
import { TbLayoutGridFilled } from "react-icons/tb";
import { BsViewList } from "react-icons/bs";

const ShopFilter = () => {
  return (
    <>
      <div className='shop-filter-main'>
        <div className='shop-filter-left'>
          <div className='shop-left-filtering'>
            <img src={vector} alt='filter' className='shop-left-filter-img'></img>
            <div><p className='shop-left-filter-text'>Filter</p></div>
          </div>
          <div className='shop-filter-gridview'><TbLayoutGridFilled style={{ fontSize: "20px" }} /></div>
          <div className='shop-filter-bsview'><BsViewList style={{ fontSize: "20px" }} /></div>
          <div className='shop-left-filter-showingdetail'>
            <p className='shop-left-filter-showingdetail-text'>Showing 1–16 of 32 results</p>
          </div>
        </div>
        <div className='shop-filter-right'>
          <div className='shop-filter-right-show'>
            <p className='shop-filter-show'>Show</p>
            <input type='text' className='shop-filter-showinput' placeholder='16'></input>
          </div>
          <div className='shop-filter-right-sort'>
            <p className='shop-filter-sort'>Sort by</p>
            <input type='text' className='shop-filter-sortinput' placeholder='Default'></input>
          </div>
        </div>
      </div>
    </>
  )
}

export default ShopFilter