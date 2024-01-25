import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Navbar from './components/Navbar/navbarcomponent.jsx'
import MainSection from './components/Maincomp/maincomponent.jsx'
import Location from './components/location-search/locationcomponent.jsx'
import Rent from './components/Rent-section/Rentcomponent.jsx'
import Providing from './components/Providing/providingcomponent.jsx'
import Available from './components/Available-scooty/availablecomponent.jsx'
import Includes from './components/includes/includecomponent'
import Popular from './components/popular/popularcomponent' 
import WhyUs from './components/Why-us/whyuscomponent'
import Contact from './components/contact/contactcomponent'
// import CardSlider from './components/shoppinng/shoppingcomponent'
import Footer from './components/footer/footercomponent'
import Header from './components/Header/headercomponent.jsx'
import MainNavbar from './components/Navbar/mainnavbar.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <hr />
      <MainNavbar />
       <hr />
     <Footer /> 		
  </React.StrictMode>
)