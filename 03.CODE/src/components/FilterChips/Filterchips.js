import React from "react";
import './Filterchips.scss'
import deletbutton from '../../imgs/metro-cross.png'


const Chipsgenerate = (props) =>{
    return (
        <div id='chips'>
            <div id='chip-text'>
                {props.itemname}
            </div>
            <div id='chip-delete' onClick={props.props.onItemDelete}>
                <img src={deletbutton} alt='del' id={props.itemname} />
            </div>
        </div>
    )
}

const Filterchips = (props)=>{
    
    let tempOutput = []
    props.Filteroption.forEach(element => {
        tempOutput.push(<Chipsgenerate itemname={element} key={element} props={props}/>)
    });
    return tempOutput
    
}

export default Filterchips