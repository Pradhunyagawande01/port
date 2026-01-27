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
      <div>
        {/* Top navigation */}
       <Navbar  />

        {/* Page content */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/events" element={<Events />} />
            <Route path="/links" element={<Links />} />
          </Routes>
        </main>

        {/* Global footer */}
        <Footer />
      </div>
    </Router>
  );
}