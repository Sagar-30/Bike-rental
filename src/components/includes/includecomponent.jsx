import './includecomponent.css'
import 'font-awesome/css/font-awesome.min.css';
import { Headset , ShieldShaded ,X , SignMergeRight , CashCoin } from 'react-bootstrap-icons' 

export default function Includes(){
    return(
        <section className="include-Section-main">
         <div className="include-Section-top">
            <h3>Our Pricing Includes</h3>
            <p>Bikes & electric scooters for renting at low prices</p> 
         </div>
         <div className="include-Section-bottom">
           <div className="include-section-bottom-div2">
            <span><Headset style={{width:'auto' , height:'3.5rem' , margin:"1rem"}}/></span>
            <p>Assistence ..</p>
           </div>
           <div className="include-section-bottom-div3">
           <span><ShieldShaded style={{width:'auto' , height:'3.5rem' , margin:"1rem"}} /></span>
            <p>Insurence ...</p>
           </div>
           <div className="include-section-bottom-div4">
           <span><X style={{width:'auto' , height:'6rem' , margin:"0rem"}} /></span>
            <p>Cancellation </p>
           </div>
           <div className="include-section-bottom-div5">
           <span><CashCoin style={{width:'auto' , height:'3.5rem' , margin:"1.5rem"}} /></span>
            <p>Discounts ...</p>
           </div>
           <div className="include-section-bottom-div6">
           <span><SignMergeRight style={{width:'auto' , height:'3.5rem' , margin:"1rem"}} /></span>
            <p>Full Routes ...</p>
           </div>
         </div>
        
        </section>
    )
}