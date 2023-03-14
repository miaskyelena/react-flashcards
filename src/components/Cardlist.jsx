import React from "react";
import Card from "./Card";

function Cardlist ({cards}){

    return (
        <div className="cards"> 
            {cards.map(
                (card) => {
                    return <Card card={card} id={1}/>;}
            )}
        </div>
    )
}

export default Cardlist;