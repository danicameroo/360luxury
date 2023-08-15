import ArrowLeft from '../../Images/ArrowLeft.png'
import ArrowRight from '../../Images/ArrowRight.png'
import textPackages from '../../Images/textPackages.png'
import Package from '../../Images/Packages.png'
import './PackagesHome.css'

const PackagesHome = () => {
    const ScrollToBasic = () => {
        window.location.href = '/packages?scrollOnLoadBasic===true';
    };
    const ScrollToPremium = () => {
        window.location.href = '/packages?scrollOnLoadPremium=true';
    };
    const ScrollToDeluxe = () => {
        window.location.href = '/packages?scrollOnLoadDeluxe=true';
    };

    return(
        <div className='containerPackage'>
                <div className='containerPackageImg'>
                    <div className='arrowContainer'>
                        <img src={ArrowRight} alt="" className='Rotate'/>
                        <img src={ArrowRight} alt="" className='ArrowRight Arrow'/>
                    </div>
                    <img src={textPackages} alt="" className='textPackage'/>
                    <img src={Package} alt="" className='Package'/>
                </div>
                <div className='containerPackagesButton'>
                    <button className='packagesButton' onClick={ScrollToBasic}><p className='packagesButtonText'>Basic package</p></button>
                    <button className='packagesButton' onClick={ScrollToPremium}><p className='packagesButtonText'>Premium package</p></button>
                    <button className='packagesButton'onClick={ScrollToDeluxe}><p className='packagesButtonText'>Deluxe package</p></button>
                </div>
            </div>
    )
}

export default PackagesHome