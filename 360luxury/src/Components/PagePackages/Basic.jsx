import { useInView } from "react-intersection-observer";
import BasicImg from '../../Images/basic.png'
import './PagePackages.css'

const Basic = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
    });

    const isInView = inView || false;
    return(
        <div className={`containerBasic ${isInView ? 'active' : ''}`} ref={ref}>
                <div>
                    <img src={BasicImg} alt="" className='imgBasic'/>
                </div>
                <div>
                    <h3 className='titleBasic'>INCLUDES:</h3>
                    <p className='textBasic'>(2 hours)</p>
                    <ul className='listBasic'>
                        <li>-360 photo booth.</li>
                        <li>-Extra ring light.</li>
                        <li>-Rug (Red or black).</li>
                        <li>-Regular flow, slow motion and reverse features.</li>
                        <li>-On site sharing via email, message or AirDrop.</li>
                        <li>-Staff member who will be dedicated to help at every moment </li>
                        <li>-Delivery, set up and breakdown.</li>
                    </ul>
                    <p className='priceBasic'>PRICE: $400.<br/>Extra hour: $100.<br/>+4 Hours email us to accommodate pricing.</p>
                </div>
            </div>
    )
}

export default Basic