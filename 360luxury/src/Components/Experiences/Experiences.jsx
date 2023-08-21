import { imagesExperiences } from "../../data"
import './Experiences.css'
import { useState } from "react";
import { useInView } from 'react-intersection-observer';

const Experiences = () => {
    const [visibleImages, setVisibleImages] = useState(4);
    const [ref, inView] = useInView({
            triggerOnce: true,
        });
    
    const isInView = inView || false;

    const loadMoreImages = () => {
        setVisibleImages((prevVisibleImages) => prevVisibleImages + 4);
    };

    return(
        <div className={`containerExperiences ${isInView ? 'active' : ''}`} ref={ref}>
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
    )
}

export default Experiences