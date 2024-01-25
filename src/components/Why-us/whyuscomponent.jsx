import { Scooter } from 'react-bootstrap-icons'
import './whyuscomponent.css'

export default function WhyUs(){ 
    return(
        <section className="whyus-section-main">
        <div className="whyus-section-top">
            <span><Scooter style={{width:'auto' , height:'5rem' , padding:'1rem' }}/></span>
            <h3>Why Choose US </h3>
            <p>Look at available scooters & Bikes for you</p>
        </div>
        <div className="whyus-section-bottom">
            <div className="whyus-section-bottom-div1">
                <div><h2>Fully Insured <br />Rental Service</h2></div>
                <div><h2>Different Types <br />of Scooters</h2></div>
            </div>
            <div className="whyus-section-bottom-div2">
                <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSCgl_efo8j8fXeTXKiPIJp_HIaAJSAxPUhAd6MXMRevyzTct_A" alt="All benifits" />
            </div>
            <div className="whyus-section-bottom-div3">
            <div><h2>Smart Mobility <br />for Clients</h2></div>
                <div><h2>Designed for <br /> Modern World</h2></div>
            </div>
        </div>
        </section>
    )
}