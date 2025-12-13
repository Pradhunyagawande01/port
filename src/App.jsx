import React from "react";
import "./index.css";
import About from "./pages/About.jsx";

const App = () => {
  return (
    <div>
      <h1 className="title">Hello, everyone!</h1>
      <p className="Subtitle">Welcome to my React application.</p>
      <div className="flex h-screen ">
      <img
        className="image w-auto h-auto"
        src="/About.png"
        alt="Placeholder"
      />
      <img
        className="image w-auto h-auto"
        src="/2.png"
        alt="Placeholder"
      />
      </div>

      {/* <About /> */}
    </div>
  );
};

export default App;