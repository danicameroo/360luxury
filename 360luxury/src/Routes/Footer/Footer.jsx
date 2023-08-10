import LogoIcon from '../../Images/LogoIcon.png'
import Arrow from '../../Images/ArrowSmallIcon.svg'
import './Footer.css'

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
                <p className='textTextMapFooter'>About Us</p>
                <p className='textTextMapFooter'>Packages</p>
                <p className='textTextMapFooter'>Book Now!</p>
                <p className='textTextMapFooter'>Contact Us</p>
            </div>
            <div className='textMapFooter'>
                <p className='titleTextMapFooter'>Home</p>
                <p className='textTextMapFooter'>Why Us</p>
                <p className='textTextMapFooter'>Mission</p>
                <p className='textTextMapFooter'>Vision</p>
                <p className='textTextMapFooter'>Experiences</p>
                <p className='textTextMapFooter'>Gallery</p>
            </div>
            <div className='textMapFooter'>
                <p className='titleTextMapFooter'>Booking</p>
                <p className='textTextMapFooter'>How To Book<br/>(With video)</p>
                <p className='textTextMapFooter'>Book</p>
            </div>
            <div className='textMapFooter'>
                <p className='titleTextMapFooter'>Contact</p>
                <p className='textTextMapFooter'>Contact Information</p>
                <p className='textTextMapFooter'>Instagram Profile</p>
                <p className='textTextMapFooter'>Google Maps Profile</p>
                <p className='textTextMapFooter'>Email</p>
            </div>
        </div>
    )
}

export default Footer