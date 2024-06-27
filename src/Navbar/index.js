import './index.css'
import { CiInstagram } from "react-icons/ci";
import { BsTwitterX } from "react-icons/bs";
import { CiFacebook } from "react-icons/ci";
import { MdWifiCalling3 } from "react-icons/md";

const Nav = ()=>{
    return(
        <>
        <div id='top-nav'>

        <div id='nav-icons'>
        <div>
            <h2>Follow us</h2>
        </div>
        <div id='instagram'>
        <CiInstagram  alt='instagram'/>
        </div>
        <div id='twitter'>
        <BsTwitterX alt='twitter' />
        </div>
        <div id='facebook'>
        <CiFacebook alt='facebook' />
        </div>
        </div>

        <div id='offer'>
            <h2>Sign up get 20% Off for all collection</h2>
        </div>

        <div id='contact'>
            <div><MdWifiCalling3/></div>
            <div>1(100) 234-5678</div>
        </div>
        </div>
        </>
    )
}
export default Nav;