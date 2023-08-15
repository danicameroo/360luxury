import BasicImg from '../../Images/basic.png'
import PremiumImg from '../../Images/premiumImg.png'
import DeluxeImg from '../../Images/deluxeImg.png'
import './PagePackages.css'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const PagePackages = () => {
    const location = useLocation();
    const scrollOnLoadBasic = new URLSearchParams(location.search).get('scrollOnLoadBasic') === 'true';
    const scrollOnLoadPremium = new URLSearchParams(location.search).get('scrollOnLoadPremium') === 'true';
    const scrollOnLoadDeluxe = new URLSearchParams(location.search).get('scrollOnLoadDeluxe') === 'true';

    useEffect(() => {
        if (scrollOnLoadBasic) {
        const scrollToBasicSection = () => {
            const element = document.getElementById('basic');
            if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            }
        };
        scrollToBasicSection();
        }
    }, [scrollOnLoadBasic]);

    useEffect(() => {
        if (scrollOnLoadPremium) {
        const scrollToPremiumSection = () => {
            const element = document.getElementById('premium');
            if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            }
        };
        scrollToPremiumSection();
        }
    }, [scrollOnLoadPremium]);

    useEffect(() => {
        if (scrollOnLoadDeluxe) {
        const scrollToPremiumSection = () => {
            const element = document.getElementById('deluxe');
            if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            }
        };
        scrollToPremiumSection();
        }
    }, [scrollOnLoadDeluxe]);

    return(
        <>
            <div className="Packages">
                <h1 className="titlePackages">Packages</h1>
                <p className="textPackages">From the standard to the sublime, we have packages to suit every occasion and create magical moments that will be etched in your heart forever. Join us and step into a world of luxury, fun, and wonder.</p>
            </div>
            <div className='containerPackages'>
                <div className='containerTextPackages'>
                    <h2 className='titleContainerPackages' id="basic">Basic package</h2>
                </div>
            </div>
            <div className='containerBasic'>
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
                        <li>-On site sharing via email, message or AirDrop.</li>
                        <li>-On site sharing via email, message or AirDrop.</li>
                        <li>-Delivery, set up and breakdown.</li>
                    </ul>
                    <p className='priceBasic'>PRICE: $400.<br/>Extra hour: $100.<br/>+4 Hours email us to accommodate pricing.</p>
                </div>
            </div>
            <div className='containerPackages'>
                <div className='containerTextPackages'>
                    <h2 className='titleContainerPackages' id="premium">Premium package</h2>
                </div>
            </div>
            <div className='containerPremium'>
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
            <div className='containerPackages'>
                <div className='containerTextPackages'>
                    <h2 className='titleContainerPackages' id='deluxe'>Deluxe package</h2>
                </div>
            </div>
            <div className='containerDeluxe'>
                <div>
                    <img src={DeluxeImg} alt="" className='imgPremium'/>
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
            <div className='containerEndPackages'>
                <h3 className='textEndPackages'>So, are you ready to embrace the extraordinary? Let us be your guide on this journey and make your event a true masterpiece!</h3>
            </div>
        </>
    )
}

export default PagePackages