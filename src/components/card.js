import { categories } from "../helper/data";
import "./card.css";
import Item from "./Item";


const Card = () => {
  
  return (
  
  <div className="card-container">

    <h2>Languages</h2>

    <div className="all-cards">
      {categories.map((item) => (
        <Item card = {item}  />
      ))}

    </div>
   </div>
        
  );
};

export default Card;
