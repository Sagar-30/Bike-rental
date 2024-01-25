import {Person, List ,XLg ,TelephoneFill } from 'react-bootstrap-icons';
import {  EnvelopeFill , Facebook ,Instagram, Twitter, Github} from 'react-bootstrap-icons';
import {BrowserRouter , Link ,Routes , Route, Outlet } from 'react-router-dom'
import {useState} from 'react';
import "./navbarcomponent.css";

export default function Navbar(){
  const [clicked, setclicked] = useState(true);
  function HandleNavbarClick(){
      setclicked(!clicked);
  } 
    return(
      <>
        <section className="navbar-section-main">
            <div className="navbar-icon-div">
                  <p><b>Just rent it</b></p>
            </div>
            <div className="navber-links-div">
               
                <ul>
                    <li ><Link to="/home">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/rent">Rent</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li><Link to="/login">{<Person />}</Link></li>
                </ul>                 
            </div>
             <span className='Navbar-hamburger-div'> <List style={{height:'2rem', width:'50px',margin:'0 2rem'}} className='Navbar-hamburger' onClick={HandleNavbarClick} /></span>
        </section>
              <section className='responsive-navbar-main' style={{display: clicked ? 'none' : 'unset'}} >
                <div className='responsive-navbar-main-box'>
                  <div className='responsive-navbar-icon-div'>
                    <span><XLg onClick={HandleNavbarClick} /></span>
                    </div>
                  <div className='responsive-navbar-links-div'>
                    
                    <ul onClick={HandleNavbarClick}>
                        <li><Link to="/home" >Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/rent">Rent</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                        <li><Link to="/login">{<Person />}</Link></li>
                    </ul>
                   
                    </div>
                  <div className='responsive-navbar-contact-div'>
                    <div className='responsive-navbar-contact-text'>
                      <p>Get in touch</p>
                      <div className='responsive-navbar-contact-text-icons'>
                       <span><Facebook /></span>
                       <span><Instagram /></span>
                       <span><Twitter /></span>
                       <span><Github /></span>
                        </div>
                    </div>
                    <div className="responsive-navbar-contact-icons">
                      <p>{<TelephoneFill />}  Call us on - +919350572047</p>
                      <p>{<EnvelopeFill />}  Email : sagar302001@gmail.com</p>
                      </div>
                  </div>
                </div>
              </section>
        </>
    )
}
