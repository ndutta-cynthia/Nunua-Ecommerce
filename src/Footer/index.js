import './index.css';
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { SiWhatsapp } from "react-icons/si";
import { RiLinkedinFill } from "react-icons/ri";


const Footer = ()=>{
    return(
        <>
        <div id='footer'>
        <div className='services'>
        <div id='name'>Nunua Ecommerce</div>
        <div id='FAQs'>
            <div>Welcome</div>
            <div>Our Shop</div>
            <div>Weekly Sakes</div>
        </div>
        <div id='FAQs' >
            <div>Services</div>
            <div>Weakly Theme</div>
        </div>
        <div id='FAQs'>
            <div>Show Case</div>
            <div>Support</div>
        </div>
        <div id='FAQs'>
            <div>About Us</div>
            <div>Contact Us</div>
            <div>Shop</div>
        </div>
        </div>
        <div id='line'>
        </div>

        <div id='icons'>
            <div className='icon1'><FaFacebookF /></div>
            <div className='icon1'><FaInstagram /></div>
            <div className='icon1'><SiWhatsapp /></div>
            <div className='icon1'><RiLinkedinFill /></div>
        </div>

        </div>
        
        </>
    );
};
export default Footer;