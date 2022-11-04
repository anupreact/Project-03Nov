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

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
          <div className="main">

            important reference ---- https://www.free-css.com/free-css-templates/page261/lighten
           <br /><br />

            painters web template ---- https://www.free-css.com/free-css-templates/page284/painter
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
          </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
