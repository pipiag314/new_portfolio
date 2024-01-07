import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Hero,
  Navbar,
  Experience,
  Tech,
  Works,
  Contact,
  StarsCanvas,
} from "./components/index";

import About from "./components/About"

function App() {
  return (
    <Router>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </Router>
  );
}

export default App;
