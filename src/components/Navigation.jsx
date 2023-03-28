import { React, useState } from "react";
import Cardlist from "./Cardlist";

function Navigation() {

    function Increment(){
        const [count, setCount] = useState(0);

        function handleClick() {
            setCount(count + 1);
            {card.id} + 1; 
        }
    }

    function Decrement(){
        const [count, setCount] = useState(0);

        function handleClick() {
            setCount(count - 1);
            {card.id} - 1;
        }
    }

    return (
        <div className="nav">
             <div>
                <button onClick={Decrement} className="back">⬅️</button>
            </div>
            <div>
                <button onClick={Increment} className="forward">➡️</button>
            </div>
            <div>
                <button className="shuffle">🔀</button>
            </div>
        </div>

    )
}
export default Navigation;