import {useState} from 'react'
import { useCookies } from 'react-cookie'
import './App.css'

export default function Signup(){
  const[username,setusername,deleteusername] = useCookies('Name');
return(
   <section className='top-section-signup-page'>
  <div className="left-side-signup-page">
  <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNXH7fCmY0tBC2ULFu6ClvAcOdR5i89iiMe8CM20NICmitmy-jQVr6mR_BwJ9BCcKxNQo&usqp=CAU' alt='Bike'  />
     </div>
  <div className='right-side-signup-page'>
    <h2>Create Account</h2>
  <form>
  <input type='text' placeholder='Full Name'  />
  <input type='email' placeholder='abc@gmail.com'  />
  <input type='text' placeholder='Username'  />
  <input type='text' placeholder='password'  />
  <button>Create Account</button>
  </form>
  </div>
  </section>
  )
}