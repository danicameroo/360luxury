import imageOne from '../../Images/image1.png'
import imageTwo from '../../Images/image2.png'
import ArrowLeft from '../../Images/ArrowLeft.png'
import ArrowRight from '../../Images/ArrowRight.png'
import textPackages from '../../Images/textPackages.png'
import Packages from '../../Images/Packages.png'
import Reloj from '../../Images/iconHome1.png'
import ArrowCarousel from '../../Images/ArrowCarousel.svg'
import { imagesExperiences, imagesCarousel } from '../../data'
import './PageHome.css'
import { useState } from 'react'

const PageHome = () => {
    const [visibleImages, setVisibleImages] = useState(4);
    const [currentIndex, setCurrentIndex] = useState(0);

    const loadMoreImages = () => {
        setVisibleImages((prevVisibleImages) => prevVisibleImages + 4);
    };

    const prevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + imagesCarousel.length) % imagesCarousel.length);
    };
    
    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % imagesCarousel.length);
    };

    return (
        <div>
            <img src={imageOne} alt='' className='ImageOne' />
            <div className='containerTextPageHome'>
                <h1 className='titleContainerPageHome'>360 Luxury photo booth experience</h1>
                <p className='textContainerPageHome'>“We elevate your experience to the next level” </p>
                <button className='buttonContainerPageHome'><p className='textButtonContainerPageHome'>Book Now!</p></button>
            </div>
            <div>
                <img src={imageTwo} alt="" className='ImageTwo'/>
                <p className='textImageTwo'>Welcome to the 360 Luxury Productions experience! We do more than just capture moments; we transport you to a world of luxury and excitement. Our tagline, "We take your experience to the next level," emphasizes our commitment to creating unforgettable memories that transcend the ordinary. As a leading luxury experience-based company, we don't just sell a service; we create an extraordinary journey for you and your guests. Our innovative approach sets us apart, introducing fresh ideas that breathe new life into the market. When you choose us, you're not just renting a 360 photo booth - you're immersing yourself in an extravagant affair complete with interactive LED props and studio-quality lighting. From glamorous galas to intimate gatherings, our 360 photo booth will elevate every event, leaving a endless smiles and cherished memories for you and your gests. We pride ourselves on providing the perfect union of sophistication and entertainment, ensuring that your celebration becomes the talk of the year. Ready to embark on this remarkable experience with us? Take a moment to explore the possibilities that await you in our "Packages" section.</p>
            </div>
            <div className='containerPackages'>
                <div className='containerPackagesImg'>
                    <img src={ArrowLeft} alt="" className='ArrowLeft Arrow'/>
                    <img src={ArrowRight} alt="" className='ArrowRight Arrow'/>
                    <img src={textPackages} alt="" className='textPackages'/>
                    <img src={Packages} alt="" className='Packages'/>
                </div>
                <div className='containerPackagesButton'>
                    <button className='packagesButton'><p className='packagesButtonText'>Basic package</p></button>
                    <button className='packagesButton'><p className='packagesButtonText'>Premium package</p></button>
                    <button className='packagesButton'><p className='packagesButtonText'>Deluxe package</p></button>
                </div>
            </div>
            <div className='containerWhyUs'>
                <div className='textWhyUs'>
                    <h2 className='titleContainerWhyUS'>WHY US?</h2>
                    <p className='textContainerWhyUs'>We pride ourselves on providing the perfect union of sophistication and entertainment. We don't just "Sell a service" We create a memorable experience for you and your guests.</p>
                </div>
                <div className='containerAllIcon'>
                    <div className='containerIcon'>
                        <img src={Reloj} alt="" className='iconContainerIcon'/>
                        <p className='titleContainerIcon'>How long do we need to install our equipm ent</p>
                        <p className='textContainerIcon'>We require one hour as a minimum depending on which package you booked. We definitely prefer to have plenty of time to set up all the equipment and make sure everything is perfect in order to avoid any problems.</p>
                    </div>
                    <div className='containerIcon'>
                        <img src={Reloj} alt="" className='iconContainerIcon'/>
                        <p className='titleContainerIcon'>Video sharing</p>
                        <p className='textContainerIcon'>We can share all videos in the exact same moment without editions. If you want to add frames or the speeding/slow-mo features, those videos will be edited after the event is over and then will be posted on our virtual gallery.</p>
                    </div>
                    <div className='containerIcon'>
                        <img src={Reloj} alt="" className='iconContainerIcon'/>
                        <p className='titleContainerIcon'>How long can I access my videos online?</p>
                        <p className='textContainerIcon'>Great news! You and your guests can come back to our virtual gallery as many times as you would like for a lifetime! Every event will have a personal password (Created by yourself!) So nobody else will see your album.</p>
                    </div>
                </div>
            </div>
            <div className='containerExperiences'>
                <h2 className='titleContainerExperiences'>Experiences</h2>
                <div className='imagesContainerExperiences'>
                    {imagesExperiences.slice(0, visibleImages).map((item) => (
                        <img src={item}  alt="" className='imgExperiences'/>
                    ))}
                </div>
                <div className='containerButtonExperiences'>
                    {visibleImages < imagesExperiences.length && (
                        <button onClick={loadMoreImages} className='buttonImgExperiences'><p className='textImgExperiences'>Load More</p></button>
                    )}
                </div>
            </div>
            <div className="carouselContainer">
            <h2 className='titleContainerCarousel'>Gallery</h2>
            <div className="carouselImages">
                <img
                src={imagesCarousel[(currentIndex - 1 + imagesCarousel.length) % imagesCarousel.length]}
                alt=""
                className="imgCarrusel side prev"
                />
                <img
                src={imagesCarousel[currentIndex]}
                alt=""
                className="imgCarrusel center"
                />
                <img
                src={imagesCarousel[(currentIndex + 1) % imagesCarousel.length]}
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