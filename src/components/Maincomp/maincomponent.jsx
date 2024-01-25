import './maincomponent.css' 
import { Scooter, CurrencyRupee} from 'react-bootstrap-icons'
export default function MainSection(){
    return(
        <section className="main-section-top">
          <div className='main-section-transparent-div'>
          </div>
          <div className='main-section-text-div'>
            <p>Book Scooty at your finger tips</p> 
            <button>{<Scooter />} Book a Happy ride now</button> 
          </div>
              <div className='main-section-circle-div'>
                <p>As low as... <br /> <span><CurrencyRupee />400/day</span></p>
              </div>
            </section> 
    )
}
