import { useState } from "react";
import "./Item.css"

const Item = ({card}) => {
const [showItem, setShowItem] = useState(true)

  return (
    <div className="card" onClick={() => setShowItem(!showItem)}>

        {showItem ? ( <> <div className="image">
        <img src={card.img} />
      </div>

      <div className="name">
        <h4> {card.name} </h4>
      </div> </>) : 
      
      (<div className="options">
      {card.options.map((optElement, i) => {
        return <li> {optElement} </li>;
      })}
      
      </div>)}
           
    </div>
  );
};
export default Item;
