import React from 'react'
import "./style.css" 

export default function Navbar() {
  return (
    <div className='navbar'>
      <nav>
        <div className="logo">Zue</div>
        <div className="lis">
            <ul>
                <li>About Us</li>
                <li>Services</li>
                <li>Reviews</li>
                <li><button type='button'>Contact</button></li>
            </ul>
        </div>
      </nav>
    </div>
  )
}
