import React from "react";
import profile from "../../assets/profile.jpeg"
import { Link } from "react-router-dom";
 import "./home.css";
import {FaArrowRight} from "react-icons/fa";
 const Home = () => {
    return ( 
        <section className="home section grid">
         <img src={profile} alt="" className="home_img"/>
         
         
         <div className="home_content">
            <div className="home_data">
               <h1 className="home_title"><span>I'm Burhan.</span> Developer</h1>
            <p className="home_description">
            I'm skilled and very curious with creative skills, innovation, and a user-friendly designer cum developer. Eager to learn and master new skills and the latest technologies.
 
            </p>
            <Link to="/about" className="button">
               More About Me
               <span className="button_icon">
                  <FaArrowRight/>
               </span>
            </Link>
            </div>
         </div>
         <div className="color_block"></div>
         </section>
     );
}
 
export default Home;