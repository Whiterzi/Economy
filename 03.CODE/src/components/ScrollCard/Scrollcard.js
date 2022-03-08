import React ,{useState} from "react";
import goodmark from '../../imgs/goodmark.png'
import './Scrollcard.scss'
import Infocard from "../InfoCard/Infocard";
import GetData from "../GetData";


const filtedlist = (filteroption,keyword)=>{
    let tempList = GetData().slice()
    let resultlist = []
    let filter = filteroption
    const isItgoodstore = filter.includes('優質商家');
    resultlist = tempList.filter(element=>{
        return (
            filter.includes(element.type) && (!isItgoodstore || element.goodstore===isItgoodstore)
        )
    })
    resultlist.length===0 && (isItgoodstore ? resultlist = tempList.filter(element=>element.goodstore) : resultlist = tempList)
    resultlist = resultlist.filter(element=>{
        return(
            element.name.includes(keyword)
        )
    })
    return resultlist
}

const Cardgenerate=(props)=>{
    return props.content.map(element=>{
        return(
            <div id='body-list-card' key={element.id}>
                <div id='img-for-preview'></div>
                <div id='item-describe-text'>
                    <div id='rowname'>
                        <p>名稱</p>
                        <p>貨物地點</p>
                        <p>種類</p>
                        <p>尺寸<font style={{fontSize:'12px'}}>(W*H*D)</font></p>
                        <p>貨物狀況</p>
                        <p>上架日期</p>
                        <p id='price'>價格</p>
                    </div>
                    <div id='rowvalue'>
                        <p>{element.name}</p>
                        <p>{element.location}</p>
                        <p>{element.type}</p>
                        <p>{element.size}</p>
                        <p>{element.state}</p>
                        <p>{element.postdate}</p>
                        <p id='price'>${element.price}</p>
                    </div>
                    
                </div>
                <div id="goodmark-and-tooltip">
                    <img src={goodmark} alt='goodmark' hidden={element.goodstore ? '' : 'hide'} />
                    <div id='tooltip-for-goodstoremark' className={!element.goodstore && 'display-none'} >商品認證</div>
                </div>
                <button className="purchase-button" id={element.id} onClick={props.onClick}>購買</button>
            </div>
        )
    })
}


/*
--props
filter - Array for selected filters 
keyword - string to filt item name
popup - callback to pop confirm window
*/
const Scrollcard = (props)=>{
    const [showlist , changeShowstate] = useState(true)
    const [InfObject , setInfObject] = useState([])
    const Filters = props.filter
    const keyword = props.keyword
    const PurchaseButtonEvent = (e)=>{
        setInfObject(GetData().filter(element=>element.id===e.target.id))
        changeShowstate(false)
    }
    const InfocardBackEvent = ()=>{
        changeShowstate(true)
    }
    return (
        showlist ? <Cardgenerate content={filtedlist(Filters,keyword)} onClick={PurchaseButtonEvent}  /> : <Infocard InfObject={InfObject} onBack={InfocardBackEvent} popup={props.popup} />
    )
}

export default Scrollcard;