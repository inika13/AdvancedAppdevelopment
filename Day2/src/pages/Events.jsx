import React from 'react'
import "../assets/css/Events.css";
import { Link } from "react-router-dom";
import event1 from '../assets/images/event1.jpg';
import event2 from '../assets/images/event2.jpg';
import event3 from '../assets/images/event3.png';
import event4 from '../assets/images/event4.png';
import event5 from '../assets/images/event5.png';
import event6 from '../assets/images/event6.jpg';
import Navbar from '../components/Navbar/Navbar';



function Events() {
    return (
        <>

            
            
            <div className='main-wrapper1'>
               
               <div className='eve1'>
               <Navbar/>
               <img src={event1} alt='event1' className='ev'/>
               <h1>1) Holi Beach Party </h1>
               <p>On 10th April</p>
               <p>@ Sea Breeze,Banglore</p>
               <Link to='/Payment'><button type='submit' className='cha'>Book Now</button></Link>
               </div>
               <div className='eve2'>
               <img src={event2} alt='event2' className='ev'/>
               <h1>2) Track Day</h1>
               <p>On 19th April </p>
               <p>@ Lawn 4,Madurai</p>
               <Link to='/Payment'><button type='submit' className='cha'>Book Now</button></Link>
               </div>
               <div className='eve3'>
               <img src={event3} alt='event3' className='ev'/>
               <h1>3) Comically: A Fans Fest</h1>
               <p>On 2nd May</p>
               <p>@ SRM Eshwari Engineering College,Chennai</p>
               <Link to='/Payment'><button type='submit' className='cha'>Book Now</button></Link>
               </div>
               <div className='eve4'>
               <img src={event4} alt='event4' className='ev'/>
               <h1>4) Time Square</h1>
               <p>On 17th Nov</p>
               <p>@ SPP Gardens,Maduravoyal,Chennai</p>
               <Link to='/Payment'><button type='submit' className='cha'>Book Now</button></Link>
               </div>
               <div className='eve5'>
               <img src={event5} alt='event5' className='ev'/>
               <h1>5) HRX Pink Marathon</h1>
               <p>On 28th July</p>
               <p>@ Ficus Lawn, Chennai</p>
               <Link to='/Payment'><button type='submit' className='cha'>Book Now</button></Link>
               </div>
               <div className='eve6'>
               <img src={event6} alt='event6' className='ev'/>
               <h1>6) U1 Concert</h1>
               <p>On 11th April</p>
               <p>@Sathyabama Engineering College, Chennai</p>
               <Link to='/Payment'><button type='submit' className='cha'>Book Now</button></Link>
               </div>

               <div className='rem'>
               <h1>Hurry Up!! Participate the Events And Refresh</h1>
               <h2>The details will be visible on the website!!</h2>
               <h3>Fill The Spot, Get On The Spot</h3>
               
               </div>
               
             

            </div>
        </>
    )
}

export default Events