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
/* 
--props
Filteroption - Array to store selected filter
onItemDelete - function to delete filter from filteroption
*/
const Filterchips = (props)=>{
    return props.Filteroption.map(element=>{
        return <Chipsgenerate itemname={element} key={element} props={props}/>
    })
}
export default Filterchips