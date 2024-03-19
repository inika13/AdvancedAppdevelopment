import React from 'react';
import { Link } from 'react-router-dom';


import '../Navbar/Navbar.css';

export default function Navbar() {
  return (
    <div className='full_sidebar1'>
  
      <div className="navbar_in">
      
        <div className="nav1">
        
    
          <ul>
          
            <li><Link to='/Home'>HOME</Link></li>
            <li><Link to='/Events'>EVENTS</Link></li>
            <li><Link to='/Aboutus'>ABOUT US</Link></li>
            <li><Link to='/Cont'>CONTACT US</Link></li>
            <li><Link to='/Land'>LOGOUT</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
}