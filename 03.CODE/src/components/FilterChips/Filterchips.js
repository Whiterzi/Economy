import React from "react";
import './Filterchips.scss'
import deletbutton from '../../imgs/metro-cross.png'


// props from Filterchips
const Chipsgenerate = (props) => {
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
Filteroption - GreenMatchList.Filteroption
onItemDelete - GreenMatchList.onItemDelete
*/
const Filterchips = (props) => {
    return props.Filteroption.map(element => {
        return <Chipsgenerate itemname={element} key={element} props={props} />
    })
}
export default Filterchips