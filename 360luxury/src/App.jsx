import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './Routes/NavBar/NavBar';
import Home from './Routes/Home/Home';
import Footer from './Routes/Footer/Footer';
import End from './Routes/End/End';
import AboutUs from './Routes/AboutUs/AboutUs';
import Packages from './Routes/Packages/Packages';
import Questions from './Routes/Questions/Questions';
import Book from './Routes/Book/Book';

const App = () => {
  return (
    <Router>
      <NavBar />
        <Routes>
          <Route path={'/'} element={<Home />} />
          <Route path={'/aboutUs'} element={<AboutUs />} />
          <Route path={'/packages'} element={<Packages />} />
          <Route path={'/booking'} element={<Book />} />
          <Route path={'/FAQs'} element={<Questions />} />
        </Routes>
      <Footer />
      <End />
    </Router>
  );
};

export default App;