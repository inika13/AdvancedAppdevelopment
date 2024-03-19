import React from 'react';
import "../assets/css/style.css";
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
function Home()

{
    return(
        <div>
        <Navbar/>
        <div className='home-container'>
        <h1 className='home'>JOIN US FOR AN UNFORGETTABLE EVENT EXPERIENCE</h1><br/>
        <div className='text'>
        <p>Get ready for an event that will leave you breathless! Our upcoming event promises to be an extraordinary</p>
        <p>experience, filled with captivating moments, exhilarating performances, and unforgettable memories.</p>
        </div>
        <br/><br/>
        <h5><Link to='/Events'><button type="submit" className='but-book'>BOOK NOW</button></Link></h5>
        </div>
        </div>
    );
}
export default Home;