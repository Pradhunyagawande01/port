import Navbar from "./Component/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import Skills from "./Pages/Skills";
import Experience from "./Pages/Experience";
import Events from "./Pages/Events";
import Links from "./Pages/Links";

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
      </div>
    </Router>
  );
}
