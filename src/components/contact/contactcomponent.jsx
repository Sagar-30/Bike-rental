import './contactcomponent.css'
import { ArrowRight } from 'react-bootstrap-icons'
import {Link} from 'react-router-dom'
export default function Contact(){
    return(
        <section className='contact-section-main'>
        <div className='contact-section-div'>
        <p className='contact-first-p'>Call us to reserve your vehicle with us <br /> <span>+91-9350572047</span></p> 
        <hr></hr>
        <p className='contact-second-p'><a href="tel:+1234567890">Book Online Today</a>
</p>
        </div>
        </section> 
    )
}