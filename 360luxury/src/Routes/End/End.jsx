import Line from '../../Images/LineVerticalFooter.svg'
import './End.css'

const End = () => {
    return (
        <div className='End'>
            <p className='textEnd'>Copyright © 2023 360 Luxury Productions. All rights reserved.</p>
            <img src={Line} alt="" className='lineEnd' />
            <p className='textEnd'>Terms and Conditions</p>
        </div>
    )
}

export default End