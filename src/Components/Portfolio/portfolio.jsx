import React from "react";
import { portfolio } from "../../data";
import "./portfolio.css";
import PortfolioItem from "../About/Details/PortfolioItem";
 const Portfolio = () => {
    return ( 
        <section className="portfolio section">
         <h2 className="section_title">My<span> Protfolio</span></h2>
       
       <div className="portfolio_container container grid">
         {portfolio.map((item)=>{
            return <PortfolioItem key={item.id} {...item}/>
         })}
       </div>
      
        </section>
     );
}
 
export default Portfolio;