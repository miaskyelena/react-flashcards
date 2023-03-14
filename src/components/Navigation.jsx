import React from "react";

function Navigation() {
    return (
        <div className="nav">
             <div className="back">
                <button>⬅️</button>
            </div>
            <div className="forward">
                <button>➡️</button>
            </div>
            <div className="shuffle">
                <button>🔀</button>
            </div>
        </div>

    )
}
export default Navigation;