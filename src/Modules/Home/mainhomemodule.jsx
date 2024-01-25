import MainSection from '../../components/Maincomp/maincomponent.jsx'
import Location from '../../components/location-search/locationcomponent.jsx'
import Rent from '../../components/Rent-section/Rentcomponent.jsx'
import Providing from '../../components/Providing/providingcomponent.jsx'
import Available from '../../components/Available-scooty/availablecomponent.jsx'
import Includes from '../../components/includes/includecomponent'
import Popular from '../../components/popular/popularcomponent' 
import WhyUs from '../../components/Why-us/whyuscomponent'
import Contact from '../../components/contact/contactcomponent'
export default function MainHome(){
return(
   <section className='top-section-signup-page'>
     <MainSection />
     <Location /> 
     <Rent />
     <Providing /> 
     <Available />
      <Includes />
      <WhyUs />
      <Popular />
      <Contact />
  </section>
  )
}