import './App.css';
import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
// importing Navbar
import NavBar from './Base/navbar.jsx';
// importing Theme
import Theme from './Components/About/Details/Theme/Theme';
// importing Home
import Home from './Components/Home/home.jsx';
// importing about
import About from './Components/About/about';
// importing portofolio
import Portfolio from "./Components/Portfolio/portfolio.jsx";
//importing Contact
import Contact from './Components/Contact/contact.jsx';
function App() {
  return (
  <BrowserRouter>
 
  <NavBar/>
  <Theme/>
  <Routes>
    <Route index element={<Home/>} />
    <Route path="about" element={<About/>}/>
    <Route path="portfolio" element={<Portfolio/>}/>
    <Route path="contact" element={<Contact/>}/>
  </Routes>
 
  </BrowserRouter>
 
  );
}

export default App;
