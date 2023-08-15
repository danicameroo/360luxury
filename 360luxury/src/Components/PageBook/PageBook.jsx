import Form from "../Form/Form"
import ArrowCarouselBook from '../../Images/ArrowCarousel.svg'
import './PageBook.css'
import { videos } from "../../data"
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"

const PageBook = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const location = useLocation();
    const scrollOnLoadBook = new URLSearchParams(location.search).get('scrollOnLoadBook') === 'true';

    const handlePreviousSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? videos.length - 1 : prevSlide - 1));
    };

    const handleNextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === videos.length - 1 ? 0 : prevSlide + 1));
        console.log(videos.length)
        console.log(currentSlide)
    };

    useEffect(() => {
        if (scrollOnLoadBook) {
        const scrollToBookSection = () => {
            const element = document.getElementById('book');
            if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            }
        };
        scrollToBookSection();
        }
    }, [scrollOnLoadBook]);

    return(
        <div className="pageBook" id="book">
            <div>
                <h1 className="titleBook">how to book?</h1>
                <div className="ContainerCarouselBook">
                    <div className="ContainerBooks">
                        <button className="buttonContainerBookCarousel" onClick={handlePreviousSlide}><img src={ArrowCarouselBook} alt="" className='arrowBookCarousel'/></button>
                            <div className="containerBookCarouselInformation">
                            {videos.map((item, index) => (
                                <div key={index} className={`carouselItem ${currentSlide === index ? 'active' : ''} containerBookCarouselInformation`} style={{ display: currentSlide === index ? 'flex' : 'none' }}>
                                <p className="testBookCarousel">{item.text}</p>
                                <img className="imgCellphone" src={item.img} alt="" />
                                </div>
                            ))}
                            </div>
                        <button className="buttonContainerBookCarousel" onClick={handleNextSlide}><img src={ArrowCarouselBook} alt="" className='arrowBookCarousel RotateBook'/></button>
                    </div>
                </div>
                <div className="carouselIndicators">
                    {videos.map((_, index) => (
                        <span
                            key={index}
                            className={`indicator ${currentSlide === index ? 'active' : ''}`}
                            onClick={() => setCurrentSlide(index)}
                        ></span>
                    ))}
                </div>
            </div>
            <div className="videoBook">
                <iframe width="1058" height="592" src="https://www.youtube.com/embed/joDwDcTHvqU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            <div>
                <h2 className="titleForm">Booking</h2>
                <Form />
            </div>
        </div>
    )
}

export default PageBook