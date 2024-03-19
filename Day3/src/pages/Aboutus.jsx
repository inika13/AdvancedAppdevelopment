import Navbar from "../components/Navbar/Navbar"
import {motion} from "framer-motion";
import {useRef,useEffect,useState} from "react";
import images from '../pages/images';
import '../assets/css/Aboutus.css';
import Footer from '../components/Footer/Footer';
function Aboutus()
{
   const[width,setWidth]=useState(0);
   const carousel=useRef();
   useEffect(()=>{
   console.log(carousel.current);

   },[]);
    return(
        
        <div>
        
        <Navbar/>
        <div className="About">
        <motion.div className="carousel">
        <motion.div  drag='x' className="inner-carousel">
       {images.map((image)=>{
        return(
            <motion.div className="item" key={image}>
            <img src={image} alt=""/>
            </motion.div>
        );

       })}
        
        </motion.div>
        
        </motion.div>
        <div className="ab">
        ABOUT US
        </div><br/>
        <div className="ab1">
        <h2>Our philosophy :</h2>
        <br/><p>Event Planner Ltd is an event logistics and marketing company which was formed back in 2013. The company offers A-Z event planning services from 
        a team of experienced and energetic event planners, suppliers, venues and more. One of the main reasons behind the 
        success of Event Planner is the fact that the team does not charge fees to its clients! With the number of events we organise, 
        Event Planner Ltd does not need to add exorbitant fees and mark-ups to make its profit margins. This ensures that our clients list,
         which is constantly growing, make regular use of our services.</p>
        <br/> <p>The Event Planner team does not charge any fees to its clients*. Yes, this might sound strange. However, the company earns its 
         profits through its suppliers, with whom a very strong relationship has been built. This does not mean that the costs are up-marked 
         to make up for the fee. On the contrary, they are less than it would cost a company when booking directly. We know it sounds too 
         good to believe, but over the years this formula has helped the Event Planner team become the success story they are today. This 
         has not in any way reduced the level of professionalism with which the services are carried, as shown by the large number of local
          and international clients,  who work with us on a regular basis.</p>
        <br/>
        <h2>The Team :</h2>
        <p>The Event Planner team is made up of a mix of people. James and Ilona take care of corporate events. Josette is the wedding guru.
         Nicole is the creative one. Sergio is the merchandise expert. In addition to this group of people, a large support team helps out in
          everything the company does, in office work to on-site logistics planning. One thing we can truly say about our team is that we are
           very passionate about our job!

        </p><br/>
        <h2>How can we help you organise a successful event?</h2><br/>
        <p>1.      A-Z event planning. We shall work on your event from beginning to end. You may relax and leave all the logistics to us.</p><br/>

        <p>2.      Venue Consultancy. Finding a venue in Malta is not as easy as people make it sound. While offering an extensive list of venues on our website, we know and have contact with hundreds of venues around the Maltese Islands, one of which will most definitely fit into your event scenario.</p><br/>
        
        <p>3.      We organise: product launches, gala receptions, seminars and conferences, staff events, awards nights, team building events, B2B and B2C networking events, weddings and more.</p><br/>
        
        <p>4.      We give you more: transport services, photography, videography, furniture rental, entertainment, sound and lighting, branding, security, RSVP communication and follow up, staff, sms/email marketing, handle VIPs, catering and any event-related consultancy.</p><br/>
        <Footer/>
        </div>
        </div>
        </div>
    )
}
export default Aboutus