import Navbar from "./Component/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Skills from "./pages/Skills";
import Experience from "./pages/Experience";
import Events from "./pages/Events";
import Links from "./pages/Links";
import Footer from "./Component/Footer";

export default function App() {
  return (
    <Router>
      <div className=" ">
        <Navbar className="flex items-center justify-center" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/events" element={<Events />} />
          <Route path="/links" element={<Links />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
