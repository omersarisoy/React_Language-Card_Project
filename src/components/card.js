import logo from "../assets/react.svg";
import { categories } from "../helper/data";
import "./card.css";
import { useState } from "react";


const Card = () => {
  const [showImage, setShowImage] = useState("false")
  return (
    <>
    <div className="container">

        <div className="logo">
            <img src={logo} />
        </div>


        <div className="table">
        <h2>Languages</h2>
        <div className="all-cards">
           
          {categories.map((item) => (
            <div className="card" onClick={ ()=>setShowImage(!showImage)}>
              {showImage ? (<><div className="image">
                <img src={item.img} />
                </div>
              
                <div className="name">
                  <h4> {item.name} </h4>
                </div></>)
                :
                (<div className="opt">
                  <li> {item.options[0]} </li> 
                  <li> {item.options[1]} </li>
                  <li> {item.options[2]} </li>
                </div>)}

                
  
                
            </div>
            
            ))}
        </div>
        </div>
        
    </div>
      
    </>
  );
};

export default Card;
