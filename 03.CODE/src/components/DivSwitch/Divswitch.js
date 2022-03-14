import React, { useState } from "react";
import './Divswitch.scss';


const DivSwitch = () => {
    // s = Sale , p = Purchase
    const [CurrentDivPosition, setPosition] = useState("Init");
    const onDivSelect = (e) => {
        e.target.id === "sale" ? setPosition("s") : setPosition("p")
    }
    const backgroundclass = `selected-back ${CurrentDivPosition !== "Init" && (CurrentDivPosition === "s" ? 'selected-at-left' : 'selected-at-right')}`
    return (
        <div id="switch-container">
            <div className="divtext" id="sale" onClick={onDivSelect}>尋找賣方</div>
            <div className="divtext" id="purchase" onClick={onDivSelect}>尋找買方</div>
            <div className={backgroundclass} />
        </div>
    )
}

export default DivSwitch;
