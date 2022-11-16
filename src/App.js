import logo from "./logo.svg";
import "./App.scss";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Services from "./pages/Services/Services";
import Products from "./pages/Products/Products";
import Contact from "./pages/Contact/Contact";
import NotFound from "./pages/NotFound/NotFound";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/Scroll/ScrollToTop";
import SingleProduct from "./pages/SingleProduct/SingleProduct";
import UnAvailable from "./pages/UnAvailable/UnAvailable";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <ScrollToTop />
        <div className="main">
          {/* important reference ---- https://www.free-css.com/free-css-templates/page261/lighten
           <br /><br />
          

            painters web template ---- https://www.free-css.com/free-css-templates/page284/painter */}
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/products" element={<Products />} />
            <Route path="/product/:id" element={<SingleProduct />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/unavailable" element={<UnAvailable />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
