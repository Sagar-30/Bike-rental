import {useState} from 'react';
import {Alarm,GeoAlt,Envelope,Headset} from "react-bootstrap-icons";

import './contactUs.css'

export default function Contact(){
    const [name, setname] = useState();
    const [email, setemail] = useState();
    const [message, setmessage] = useState();
    function handleName(e){
     setname(e.target.value);
    }
    function handleEmail(e){
        setemail(e.target.value);
       }
       function handleMessage(e){
        setmessage(e.target.value);
       }
    function handleSublit(e){
        e.preventDefault();
     if(name === '' || email === '' || message === ''){
        alert('Please fill all fields');
     }
     else{
        alert('Message Sent successfully');
     }
    }

    return(
        <section> 
   
 <div className='contact-form-main-section'>
    <div className='contact-form-section'>
        <h1>Drop us a line</h1>
    <form action="">
        <label for="Name">Full Name</label>
        <input type="text" name="Name" id="Name" placeholder='What is your full name?' onBlur={handleName}/>
        <label for="Email">Email Address</label>
        <input type="email" name="Email" id="Email" placeholder='you@gmail.com' onBlur={handleEmail} />
        <label for="Message">Message</label> <br />
        <textarea name="Message" id="Message" cols="30" rows="10" placeholder='Write your Message' onBlur={handleMessage}></textarea>
      <button onclick={handleSublit}>Submit</button>   
    </form>
    </div>
    <div className='contact-photo-section'>
    <img src="https://marvelapp.com/static/illustration@2x-85cce263ddf60035c6702cc57dd1fc2a-87cc6.jpg" alt="Contact Us" />
    </div>
 </div>
       <div className='contact-Map-Section'>
       <div className="mapouter">
    <div className="gmap_canvas">
         <iframe className="gmap_iframe"
      style={{ frameborder:"0" ,scrolling:"no", marginheight:"0", marginwidth:"0",float:'left',padding:'1rem'}}
      src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=2880 Broadway, New York&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
     </iframe>
     <a style={{display:'none'}} href="https://embed-googlemap.com">embed-googlemap.com</a>
     </div>
         </div>

<div className="contact-map-text">
       <h6><GeoAlt style={{color:'green',height:'1.5rem',width:'auto',marginRight:'.5rem'}} /> Our Office Address</h6>
       <p>plot - 102 , Behind Sterling city park New Delhi -121102</p>
       <h6><Envelope style={{color:'green',height:'1.5rem',width:'auto',marginRight:'.5rem'}} /> General Enquiry</h6>
       <p>sagar302001@gmail.com</p>
       <h6><Headset style={{color:'green',height:'1.5rem',width:'auto',marginRight:'.5rem'}} /> Call Us</h6>
       <p>+91-9350572047</p>
       <h6><Alarm style={{color:'green',height:'1.5rem',width:'auto',marginRight:'.5rem'}} /> Our Timing</h6>
       <p>Mon - Sun: 10:00AM - 9:00PM</p>
</div>

        </div>
   
    </section>

    )
}