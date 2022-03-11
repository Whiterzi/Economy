import React ,{useState ,useContext,createContext} from "react";
import goodmark from '../../imgs/goodmark.png'
import './Scrollcard.scss'
import Infocard from "../InfoCard/Infocard";
import GetData from "../GetData";
import { SearchingFilter } from '../../pages/GreenMatchList/GreenMatchList.component'

const Filtedlist = ()=>{
    let tempList = GetData().slice()
    let resultlist = []
    const [filter,keyword] = useContext(SearchingFilter)
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


const Imgprovider = createContext();
const Cardgenerate=(props)=>{
    const content = Filtedlist()
    return content.map(element=>{
        const onPurchaseClick=(e)=>{
            props.setImgList(element.imgs)
            props.ButtonEvent(e)
        }
        return(
            <div id='body-list-card' key={element.id}>
                <div id='img-for-preview'>
                    <Imgprovider.Provider value={element.imgs}>
                        <ImageCarousel/>
                    </Imgprovider.Provider>
                </div>
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
                    <div id='tooltip-for-goodstoremark' className={element.goodstore ? '' : 'display-none'} >商品認證</div>
                </div>
                <button className="purchase-button" id={element.id} onClick={onPurchaseClick}>購買</button>
            </div>
        )
    })
}

// props- imgset : imgs[] from GetData
const ImageCarousel = ()=>{
    const imgset = Array.from(useContext(Imgprovider))
    const [Selectedimg , setSelectedimg] = useState(imgset[0])
    const onImgChange = (e)=>{
        setSelectedimg(e.target.id)
    }
    // SelectedDot={Selectedimg} , onDotClick={onImgChange}
    const GenetateNavigationDot = (props)=>{
        const SelectedDot = props.SelectedDot
        const onDotClick = props.onDotClick
        return imgset.map(v=>{
            return(
                <div className="carousel-dot" key={v}>
                    <div id={v} onClick={onDotClick} className={`dot-circle-active ${v===SelectedDot?'dot-circle-selected':null}`} />
                </div>
            )
        })
    }
    // onArrowClick = {setSelectedimg} , CurrentImg = {SelectedImg}
    const GenerateCarouselArrow = (props)=>{
        const onArrowPoint = (e)=>{
            const imgindex = imgset.indexOf(props.CurrentImg);
            switch(e.target.id){
                case "R":
                    imgindex===imgset.length-1 ? props.setCurrenImg(imgset[0]) : props.setCurrenImg(imgset[imgindex+1]);
                    break;  
                case "L":
                    imgindex===0 ? props.setCurrenImg(imgset[imgset.length-1]) : props.setCurrenImg(imgset[imgindex-1]);
                    break;
                default :
                    break;
            }
        }
        return(
            <>
                <div className="carousel-arrow arrow-left" onClick={onArrowPoint} id='L'>
                    {'<'}
                </div>
                <div className="carousel-arrow arrow-right" onClick={onArrowPoint} id='R'>
                    {'>'}
                </div>
            </>
        )
    }
    return(
        <>
            <img alt="img" className="imgbox" src={require(`../../imgs/${Selectedimg}`)} />
            <div id='carousel-container'>
                <div id='carousel-dot-container'>
                    <GenetateNavigationDot SelectedDot={Selectedimg} onDotClick={onImgChange} />
                </div>
                <GenerateCarouselArrow CurrentImg={Selectedimg} setCurrenImg={setSelectedimg} />
            </div>
        </>
    )
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
    const [ImgList, setImgList] = useState([])
    const PurchaseButtonEvent = (e)=>{
        setInfObject(GetData().filter(element=>element.id===e.target.id))
        changeShowstate(false)
    }
    const InfocardBackEvent = ()=>{
        changeShowstate(true)
    }
    return (
        showlist ? <Cardgenerate ButtonEvent={PurchaseButtonEvent} setImgList={setImgList}  /> : <Infocard ImgList={ImgList} InfObject={InfObject} onBack={InfocardBackEvent} popup={props.popup} />
    )
}


export default Scrollcard;