import Form from "../Form/Form"
import './PageBook.css'
import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import cellphone from '../../Images/cellphone.png'
import { useInView } from "react-intersection-observer"
import IconsStatics from "../iconsStatics/iconsStatics"


const PageBook = () => {
    const location = useLocation();
    const scrollOnLoadBook = new URLSearchParams(location.search).get('Book') === 'true';
    const scrollOnLoadBookVideo = new URLSearchParams(location.search).get('BookVideo') === 'true';
    const scrollOnLoadBooking = new URLSearchParams(location.search).get('Booking') === 'true';
    const [ref, inView] = useInView({
        triggerOnce: true,
    });

    const isInView = inView || false;
    
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

    useEffect(() => {
        if (scrollOnLoadBookVideo) {
        const scrollToBookVideoSection = () => {
            const element = document.getElementById('video');
            if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            }
        };
        scrollToBookVideoSection();
        }
    }, [scrollOnLoadBookVideo]);

    useEffect(() => {
        if (scrollOnLoadBooking) {
        const scrollToBookingSection = () => {
            const element = document.getElementById('form');
            if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            }
        };
        scrollToBookingSection();
        }
    }, [scrollOnLoadBooking]);

    return(
        <div className="positionPageBook">
            <div className="pageBook" id="book">
                <IconsStatics />
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
                <div className="videoBook" id="video">
                    <iframe className="videoIframe" width="1058" height="592" src="https://www.youtube.com/embed/joDwDcTHvqU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
                <div>
                    <div id="form">
                        <div className={`containerFormAnimation ${isInView ? 'active' : ''}`} ref={ref}>
                        <h2 className="titleForm">Booking</h2>
                            <Form />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default PageBook