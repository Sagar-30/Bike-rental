import { Scooter } from "react-bootstrap-icons"
import './Rentcomponent.css'
export default function Rent(){ 
    return(
        <section className="Rent-section-main">
        <div className='Rent-section-top'>
            <span ><Scooter style={{ width: '50px', height: '2rem' ,margin: '1rem'}} /></span>
            <h5>It’s Really Easier To Rent</h5>
            <p>We offer bikes and electric scooters for renting at low prices</p>
        </div>
     <div className="Rent-section-bottom">    
        {/* <div>
            <img className="Rent-section-bottom-img1" src="https://img.freepik.com/premium-vector/person-riding-electric-scooter-woman-driving-eco-moped-rider-helmet-sit-bike-seat-student-with-backpack-travel-by-modern-transport-flat-vector-illustration-isolated-white-background_633472-244.jpg?w=2000" alt="Scooter" />
        </div> */}
        <div>
            <p>Search a bike or scooter</p>
            <img className="Rent-section-bottom-imges" src="https://media.istockphoto.com/id/1336144900/vector/female-motorcyclist-riding-on-pink-scooter-motorbike-a-vector-illustration.jpg?s=612x612&w=0&k=20&c=hF_ICuxVba28S5XQ_6XIvM28Bewffd0JYY9TRlHXDos=" alt="choose bike" />
        </div>
        <div>
            <p>Choose a bike or scooter</p>
            <img className="Rent-section-bottom-imges" src="https://img.freepik.com/premium-vector/young-adult-boy-riding-scooter-free-vector-illustrations_946129-87.jpg?w=2000" alt="choose bike" />
        </div>
        <div>
            <p>Ride freely and Enjoy</p>
            <img className="Rent-section-bottom-imges" src="https://img.freepik.com/free-vector/young-man-woman-couple-riding-scooter-transport-symbol-moped-motorcycle_1284-44190.jpg" alt="choose bike" />
        </div>
     </div>
     
        </section>
    )
}