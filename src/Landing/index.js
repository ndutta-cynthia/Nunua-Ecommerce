import './index.css'
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { MdOutlineShoppingBag } from "react-icons/md";
import { IoMdPerson } from "react-icons/io";
import back from './back.webp'


const Landing= () =>{
return(
    <>
    <div id='landing'>
        <div id='topnav'>
        <div id='title'>Nunua Ecommerce</div>
        <div>
        <ul id='nav-list'>
            <li>Home</li>
            <li>Products</li>
            <li>Categories</li>
            <li> Contact</li>
            <li>Blog</li>
        </ul>
        </div>
        <div id='icons'>
            <div><CiSearch /></div>
            <div><CiHeart /></div>
            <div><MdOutlineShoppingBag /></div>
            <div><IoMdPerson /></div>
        </div>
        </div>

        <div id='landong-info'>
            <div id='info-heading'>
            <input placeholder="FASHION IDEAS" type="text" id='input' />
                <div>
                <h1>Modern Fashions</h1>
                <h1>Design Studio</h1>
                </div>
                <div>
                <p>
                    <span>Choosing the right clothe for yourselfwill add</span>
                    <br></br>
                    <span>elegance to your outlook</span>
                    <br></br>
                    <span>being cost effective</span>
                </p>
                <div id='shop-now'>
                    <div >
                        <button id='shop'>Shopnow  &rarr;</button>
                    </div>
                    <div>
                        Follow Instagram
                    </div>
                </div>
               
                </div>
            </div>
            <div>
                
            </div>

        </div>
        <div id='back1'>
            <img src={back}/>
        </div>
        <div id='back'>
            <img src={back}/>
        </div>
        

    </div>
    </>

)
};
export default Landing;