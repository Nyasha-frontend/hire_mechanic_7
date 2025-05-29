import { StrictMode } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Form } from "react-router-dom";
import Carosol from "./Components/Carosol/Carosol";
import Hero2 from "./Components/Hero2/Hero2";
import Hero3 from "./Components/Hero3/Hero3";
import Footer from "./Components/Footer/Footer";
import Homepage from "./Components/Homepage/Homepage";
import About from "./Components/About/About";
import Header2 from "./Components/Header/Header2";
import Services from "./Components/Services/Services";
import Partners from "./Components/Partners/Partners";
import Contact from "./Components/Contact/Contact";
import KnowMore from "./Components/Partners/KnowMore";





function App() {
  return (
    <>
      <BrowserRouter>
      <Header/>
      <Routes>
      
        <Route path = "/" element={<Homepage/>} />
        <Route path = "/about-us" element={<About/>}/>
 
        <Route path = "/services" element = { <Services/>}/>
        <Route path = "/partners" element = { < Partners/>}/>
       
        <Route path="/know-more" element={<KnowMore/>}/>
        <Route path = "/Contact" element = { <Contact/>}/>
        {/* <Route path = "/Contact" element = { <Form/>}/> */}
        
      </Routes>
      <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
