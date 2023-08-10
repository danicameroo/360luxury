import Logo360 from '../../Images/Logo360.png'
import { Link } from "react-router-dom";
import "./NavBar.css"

const NavBar = () => {    
    return(
        <div className='MenuNav'>
            <img src={Logo360} className='imgNav' alt='' />
            <div>
                <ul className='navegationNav' >
                    <Link className='linkNav' to='/'><li className='listNav'>Home</li></Link>
                    <Link className='linkNav' to='/aboutUs'><li className='listNav'>About Us</li></Link>
                    <Link className='linkNav' to='/packages'><li className='listNav'>Packages</li></Link>
                    <Link className='linkNav' to='/categoria/Romance'><li className='listNav'>Book Now!</li></Link>
                    <Link className='linkNav' to='/categoria/Romance'><li className='listNav'>FAQ's</li></Link>
                </ul>
            </div>
        </div>
    );

};

export default NavBar