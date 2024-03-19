import '../Footer/Footer.css';
import { Link } from 'react-router-dom'; 

function Footer()
{
  return(
   <div className='footer1'>
   <footer class="flex-rw">
   <ul class="footer-list-top">
   <li>
   <h4 class="footer-list-header">Services</h4></li>
   <li><a class="generic-anchor footer-list-anchor">Event Management</a></li>
   <li><a class="generic-anchor footer-list-anchor">Design & Concept</a></li>
   <li><a class="generic-anchor footer-list-anchor">Booking Tickets</a></li>
   <li><a class="generic-anchor footer-list-anchor">Event Sourcing</a></li>
   </ul>
   <div className='line'></div>
   <ul class="footer-list-top">
   <li>
   <h4 class="footer-list-header">About Us</h4></li>
  <li><a class="generic anchor footer-list-anchor">Our Vision</a></li>
  <li><a class="generic anchor footer-list-anchor">Our Mision</a></li>
  <li><a class="generic anchor footer-list-anchor">Meet The Team</a></li>
   </ul>
   <div className='line'></div>
   <ul class="footer-list-top">
   <li id='help'>
   <h4 class="footer-list-header">PLEASE HELP ME</h4></li>
   <li><a class="generic-anchor footer-list-anchor" itemprop="significantLink">FAQs</a></li>
    <li><a class="generic-anchor footer-list-anchor" itemprop="significantLink">For Enquiry</a></li>
    <li><a class="generic-anchor footer-list-anchor">Raise a Complaint</a></li>
    </ul>
    <div className='line'></div>
    <ul className='footer-list-top'>
    <li>
    <br/>
    <h1>Contact Us</h1>
    <a id='contact' class="generic-anchor footer-list-anchor">Call Us : +91 7895461230</a>
    </li>
    <br/>
    <li>
    <a id='locator' class="generic-anchor footer-list-anchor">Visit Us @ Anna Nagar,<br/>&nbsp; Chennai, TN 600014</a>
    </li>
    </ul>
    </footer>
    <section className="small">
   <Link to='/Privacy'><p className='priv'>Privacy policy</p></Link>
    <div className='line1'></div>
    <Link to='/Terms'><p className='priv1'>Terms & Conditions</p></Link>
    <div className='line1'></div>
    Cookie Center
    <div className='line1'></div>
   Security & Safety
   <div className='line1'></div>
   Don't sell Personal Information
   <div className='line1'></div>
   © 2023 EVENTGO Corporation
    </section>
   
   </div>
  )
}
export default Footer