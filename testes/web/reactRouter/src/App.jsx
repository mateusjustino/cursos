import "./App.css";

import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Contact2 from "./pages/Contact2";

import Navbar from "./components/Navbar";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <div>
        <header>
          <Navbar />
        </header>
        <h1>Welcome</h1>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/contact/contact2" element={<Contact2 />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
