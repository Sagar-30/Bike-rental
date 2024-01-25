import './footercomponent.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {Scooter,Facebook,Instagram,Twitter,Telegram,ChevronRight,GeoAlt,Envelope,Headset} from "react-bootstrap-icons";
export default function Footer(){
    const [show, setShow] = useState(false);
    const [showTc, setShowTc] = useState(false);
    const [showPrice, setShowPrice] = useState(false);

    function sendEmail(){
        window.location = "mailto:sagar302001@gmail.com";
    }

return(
  <section className='footer-section-top'> 
  <div className='footer-section-div1'>
  <Scooter style={{height:'5rem',width:'5rem', textAlign:'center', margin:'1.5rem 4rem' }} />
  <p>We provide you the best Two wheeler in most affordable price and we also provide you safety Equipments with it.</p>
  <Facebook  className='footer-section-div1-icons' />
  <Instagram className='footer-section-div1-icons' />
  <Twitter className='footer-section-div1-icons' />
  <Telegram className='footer-section-div1-icons' />
  </div>
  <div className='footer-section-div2'>
  <h2>Our Locations</h2>
  <dl>
  <dt>Big Pyramid Avenue</dt>
  <dd>Plot-104,Faridabad <br /> +91-9350572047</dd>
  <dt>Avenger Town Park</dt>
  <dd>Plot-15,Gurgaon <br /> +91-9350572047</dd>
  <dt>Sterling city park</dt>
  <dd>Plot-86,Delhi <br /> +91-9350572047</dd>
  </dl>
  </div>
  <div className='footer-section-div3'>
  <h2>About US</h2>
  {/* <dl ><ChevronRight/> Contact us </dl> */}
  <dl variant="primary" onClick={() => setShow(true)} ><ChevronRight/> Read FAQs </dl>
  <dl variant="primary" onClick={() => setShowTc(true)} ><ChevronRight/> Terms & Conditions </dl>
  <dl variant="primary" onClick={() => setShowPrice(true)}><ChevronRight/> Our Pricing </dl>
    </div>
  <div className='footer-section-div4'>
  <h2>Get In Touch</h2>
  <p><GeoAlt /> plot - 102 , Behind Sterling city park New Delhi -121102</p>
  <p onClick={sendEmail} style={{cursor:'pointer'}}><Envelope /> sagar302001@gmail.com</p>
  <p><Headset /> +91-9350572047</p>
  </div>

    <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="custom-modal"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Frequently Asked Questions
          </Modal.Title>
        </Modal.Header>
        <Modal.Body >

<h6> How do I rent a bike from your website? </h6>
  <p>  To rent a bike, visit our website and browse our selection. Select the bike you want and follow the rental instructions.</p>
<h6> What are your rental rates and duration options?</h6>
   <p> We offer a range of rental rates and durations. You can find our pricing details on our website or by contacting our customer support.</p>
<h6> Is there a minimum age requirement for renting a bike?</h6>
   <p> Yes, there is a minimum age requirement for renting a bike. Typically, it's 18 years old, but it may vary depending on your location.</p>
<h6> Do I need to make a reservation in advance?</h6>
   <p> While walk in rentals are available, we recommend making a reservation in advance to ensure bike availability, especially during peak seasons.</p>
<h6> What payment methods do you accept?</h6>
   <p> We accept various payment methods, including credit cards, debit cards, and digital wallets. Check our website for a full list of accepted payment options.</p>
<h6> Is there a security deposit required for bike rentals?</h6>
   <p> Yes, we may require a security deposit, which is refundable upon the safe return of the bike.</p>
<h6> What safety measures are in place for bike rentals?</h6>
   <p> We provide well-maintained bikes and safety equipment. Helmets are included with every rental. Make sure to follow local traffic rules and regulations.</p>
<h6> Can I return the bike at a different location from where I rented it?</h6>
   <p> In most cases, you should return the bike to the same location where you rented it. Returning to a different location may incur additional fees.</p>
<h6> What happens if the bike is damaged during my rental period?</h6>
   <p> You are responsible for any damage to the bike during your rental. We recommend reviewing our rental agreement for details on liability and insurance.</p>
<h6> Can I cancel or modify my reservation?</h6>
    <p> You can typically cancel or modify your reservation, but check our cancellation policy for any fees or restrictions.</p>
<h6> What do I do in case of a flat tire or a mechanical issue during the rental?</h6>
    <p> If you encounter any issues with the bike, contact our customer support for assistance. We'll provide guidance on how to proceed.</p>
<h6> Do you offer guided bike tours or maps of local bike trails and routes?</h6>
    <p> Yes, we often provide information on bike routes and local attractions. We may also offer guided tours for an additional fee.</p>
<h6> What is your policy on late returns?</h6>
    <p> Please return the bike on time to avoid additional charges. If you anticipate being late, contact our customer support to discuss options.</p>
<h6> Are there any discounts available for group rentals or long-term rentals?</h6>
    <p> We may offer discounts for group rentals or long-term rentals. Contact our customer support for details on special rates.</p>
<h6> How can I contact your customer support for assistance?</h6>
    <p> You can reach our customer support team via email, phone, or the contact information provided on our website.</p>
        </Modal.Body>
      </Modal>


      <Modal
        show={showTc}
        onHide={() => setShowTc(false)} 
        dialogClassName="custom-modal"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Terms and Conditions for Just rent it 
          </Modal.Title>
        </Modal.Header>
        <Modal.Body >
        <p><b> Rental Agreement: </b> By renting a bike from [Your Company Name], you agree to the terms and conditions set forth in this agreement.</p>
<p><b> Rental Eligibility: </b> To rent a bike, you must be at least 18 years old and provide valid identification.</p>
<p><b> Reservation: </b> We recommend making a reservation in advance to secure your bike rental. Walk-in rentals are available but subject to availability.</p>
<p><b> Rental Duration: </b> Rental periods are based on hours or days, as specified in your reservation or rental agreement.</p>
<p><b> Payment: </b> We accept payment through various methods, including credit cards, debit cards, and digital wallets. Payment is due at the time of rental.</p>
<p><b> Security Deposit: </b> A security deposit may be required to cover potential damages or late fees. The deposit will be refunded upon the safe return of the bike.</p>
<p><b> Bike Condition: </b> You will receive a well-maintained bike in good working condition. Inspect the bike before use and report any issues to our staff.</p>
<p><b> Helmet Use: </b> For your safety, helmets are provided with every rental. It is your responsibility to wear the helmet while riding.</p>
<p><b> Safety and Regulations: </b> Comply with all local traffic rules and regulations while using our bikes. Safety is a top priority.</p>
<p><b>  Late Returns: </b> Return the bike on time to avoid additional charges. If you anticipate being late, contact us for instructions.</p>
<p><b>  Damage Responsibility: </b> You are responsible for any damage to the bike during your rental. Review our rental agreement for details on liability and insurance.</p>
<p><b>  Lost or Stolen Bikes: </b> Report lost or stolen bikes immediately. You may be responsible for the replacement cost of the bike.</p>
<p><b>  Cancellations: </b> If you need to cancel or modify your reservation, please do so in advance. Cancellation fees may apply.</p>
<p><b>  Group Rentals: </b> Discounts may be available for group rentals. Contact us for details on group rates and policies.</p>
<p><b>  Guided Tours: </b> We offer guided bike tours for an additional fee. Advance booking is recommended.</p>
<p><b>  Customer Support: </b> For assistance, contact our customer support via email, phone, or the provided contact information on our website.</p>
<p><b>  Privacy: </b> Your personal information is protected as outlined in our privacy policy. We do not share your data with third parties.</p>
<p><b>  Changes to Terms: </b> We reserve the right to modify these terms and conditions at any time. Please review our terms before each rental.</p>
<p><b>  Governing Law: </b> These terms and your rental are subject to the laws and regulations of [Your Jurisdiction].</p>
<p><b>  Disclaimer: </b> We are not responsible for any injury, loss, or damage while using our rental bikes. Ride at your own risk.</p>
<code>By renting a bike from Just Rent It, you acknowledge that you have read, understood, and agree to these terms and conditions. Failure to comply with these terms may result in the cancellation of your rental or additional charges.</code>
</Modal.Body>
      </Modal>


      <Modal
        show={showPrice}
        onHide={() => setShowPrice(false)}
        dialogClassName="custom-modal"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Bike Rental Pricing
          </Modal.Title>
        </Modal.Header>
        <Modal.Body >
<h6>Standard Bike Rental (per hour): </h6>
   <p> ₹50 - ₹100 per hour, depending on the type of bike (e.g., regular bicycle, city bike).</p>
<h6>Mountain Bike Rental (per hour):</h6>
   <p> ₹100 - ₹200 per hour for mountain bikes or specialized bikes.</p>
<h6>Full-Day Rental (24 hours):</h6>
   <p> ₹300 - ₹500 for a full-day rental, suitable for exploring the city or going on longer rides.</p>
<h6>Multi-Day Rentals (e.g., Weekend or Weeklong):</h6>
   <p> ₹1,000 - ₹2,000 for a weekend (2-3 days) or ₹2,500 - ₹5,000 for a week-long rental, offering flexibility and better rates for extended use.</p>
<h6>Guided Bike Tours:</h6>
   <p> ₹500 - ₹1,000 per person for guided bike tours that include a bike, helmet, and guided experience.</p>
<h6>Electric Bike Rental:</h6>
   <p> ₹150 - ₹300 per hour or ₹700 - ₹1,500 for a full-day rental of electric bikes.</p>
<h6>Child or Kids' Bikes:</h6>
   <p> ₹40 - ₹80 per hour for child-sized bikes.</p>
<h6>Accessories (e.g., Helmets, Locks):</h6>
  <p>  ₹20 - ₹50 per accessory, depending on the item.</p>
<h6>Group Discounts:</h6>
  <p>  Offer discounts for group rentals, such as 10% off for groups of 5 or more.</p>
<h6>Delivery and Pickup Service:</h6>
   <p> ₹100 - ₹200 for delivery and pickup services within a specified radius.</p>
<h6>Security Deposit:</h6>
   <p> ₹500 - ₹1,000 as a refundable security deposit for bike rentals.</p>
</Modal.Body>
      </Modal>

   </section>
  )
}
