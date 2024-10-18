import React from "react"
// import Btn from './btn'
import Card from "./card";
import Form from "./form";

import Footer from "./footer";
const  Home = () =>{
    return <>
   <div className="home-section">
    <div className="home-sec">
        <p className="home-para">LIBRARY ROOM</p>
        <p className="home-para1">A library paragraph can include information about the importance of libraries, their uses, and what they offer</p>
        
       <button className="button-86" role="button"><a href="https://en.wikipedia.org/wiki/Library">More Info</a></button>

    </div>

  
   
   </div>
   <div className="card1">
    <h1 className="card-head">Books Section</h1>
   <div className="home-card">
   < Card name="Study Room" image ="https://images.pexels.com/photos/3747468/pexels-photo-3747468.jpeg?auto=compress&cs=tinysrgb&w=600" />
   <Card  name="Library Room" image ="https://images.pexels.com/photos/1370298/pexels-photo-1370298.jpeg?auto=compress&cs=tinysrgb&w=600"/>
   <Card  name="Reading Room" image ="https://images.pexels.com/photos/1741231/pexels-photo-1741231.jpeg?auto=compress&cs=tinysrgb&w=600"/>
   </div>
   </div>
    <Form />

  <div className="footer-section">
    <Footer/>
  </div>
    </>
    
    
};
export default Home