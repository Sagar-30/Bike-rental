import {Percent,Gem,ShieldShaded,Scooter} from 'react-bootstrap-icons';
import './aboutmodule.css';
import {useState} from 'react';
import Providing from '../../components/Providing/providingcomponent.jsx'
import Popular from '../../components/popular/popularcomponent' 

export default function About(){
  const [team, setteam] = useState([{'id':1,'img':'https://media.istockphoto.com/id/1399565382/photo/young-happy-mixed-race-businessman-standing-with-his-arms-crossed-working-alone-in-an-office.jpg?s=612x612&w=0&k=20&c=buXwOYjA_tjt2O3-kcSKqkTp2lxKWJJ_Ttx2PhYe3VM=','position':'Co-Founder','name':'Sagar Kaushik','phone':'+91-2344555433','email':'sagar302001@gmail.com'},
                                  {'id':2,'img':'https://img.freepik.com/free-photo/businessman-staring-through-window-close-up_1098-238.jpg?size=626&ext=jpg&ga=GA1.1.1413502914.1697068800&semt=ais','position':'Majdoor','name':'Utkarsh Pandita','phone':'+91-2344555433','email':'sagar302001@gmail.com'},
                                  {'id':3,'img':'https://img.freepik.com/free-photo/man-typing-his-phone_23-2147574170.jpg?1','position':'Marketing Manager','name':'Gaurav Kumar','phone':'+91-2344555433','email':'sagar302001@gmail.com'},
                                  {'id':4,'img':'https://img.freepik.com/free-photo/smiling-african-american-businessman-talking-phone-with-newspaper-cup-coffee-office_231208-764.jpg','position':'Head Operations','name':'Himanshu Pandey','phone':'+91-2344555433','email':'sagar302001@gmail.com'},
                                  ]);
  return(
    <section className="about-module-top-section">
    <div className='about-module-top-text'>
      <h3>About <br /> Just Rent It</h3>
    </div>
      <div className='about-module-benifits'>
        <div className='about-module-benifits-div1'>
          <p><Percent style={{height:'2rem',width:'auto'}} /></p>
          <h3>Smart Mobility With Big Savings</h3>
          <p>Smart mobility encompasses a wide range of innovations and technologies that leverage data, connectivity, and sustainability to enhance transportation. From ride-sharing and electric vehicles to predictive analytics for traffic management, this paradigm shift is not only changing the way we commute but also how we think about mobility.</p>
          </div>
        <div className='about-module-benifits-div2'>
          <p><Gem style={{height:'2rem',width:'auto'}} /></p>
          <h3>Designed For The Modern World</h3>
          <p>This design philosophy recognizes the dynamic nature of the contemporary era, where technology, lifestyles, and the global landscape are in a constant state of evolution. To be "Designed For The Modern World" means embracing change and embracing solutions that are not only functional but also sustainable and inclusive.</p>
          </div>
        <div className='about-module-benifits-div3'>
          <p><ShieldShaded style={{height:'2rem',width:'auto'}} /></p>
          <h3>Insured &Licensed Rental Services</h3>
          <p>Insured rental services provide peace of mind to users, offering protection against unexpected events and accidents. Whether you're renting a car for a weekend getaway, equipment for a home improvement project, or a space for your business, knowing that you're covered in case of mishaps can make the rental experience much more comfortable.</p>
          </div>
      </div>
      <Popular />
      <Providing />
      <div className='about-module-team'>
        <div className='about-module-team-top'>
          <p><Scooter style={{height:'2rem',width:'auto'}} /></p>
        <h3>Meet The Team</h3>
          </div>
        <div className='about-module-team-bottom'>
          {
            team.map((data)=>(
              <div key={data.id} className='top-about-card'>
                <div className='top-about-card-img'>
                <img src={data.img}></img>
                </div>
                <div className='top-about-card-bottom'>
                <p>{data.position}</p>
                  <h4>{data.name}</h4>
                  <hr />
                  <p>{data.phone}</p>
                  <p>{data.email}</p>
                </div>
              </div>
          ) )
                     }
          </div>
      </div>
    </section>
  )
    }