// import { useState } from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
// import Counter from './bg-buttons'
// import BgColor from './bgchange'
import Navbar from './components/navbar'
import Home from './components/home';
import About from './components/About';
import Service from './components/service';
import Contact from './components/contact';
// import Navbar from './navigation-bar';
// import MainSection from './main-section';
import './App.css'


function App() {
  
  return (
    <>
    <Router>
    <Navbar />
      <Routes>
           <Route path = "/" element = {<Home /> }/>
           <Route path = "/about" element = {<About /> }/>
           <Route path = "/service" element = {<Service /> }/>
           <Route path = "/Contact" element = {<Contact /> }/>
           
       </Routes> 
       </Router>
   

 
    </>
  )
}

export default App 