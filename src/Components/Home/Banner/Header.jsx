import React from 'react'
import { Link } from "react-router-dom";
import './Header.css';

export default function Header() {
  return (
    <div>
      <div className="Header_img">
        <div className="hero_box">
          <div className="sub_hero_box">
            <span className='New'>New Arrival</span> <br />
            <span className="sub_hero_box_main_text">
              Discover Our <br /> New Collection
            </span>

            <span className='New'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br /> Ut elit tellus, luctus nec ullamcorper mattis.
            </span>
            <div className="sub_hero_box_button">
              <Link to="/">buy now</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
