import { useInView } from "react-intersection-observer";
import DeluxeImg from '../../Images/deluxeImg.png'
import './PagePackages.css'

const Deluxe = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
    });

    const isInView = inView || false;
    return(
        <div className={`containerDeluxe containerAnimate ${isInView ? 'active' : ''}`} ref={ref}>
            <div>
                <img src={DeluxeImg} alt="" className='imgDeluxe'/>
            </div>
            <div>
                <h3 className='titleBasic'>INCLUDES:</h3>
                <p className='textBasic'>(2 hours)</p>
                <ul className='listBasic'>
                    <li>-360 photo booth.</li>
                    <li>-5 LED light bars.</li>
                    <li>-Extra ring light.</li>
                    <li>-Fog machine (Non-toxic material). </li>
                    <li>-Bubble gun (Non-toxic material).</li>
                    <li>-Fun LED props.</li>
                    <li>-Money gun.</li>
                    <li>-One (1) Confetti cannon (Gold, silver or rainbow)</li>
                    <li>-Rug (Red or black). </li>
                    <li>-Security ropes.</li>
                    <li>-Regular flow, slow motion and reverse features. </li>
                    <li>-Onsite sharing via email, message or AirDrop. </li>
                    <li>-Staff member who will be dedicated to help at every moment </li>
                    <li>-Delivery, set up and breakdown.</li>
                </ul>
                <p className='priceBasic'>PRICE: $600.<br/>Extra hour: $100. <br/>+4 hours email us to accommodate pricing.</p>
            </div>        
        </div>
    )
}

export default Deluxe