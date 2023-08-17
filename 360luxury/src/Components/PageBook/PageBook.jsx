import Form from "../Form/Form"
import ArrowCarouselBook from '../../Images/ArrowCarousel.svg'
import './PageBook.css'
import { videos } from "../../data"
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import cellphone from '../../Images/cellphone.png'
import { useInView } from "react-intersection-observer"

const PageBook = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const location = useLocation();
    const scrollOnLoadBook = new URLSearchParams(location.search).get('scrollOnLoadBook') === 'true';
    const [ref, inView] = useInView({
        triggerOnce: true,
    });

const isInView = inView || false;

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
                            <div className="containerBookCarouselInformation">
                                <div className="carouselItem  containerBookCarouselInformation">
                                <p className="testBookCarousel">Hey, we know it can be kind of hard to book a package if you are not sure which one will be the best fit for your event. Sometimes we let our excitement (Or insecurities) Take control over the situation and at the end we realize that we did not make a good decision. It is ok, we got you covered, simply fill out your information below and just try to describe your event as much as you can, no matter how long the description is, and we will contact you as soon as possible to help you with that.</p>
                                <img className="imgCellphone" src={cellphone} alt="" />
                                </div>
                            </div>
                    </div>
                </div>
            </div>
            <div className="videoBook">
                <iframe width="1058" height="592" src="https://www.youtube.com/embed/joDwDcTHvqU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            <div>
                <div className={`containerFormAnimation ${isInView ? 'active' : ''}`} ref={ref}>
                <h2 className="titleForm">Booking</h2>
                    <Form />
                </div>
            </div>
        </div>
    )
}

export default PageBook