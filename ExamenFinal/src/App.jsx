
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./Routes/Home"
import React from 'react'
import Contact from './Routes/Contact.jsx'
import Favs from './Routes/Favs.jsx'
import List from './Routes/Home'
import Detail from './Routes/Detail'
import {Routes, Route} from "react-router-dom";
 
function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Contact/" element={<Contact/>} />
        <Route path="/Favs/" element={<Favs/>} />
        <Route path="/Detail/:id" element={<Detail/>}/>
        <Route path="*" element={<div>NOT FOUND</div>} />
      </Routes>
      <Footer/>

    </>

  );
}


export default App;
