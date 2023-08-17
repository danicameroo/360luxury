import { useInView } from "react-intersection-observer";
import PremiumImg from '../../Images/premiumImg.png'
import './PagePackages.css'

const Premium = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
    });

    const isInView = inView || false;
    return(
        <div className={`containerPremium containerAnimate ${isInView ? 'active' : ''}`} ref={ref}>
                <div>
                    <h3 className='titleBasic premium'>INCLUDES:</h3>
                    <p className='textBasic premium'>(2 hours)</p>
                    <ul className='listBasic premium'>
                        <li>-360 photo booth.</li>
                        <li>-Fog machine OR bubble gun (Must pick one or pay extra $40 for both) (Both are used with non-toxic materials).</li>
                        <li>-Fun LED props.</li>
                        <li>-Extra ring light.</li>
                        <li>-Rug (Red or black).</li>
                        <li>-Security ropes.</li>
                        <li>-Onsite sharing via email, message or AirDrop. </li>
                        <li>-Staff member who will be dedicated to help at every moment </li>
                        <li>-Delivery, set up and breakdown.</li>
                    </ul>
                    <p className='priceBasic premium'>PRICE: $550.<br/>Extra hour: $100. <br/>+4 hours email us to accommodate pricing.</p>
                </div>
                <div>
                    <img src={PremiumImg} alt="" className='imgPremium'/>
                </div>
            </div>
    )
}

export default Premium