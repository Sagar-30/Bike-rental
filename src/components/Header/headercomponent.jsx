import './headercomponent.css' 
import { TelephoneFill , EnvelopeFill , Facebook ,Instagram, Twitter, Github} from 'react-bootstrap-icons';

export default function Header(){
    return(
        <section className='header-Main-section'>
            <div className="header-contact-div">
            <p>{<TelephoneFill />}  Call us on - +919350572047</p>
            <p>{<EnvelopeFill />}  Email : sagar302001@gmail.com</p>
            </div>
            <div className="header-social-div"> 
              <a href="#">{<Facebook />}</a>
              <a href="#">{<Instagram />}</a>
              <a href="#">{<Twitter />}</a>
              <a href="#">{<Github />}</a>              
            </div>           
        </section>
    )
} 