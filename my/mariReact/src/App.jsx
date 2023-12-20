import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Contato from "./pages/Contato/Contato";
import Sobre from "./pages/Sobre/Sobre";

import "./style.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/sobre" element={<Sobre />} />
      </Routes>
    </>
  );
}

export default App;
