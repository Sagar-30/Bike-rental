import { Scooter, CloudArrowDown, EmojiSmile ,People } from "react-bootstrap-icons" 
import './popularcomponent.css'
export default function Popular(){ 
    return(
        <section className="Popular-section-main">
       <div>
        <span><Scooter style={{width:'auto' , height:'7rem' , padding:'1rem' , color:'white'}} className='Popular-section-main-icons' /></span>
        <p>3870 <br/> Scooters & Bikes</p> 
       </div>
       <div>
        <span><CloudArrowDown style={{width:'auto' , height:'7rem' , padding:'1rem' , color:'white'}} className='Popular-section-main-icons' /></span>
        <p>1290 <br/> Bookings Served</p>
       </div>
       <div>
       <span><People style={{width:'auto' , height:'7rem' , padding:'1rem' , color:'white'}} className='Popular-section-main-icons' /></span>
        <p>14k <br/> App Downloads</p>
       </div>
       <div>
       <span><EmojiSmile style={{width:'auto' , height:'7rem' , padding:'1rem' , color:'white'}} className='Popular-section-main-icons' /></span>
        <p>6400 <br/> Happy Customers</p>
       </div>
        </section>
    )
}