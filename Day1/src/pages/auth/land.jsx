import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../../assets/css/login.css"


function Land() {
  
 return (
  
 
    <div className='body1' >
      <div className='layout12'>
        <div className='rectangle'></div>
        <div className='login1'>
       
        <b><h3>WELCOME TO EVENTGO !!!</h3></b>
          <h4>Your VISION ! Our EXPERTISE !</h4>
        </div>
        
        <br />
        <div className='form1'>
          <form >
           
            <h5><Link to='/login'><button type="submit" className='but'>Login</button></Link></h5>
            
          </form>
        </div>
      </div>
    </div>
    
  );
}

export default Land;
