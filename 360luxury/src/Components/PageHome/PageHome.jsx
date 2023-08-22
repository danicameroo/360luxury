import imageOne from '../../Images/image1.png'
import ArrowCarousel from '../../Images/ArrowCarousel.svg'
import { imagesCarousel } from '../../data'
import './PageHome.css'
import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import PackagesHome from '../PackagesHome/PackagesHome'
import { useInView } from 'react-intersection-observer';
import WhyUs from '../WhyUs/WhyUs'
import Experiences from '../Experiences/Experiences'
import IconsStatics from '../iconsStatics/iconsStatics'

const PageHome = () => {
    const location = useLocation();
    const scrollOnLoadExperience = new URLSearchParams(location.search).get('Experiences') === 'true';
    const scrollOnLoadGallery = new URLSearchParams(location.search).get('Gallery') === 'true';
    const scrollOnLoadHome = new URLSearchParams(location.search).get('Home') === 'true';
    const [currentIndex, setCurrentIndex] = useState(0);
        const [ref, inView] = useInView({
            triggerOnce: true,
        });
    
    const isInView = inView || false;
  
    const prevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + imagesCarousel.length) % imagesCarousel.length);
      };
      
      const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % imagesCarousel.length);
      };
    
      
    useEffect(() => {
        if (scrollOnLoadHome) {
        const scrollToHomeSection = () => {
            const element = document.getElementById('home');
            if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            }
        };
        scrollToHomeSection();
        }
    }, [scrollOnLoadHome]);

    useEffect(() => {
        if (scrollOnLoadExperience) {
        const scrollToExperiencesSection = () => {
            const element = document.getElementById('experiences');
            if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            }
        };
        scrollToExperiencesSection();
        }
    }, [scrollOnLoadExperience]);

    useEffect(() => {
        if (scrollOnLoadGallery) {
        const scrollToGallerySection = () => {
            const element = document.getElementById('gallery');
            if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            }
        };
        scrollToGallerySection();
        }
    }, [scrollOnLoadGallery]);

    return (
        <div className='Home' id='home'>
            <IconsStatics />
            <img src={imageOne} alt='' className='ImageOne' />
            <div className={`containerTextPageHome ${isInView ? 'active' : ''}`} ref={ref}>
                <h1 className='titleContainerPageHome'>360 Luxury photo booth experience</h1>
                <p className="textContainerPageHome">“We elevate your experience to the next level”</p>
                <Link to="/booking?Book=true">
                <button className="buttonContainerPageHome">
                    <p className="textButtonContainerPageHome">Book Now!</p>
                </button>
                </Link>
            </div>
            <div className='containerImgHome'>
                <p className='textImageTwoPack'>Welcome to the 360 Luxury Productions experience! We do more than just capture moments; we transport you to a world of luxury and excitement. Our tagline, "We take your experience to the next level," emphasizes our commitment to creating unforgettable memories that transcend the ordinary. As a leading luxury experience-based company, we don't just sell a service; we create an extraordinary journey for you and your guests. Our innovative approach sets us apart, introducing fresh ideas that breathe new life into the market. When you choose us, you're not just renting a 360 photo booth - you're immersing yourself in an extravagant affair complete with interactive LED props and studio-quality lighting. From glamorous galas to intimate gatherings, our 360 photo booth will elevate every event, leaving a endless smiles and cherished memories for you and your gests. We pride ourselves on providing the perfect union of sophistication and entertainment, ensuring that your celebration becomes the talk of the year. Ready to embark on this remarkable experience with us? Take a moment to explore the possibilities that await you in our "Packages" section.</p>
            </div>
            <PackagesHome />
            <WhyUs />
            <div id='experiences'>
                <Experiences />
            </div>
            <div className="carouselContainer" id='gallery'>
                <h2 className='titleContainerCarousel'>Gallery</h2>
                <div className="carouselImages">
                    <img
                    src={imagesCarousel[(currentIndex - 1 + imagesCarousel.length) % imagesCarousel.length].image}
                    alt=""
                    className="imgCarrusel side prev"
                    />
                    <div className="ContainerOverlay">
                        <p className='textOverlay'>{imagesCarousel[currentIndex].text}</p>
                    </div>
                    <img
                    src={imagesCarousel[currentIndex].image}
                    alt=""
                    className="imgCarrusel center"
                    />
                    <img
                    src={imagesCarousel[(currentIndex + 1) % imagesCarousel.length].image}
                    alt=""
                    className="imgCarrusel side next"
                    />
                    <div className="carouselButtons">
                        <button onClick={prevImage}><img src={ArrowCarousel} alt="" className='arrowCarousel'/></button>
                        <button onClick={nextImage}><img src={ArrowCarousel} alt="" className='arrowCarousel Rotate'/></button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default PageHome