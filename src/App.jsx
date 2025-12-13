import React from "react";
import "./index.css";
import About from "./pages/About.jsx";

const App = () => {
  return (
    <div>
      <h1 className="title">Hello, everyone!</h1>
      <p className="Subtitle">Welcome to my React application.</p>
      <img
        className="image"
        src="/About.png"
        alt="Placeholder"
      />
      <img
        className="image"
        src="/2.png"
        alt="Placeholder"
      />

      <About />
    </div>
  );
};

export default App;