import {Search} from 'react-bootstrap-icons' 
import {useState} from 'react';
import {Link,useNavigate} from 'react-router-dom'
import './locationcomponent.css'
export default function Location(){
    const [start , setstart] = useState('');   
    const [end , setend] = useState(''); 
    const[city,setcity] = useState('');
  let Navigate = useNavigate();
  
    function Handlestart(e){
        setstart(e.target.value);
    }
    function HandleEnd(e){
        setend(e.target.value); 
    }
  function handleCity(e){
    setcity(e.target.value);
    console.log(e.target.value);
  }
    function handleSearch(){
        if(start>end){
            alert('Start date must be before End date');
        }
          else if(city===''){
            alert('Please Select City');
          }
      else if(start===''){
        alert('Please Select Start Date');
      }
      else if(end===''){
        alert('Please Select End Date');
      }
      else{
        Navigate("/rent");
      }
    }
  // if (redirect) {
    
  // }
    return(
        <section className="location-top-section">
            <div className="location-left-div">
                 <div className="location-left-div-text">
                    <p>Quick Search</p>
                 </div>
                 <div className="location-left-div-cities" >
                    <dl>
                        <dt>Your Location</dt>
                    <dd>
                    <select name="city" id="city" onClick={handleCity}>
                        <option value="">Select</option>
                        <option value="Faridabad">Faridabad</option>
                        <option value="Delhi">Delhi</option>
                        <option value="Ghaziabad">Ghaziabad</option>
                        <option value="Noida">Noida</option>
                        <option value="Jammu">Jammu</option>
                    </select>
                    </dd>
                    </dl>
                    </div>
                    <div className="location-left-div-start-date"> 
                        <dl>
                            <dt>Start Date</dt>
                            <dd><input type="date" name="Start" id="Start" onBlur={Handlestart} required/></dd>
                        </dl>
                    </div>
                    <div className="location-left-div-end-date">
                        <dl>
                            <dt>End Date</dt>
                            <dd><input type="date" name="End" id="End" onBlur={HandleEnd} /></dd>
                        </dl>
                    </div>
                 <div className="location-left-div-search-icon">
                 <span onClick={handleSearch}>{<Search style={{ width: '50px', height: '2rem' }} className="location-search" />}</span> 
                 </div>
            
            </div>
          
        </section>
    )
}