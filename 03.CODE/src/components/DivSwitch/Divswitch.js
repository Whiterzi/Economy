import React , {useState} from "react";
import './Divswitch.scss';




const DivSwitch = ()=>{
    // s = Sale , p = Purchase
    const [CurrentDivPosition, setPosition] = useState("Init");

    const selectedStyle = 
    {
        // left = 5 , 115
        background : '#C1AC95',
        borderRadius: '10px',
        height : '30px',
        width : '100px',
        position : 'absolute',
        zIndex : '-1',
        left : (CurrentDivPosition==="Init" ? 5 :(CurrentDivPosition==="s"?5:115))+'px',
        animationName : (CurrentDivPosition==="Init"? 'n' : (CurrentDivPosition==="s"?'purchase-to-sale' : 'sale-to-purchase')),
        animationDuration : '.5s',
    }

    
    const onDivSelect = (e)=>{
        e.target.id === "sale" ? setPosition("s") : setPosition("p")
    }
    

    return(
        <div id="switch-container">
            <div id="sale" onClick={onDivSelect}>尋找賣方</div>
            <div id="purchase" onClick={onDivSelect}>尋找買方</div>
            <div id="selected-background" style={selectedStyle} />
        </div>
    )
}

export default DivSwitch;
