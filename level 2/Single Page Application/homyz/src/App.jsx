import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Residencies from "./components/Residencies/Residencies";
import Footer from "./components/Footer/Footer";
import Home from "./Pages/Home";
import OurValue from "./Pages/OurValue";
import Contact from "./Pages/Contact";
import Hero from "./components/Hero/Hero";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Hero/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="residencies" element={<Residencies />} />
        <Route path="ourValue" element={<OurValue />} />
        <Route path="contactUs" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
