import React from "react"
import { Route, Routes } from "react-router";
import Begemont from "./components/pages/Begemont";
import Dinazor from "./components/pages/Dinazor";
import Koala from "./components/pages/Koala";
import Panda from "./components/pages/Panda";
import Sican from "./components/pages/Sican";



// import Footer from "./components/Footer";
// import Header from "./components/Header.js";



function App() {
  return (
    <>
    <nav>
      <a style={{margin: '0px 130px'}} href="/">Koala</a>
      <a style={{margin: '0px 130px'}} href="/Dinazor">Dinazor</a>
      <a style={{margin: '0px 130px'}} href="/Begemont">Begemont</a>
      <a style={{margin: '0px 130px'}} href="/Sican">Sican</a>
      <a style={{margin: '0px 130px'}} href="/Panda">Panda</a>
    </nav>
      <Routes>
        <Route path="/" element={<Koala />} />
        <Route path="/dinazor" element={<Dinazor />} />
        <Route path="/begemont" element={<Begemont />} />
        <Route path="/sican" element={<Sican />} />
        <Route path="/panda" element={<Panda />} />

      </Routes>
    </>
  );
}

export default App;
