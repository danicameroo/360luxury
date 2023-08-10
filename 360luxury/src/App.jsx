import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './Routes/NavBar/NavBar';
import Home from './Routes/Home/Home';
import Footer from './Routes/Footer/Footer';
import End from './Routes/End/End';
import AboutUs from './Routes/AboutUs/AboutUs';
import Packages from './Routes/Packages/Packages';

const App = () => {
  return (
    <Router>
      <NavBar />
        <Routes>
          <Route path={'/'} element={<Home />} />
          <Route path={'/aboutUs'} element={<AboutUs />} />
          <Route path={'/packages'} element={<Packages />} />
        </Routes>
      <Footer />
      <End />
    </Router>
  );
};

export default App;