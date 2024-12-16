import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
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