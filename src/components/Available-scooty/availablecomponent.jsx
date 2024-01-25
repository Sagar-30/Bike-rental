import {useState , useEffect} from 'react';
import { Gem, PeopleFill , ShieldShaded ,LightningCharge ,CurrencyRupee , } from "react-bootstrap-icons";
import {BrowserRouter , Link ,Routes , Route } from 'react-router-dom'
import './availablecomponent.css';

export default function Available(){ 
    const [available , setavailable] = useState([{"id":1,"model":"Model 2017","name":"Panther 500","img":"https://wide.piaggiogroup.com/articles/products/vespa-gts-la-nuova-gamma-2019/foto14.jpg", "quality":{"one":"Maximum comfert for urban mobility", "two":"Ideal for group tours and long journeys", "three":"Include a security chain","four":"Powerfull brushless HUB 1000W Engine",},"Price":"600/day"},
    {"id":2,"model":"Model 2021","name":"Panther 500","img":"https://5.imimg.com/data5/SELLER/Default/2021/5/RU/XV/NK/26617893/white-520x420.jpg", "quality":{"one":"Maximum comfert for urban mobility", "two":"Ideal for group tours and long journeys", "three":"Include a security chain","four":"Powerfull brushless HUB 1000W Engine",},"Price":"800/day"},
    {"id":3,"model":"Model 2012","name":"Panther 500","img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwIT8BdIjYuzTduQtAAsVsDXdH0ZU1lnbXw2_foxgEcLG-3USv9_y4Bnrc5w4PZdSiyX4&usqp=CAU", "quality":{"one":"Maximum comfert for urban mobility", "two":"Ideal for group tours and long journeys", "three":"Include a security chain","four":"Powerfull brushless HUB 1000W Engine",},"Price":"500/day"},
    ])
    return(
        <div className="cards-wrapper"> 
            {
             available && available.map(data=>(
                <div key={data.id} className="card">
          <img src={data.img} className="card-img-top" alt="..." />
          <div className="card-body available-bottom-div">
            <h5 className="card-title">{data.model}</h5>
            <p className="card-text">{data.name}</p>
            <hr />
            <p><Gem />  {data.quality.one}</p>
            <p><PeopleFill /> {data.quality.two}</p>
            <p><ShieldShaded /> {data.quality.three}</p>
            <p><LightningCharge /> {data.quality.four}</p>
            <h4>Rent from: <CurrencyRupee />{data.Price}</h4>
            <p></p>
            
            <Link to="/rent" className='available-bottom-div-btn'><span>View more</span></Link>
            
            <p></p>
          </div>
        </div>
             ))
            } 
            </div>
    )
}