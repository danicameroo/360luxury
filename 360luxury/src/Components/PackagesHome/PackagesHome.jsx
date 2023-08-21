import ArrowRight from '../../Images/ArrowRight.png'
import textPackages from '../../Images/textPackages.png'
import Package from '../../Images/Packages.png'
import './PackagesHome.css'
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom'

const PackagesHome = () => {
        const [ref, inView] = useInView({
            triggerOnce: true,
        });

    const isInView = inView || false;
    return(
        <div className={`containerPackage ${isInView ? 'active' : ''}`} ref={ref}>
                <div className='containerPackageImg'>
                    <div className='arrowContainer'>
                        <div className='animateArrowsde'>
                            <img src={ArrowRight} alt="" className='Rotate Arrow'/>
                        </div>
                        <img src={ArrowRight} alt="" className='ArrowRight Arrow animateArrowsizq'/>
                    </div>
                    <img src={textPackages} alt="" className='textPackage'/>
                    <img src={Package} alt="" className='Package'/>
                </div>
                <div className='containerPackagesButton'>
                    <Link to="/packages?scrollOnLoadBasic=true" className='linkNav'><button className='packagesButton'><p className='packagesButtonText'>Basic package</p></button></Link>
                    <Link to="/packages?scrollOnLoadPremium=true" className='linkNav'><button className='packagesButton'><p className='packagesButtonText'>Premium package</p></button></Link>
                    <Link to="/packages?scrollOnLoadDeluxe=true" className='linkNav'><button className='packagesButton'><p className='packagesButtonText'>Deluxe package</p></button></Link>
                </div>
            </div>
    )
}

export default PackagesHome