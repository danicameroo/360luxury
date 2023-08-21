import LogoIcon from '../../Images/LogoIcon.png'
import Arrow from '../../Images/ArrowSmallIcon.svg'
import './Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
    return(
        <div className='Footer'>
            <div className='LogoMapFooter'> 
                <div className='LogoIcon'>
                    <img src={LogoIcon} alt="" />
                    <img src={Arrow} alt=""/>
                </div>
            </div>
            <div className='textMapFooter'>
                <p className='titleTextMapFooter'>360 Luxury Productions</p>
                <Link className='linkNav' to="/aboutUs?AboutUs=true"><p className='textTextMapFooter'>About Us</p></Link>
                <Link className='linkNav' to="/packages?Packages=true"><p className='textTextMapFooter'>Packages</p></Link>
                <Link className='linkNav' to="/booking?Book=true"><p className='textTextMapFooter'>Book Now!</p></Link>
                <p className='textTextMapFooter'>Contact Us</p>
            </div>
            <div className='textMapFooter'>
                <p className='titleTextMapFooter'>Home</p>
                <Link className='linkNav' to="/?WhyUs=true"><p className='textTextMapFooter'>Why Us</p></Link>
                <Link className='linkNav' to="/aboutUs?Mission=true"><p className='textTextMapFooter'>Mission</p></Link>
                <Link className='linkNav' to="/aboutUs?Vision=true"><p className='textTextMapFooter'>Vision</p></Link>
                <Link className='linkNav' to="/?Experiences=true"><p className='textTextMapFooter'>Experiences</p></Link>
                <Link className='linkNav' to="/?Gallery=true"><p className='textTextMapFooter'>Gallery</p></Link>
            </div>
            <div className='textMapFooter'>
                <p className='titleTextMapFooter'>Booking</p>
                <Link className='linkNav' to="/booking?BookVideo=true"><p className='textTextMapFooter'>How To Book<br/>(With video)</p></Link>
                <Link className='linkNav' to="/booking?Booking=true"><p className='textTextMapFooter'>Book</p></Link>
            </div>
            <div className='textMapFooter'>
                <p className='titleTextMapFooter'>Contact</p>
                <p className='textTextMapFooter'>Contact Information</p>
                <Link to="https://instagram.com/360luxuryproductions?igshid=OGQ5ZDc2ODk2ZA==" className='linkNav' target="_blank"><p className='textTextMapFooter'>Instagram Profile</p></Link>
                <Link to="https://maps.app.goo.gl/xAhKCnyDvEQEEDf56?g_st=iw" className='linkNav' target="_blank"><p className='textTextMapFooter'>Google Maps Profile</p></Link>
                <Link to="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcRzBWKlkdckbKTLJCjMQXLBVCXQdktTztxNTtTLttPHzQrgNKkqXFrTJbPJfTKbzqVFWTBKp" className='linkNav' target="_blank"><p className='textTextMapFooter'>Email</p></Link>
            </div>
        </div>
    )
}

export default Footer