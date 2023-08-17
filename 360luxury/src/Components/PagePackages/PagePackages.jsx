import './PagePackages.css'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Basic from './Basic'
import Deluxe from './Deluxe'
import Premium from './Premium'

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
            <Basic />
            <div className='containerPackages'>
                <div className='containerTextPackages'>
                    <h2 className='titleContainerPackages' id="premium">Premium package</h2>
                </div>
            </div>
            <Premium />
            <div className='containerPackages'>
                <div className='containerTextPackages'>
                    <h2 className='titleContainerPackages' id='deluxe'>Deluxe package</h2>
                </div>
            </div>
           <Deluxe />
            <div className='containerEndPackages'>
                <h3 className='textEndPackages'>So, are you ready to embrace the extraordinary? Let us be your guide on this journey and make your event a true masterpiece!</h3>
            </div>
        </>
    )
}

export default PagePackages