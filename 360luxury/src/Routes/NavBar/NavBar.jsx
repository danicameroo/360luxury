import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo360 from '../../Images/Logo360.png';
import './NavBar.css';

const NavBar = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(null);

  useEffect(() => {
    const pathname = location.pathname;
    const activeIndex = getActiveIndex(pathname);
    setActiveLink(activeIndex);
  }, [location]);

  const handleClick = (index) => {
    setActiveLink(index);
  };

  const getActiveIndex = (pathname) => {
    const routes = ['/', '/aboutUs', '/packages', '/booking', '/FAQs'];
    return routes.findIndex((route) => route === pathname);
  };

  return (
    <div className='positionNav'>

    <div className="MenuNav">
      <Link to="/" className="linkNav"><img src={Logo360} className="imgNav" alt="" /></Link>
      <div>
        <ul className="navegationNav">
          <li className={activeLink === 0 ? 'listNav active' : 'listNav'}>
            <Link to="/?Home=true" className="linkNav" onClick={() => handleClick(0)}>
              Home
            </Link>
          </li>
          <li className={activeLink === 1 ? 'listNav active' : 'listNav'}>
            <Link to="/aboutUs?AboutUs=true" className="linkNav" onClick={() => handleClick(1)}>
              About Us
            </Link>
          </li>
          <li className={activeLink === 2 ? 'listNav active' : 'listNav'}>
            <Link to="/packages?Packages=true" className="linkNav" onClick={() => handleClick(2)}>
              Packages
            </Link>
          </li>
          <li className={activeLink === 3 ? 'listNav active' : 'listNav'}>
            <Link to="/booking?Book=true" className="linkNav" onClick={() => handleClick(3)}>
              Book Now!
            </Link>
          </li>
          <li className={activeLink === 4 ? 'listNav active' : 'listNav'}>
            <Link to="/FAQs?Question=true" className="linkNav" onClick={() => handleClick(4)}>
              FAQ's
            </Link>
          </li>
        </ul>
      </div>
    </div>
    </div>
  );
};

export default NavBar;