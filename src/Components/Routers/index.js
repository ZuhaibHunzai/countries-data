import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Favorite from "../../Pages/Favorites/index";
import About from "../../Pages/About/index";
import Explore from "../../Pages/Explore/index";
import Donate from "../../Pages/Donate/index";
import Navbar from "../Header/Header";
import Home from "../Home/home";
import CountryDetails from "../countryDetails/countrydetails";
const Routers = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorite-countries" element={<Favorite />} />
          <Route path="/about" element={<About />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/country/:countryName" element={<CountryDetails />} />
        </Routes>
      </Router>
    </>
  );
};

export default Routers;
