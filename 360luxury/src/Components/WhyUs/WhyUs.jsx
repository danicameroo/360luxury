import Reloj from '../../Images/iconHome1.png'
import Video from '../../Images/iconHome2.png'
import Time from '../../Images/iconHome3.png'
import './WhyUs.css'
import { useInView } from 'react-intersection-observer';

const WhyUs = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
    });

    const isInView = inView || false;

    return(
        <div className='containerWhyUs'>
            <div className='textWhyUs'>
                <h2 className='titleContainerWhyUS'>WHY US?</h2>
                <p className='textContainerWhyUs'>We pride ourselves on providing the perfect union of sophistication and entertainment. We don't just "Sell a service" We create a memorable experience for you and your guests.</p>
            </div>
            <div className='containerAllIcon'>
                <div className='containerIcon'>
                    <img src={Reloj} alt="" className='iconContainerIcon'/>
                    <p className='titleContainerIcon'>How long do we need to install our equipment</p>
                    <p className='textContainerIcon'>We require one hour as a minimum depending on which package you booked. We definitely prefer to have plenty of time to set up all the equipment and make sure everything is perfect in order to avoid any problems.</p>
                </div>
                <div className='containerIcon'>
                    <img src={Video} alt="" className='iconContainerIcon'/>
                    <p className='titleContainerIcon'>Video sharing</p>
                    <p className='textContainerIcon'>We can share all videos in the exact same moment without editions. If you want to add frames or the speeding/slow-mo features, those videos will be edited after the event is over and then will be posted on our virtual gallery.</p>
                </div>
                <div className='containerIcon'>
                    <img src={Time} alt="" className='iconContainerIcon'/>
                    <p className='titleContainerIcon'>How long can I access my videos online?</p>
                    <p className='textContainerIcon'>Great news! You and your guests can come back to our virtual gallery as many times as you would like for a lifetime! Every event will have a personal password (Created by yourself!) So nobody else will see your album.</p>
                </div>
            </div>
            <div className={`containerLocationCloud ${isInView ? 'active' : ''}`} ref={ref}>
                <div className='containerCloud'>
                    <p className='textCloud'>Yes, we love privacy<br/> as much as you do! We got you!</p>
                </div>
            </div>
        </div>
    )
}

export default WhyUs