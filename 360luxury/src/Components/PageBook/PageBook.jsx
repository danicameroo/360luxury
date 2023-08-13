import Form from "../Form/Form"
import ArrowCarousel from '../../Images/flechita.svg'
import './PageBook.css'

const PageBook = () => {
    return(
        <div className="pageBook">
            <div>
                <h1 className="titleBook">how to book?</h1>
                <div className="ContainerCarouselBook">
                    <div className="ContainerBook">
                        <button ><img src={ArrowCarousel} alt="" className='arrowBookCarousel'/></button>
                            <div>
                                <p className="testBookCarousel">Hey, we know it can be kind of hard to book a package if you are not sure which one will be the best fit for your event. Sometimes we let our excitement (Or insecurities) Take control over the situation and at the end we realize that we did not make a good decision. It is ok, we got you covered, simply fill out your information below and just try to describe your event as much as you can, no matter how long the description is, and we will contact you as soon as possible to help you with that.</p>
                            </div>
                        <button ><img src={ArrowCarousel} alt="" className='arrowBookCarousel RotateBook'/></button>
                    </div>
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