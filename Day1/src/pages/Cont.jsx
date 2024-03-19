import React from 'react'
import Navbar from '../components/Navbar/Navbar';
import '../assets/css/Cont.css';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
function Cont() {
    
    return (
        <>

            <Navbar/>
            <div className='abouts'>
            <div className='main-wrapper'>
                
                <section className='contact padding'>
                <div className='container shadow flexSB'>
                <div className='right row'><br/>
                <p>Ready to find out more?<br/><br/>
                To find out more information then call on 8796546756</p>
                <p>or contact  us for further details.</p><br/><br/>
                <div className='items grid2'>
                <div className='box'>
                <h4> Call Us:</h4>
                <p>8796547561</p>
                </div><br/>
                <div className='box'>
                <h4>Email Us:</h4>
                <p>eventgo@gmail.com</p>
                </div><br/>
                <div className='box'>
                <h4>Find Us at:</h4>
                <p>EventGo, Anna Nagar, Chennai</p>
                </div><br/>
                <div className='felxSB'>
                
               <Link to='/Form'><button type='submit' className='auth-btn app-x-shadow'>FEEDBACK</button></Link>
               
                </div>
              
              
                </div>
                </div>
                </div>
                </section>
               
            
            </div>
            <div className='faq'>
            <h1>FAQ's</h1>
            <h2>What is EventGo?</h2>
            EventAvenue is an all-in one online solution that caters to different community segments. You can use it to manage events, exhibitions and webinars. You can also use it to collect donations and applications and fees for educational programs.<br/>
            <br/>
            <h2>What types of modules are available with EventGo?</h2>
            EventAvenue compromises of 6 modules - Conference Management, Online Ticketing, Webinar Registration, Donation Collection, Education Fee Collection And Exhibitor Management.<br/>
           <br/>
            <h2>What types of payment options are available with EventGo?</h2>
            EventAvenue has a wide array of payment options such as credit cards, debit cards, net banking, cash cards and mobile payments.<br/>
            <br/>
            <h2>Can you manage multiple events using EventGo's solutions?</h2>
            Whether you are using the Conference Management solution to organize conferences, the Online Ticketing solution to manage sporting events or the Webinar Management solution to host webinars, the solution has be designed to manage single and multiple events efficiently.<br/>
            <br/>
            <h2>What are the benefits of EventGo?</h2>
            Book or register from anywhere, anytime: EventAvenue keeps your business open 24x7. This means your exhibitors or attendees can now book or register at anytime. They no longer need to call, come in or wait for representatives, as long as they have an internet connection they can book or register from the comfort of their offices and homes.<br/><br/>

Pay online: Your attendee or/and exhibitors will never face a situation where they cannot register because they do not have a suitable payment method. With EventAvenue, your attendees and exhibitors can pay using any of the following payment options. View list<br/><br/>

Receive reminders: With EventAvenue's easy Email functionality, you can pre-create custom reminder mails to be automatically sent just days before the event. You can also include any information you think is necessary to make the event a success.<br/><br/>

Group registrations: Attendees can 'Group Register' for events. For Example: There is an International Hotel Exhibition, a team of 10 individuals from the hotel 'Hilton' plan on attending. Any one person can register and pay for the entire contingent going from the hotel.<br/><br/>

Auto-populate registration forms: You can activate the auto-populate feature to make the registration process for previously registered attendees easier. With this feature, once the attendee or exhibitor enter his/her email id and password, his/her information will auto-populate.<br/><br/>

Failed/Incomplete registration: Send an email to an attendee or exhibitor when he fails to complete the registration process. You can also provide your attendee with a link to finish the registration instead of him starting the process from the beginning in the email.<br/><br/>

Direct transfer to mailing list: Using EventAvenue's easy features and functionalities, you can pre-set a 'Sold Out' message to display once your registration limits have been reached. You can also activate the 'Wait List' option to display so that attendee can include their names on the wait list<br/><br/>
<Footer/>
            </div>
            </div>
           
            
            
        </>
    )
}

export default Cont
