import { Check2Square } from "react-bootstrap-icons";
import './providingcomponent.css'; 

export default function Providing(){
    return( 
        <section className='providing-section-main'>
            <div className='providing-section-left'>
                <p>Just Rent it - The company to offer the best scooter & bike rental services</p>
                <img src="https://img.freepik.com/premium-photo/just-look-that-beautiful-young-couple-riding-scooter-together-while-happy-woman-pointing-away-smiling_425904-30687.jpg" alt="Happy customers" />
            </div>
            <div className='providing-section-right'>
                <img src="https://img.freepik.com/free-photo/happy-stylish-couple-rides-modern-motorbike-outdoors_171337-18641.jpg?w=2000" alt="offering" />
                <h2>Renting Service Features</h2>
                <p>We give you great service in affordable price</p>
                <p>{<Check2Square />} Free booking cancellation up to 15 hours</p>
                <p>{<Check2Square />} We offer 24/7 road rental assistance</p>
                <p>{<Check2Square />} More than 350.000 satisfied customers</p>
                <p>{<Check2Square />} Fleet of over 8,000 brand new scooters & bikes</p>
            </div>
        </section>
    )
}