import React, { useEffect, useState } from "react"; 
import './Card.css';

function Card({card}){
    const [flip,setFlip]=useState(true);

    return (
        <div className='card' onClick={()=>{setFlip(!flip)}}>
            {flip ? <div className="front">
                <div className="question">{card.question}</div>
                </div>:<div className="answer">{card.answer}</div>
            }
        </div>

        
    );
}

export default Card;
