import iconCall from '../../Images/iconCall.png'
import iconLocation from '../../Images/iconLocation.png'
import iconIG from '../../Images/iconIG.png'
import './iconsStatics.css'
import { Link } from 'react-router-dom'
const IconsStatics = () =>{
    return(
        <div className="containerIconsStatics">
            <div className='iconsStatics'>
                <Link to="tel:+16466001306"><img src={iconCall}  alt=""className='imgIconStatic' /></Link>
                <Link to="https://maps.app.goo.gl/xAhKCnyDvEQEEDf56?g_st=iw" target="_blank"><img src={iconLocation}  alt="" className='imgIconStatic' /></Link>
                <Link to="https://instagram.com/360luxuryproductions?igshid=OGQ5ZDc2ODk2ZA==" target="_blank"><img src={iconIG}  alt="" className='imgIconStatic'/></Link>
            </div>
        </div>
    )
}
export default IconsStatics