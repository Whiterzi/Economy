import React ,{useState,createContext,useContext} from "react";
import './Infocard.scss'
import backarrow from '../../imgs/Backarrow.png'
import GoodStoremark from '../../imgs/GoodStoreMark.png'
import followheart from '../../imgs/addfollow.png'

// imgset
const InfocardImageView = ()=>{
    const imgset = useContext(Imgprovider)
    const [Bigimage , setBigimage] = useState(imgset[0])
    const onItemClick = (e)=>{
        setBigimage(e.target.id)
    }
    return(
        <>
            <div id="imageview-left-div">
                {imgset.map(element=>{
                    return (
                        Bigimage.indexOf(element)===-1 && 
                                <img id={element} alt='img' src={require(`../../imgs/${element}`)} onClick={onItemClick} className='imageview-left-item' />
                        )
                })}
            </div>
            <div id="imageview-right-div">
                <div id="imageview-right-item">
                    <img id={Bigimage} alt='img' src={require(`../../imgs/${Bigimage}`)} />
                </div>
            </div>
        </>
    )
}
// onback={Scrollcard.InfocardBackEvent} ,Info={Scrollcard.InfObject} popup={GreenMatchList.Callpopup}
const Infocardgenerate = (props) => {
    const Infos = props.Info[0]
    return (
        <div id='infocard-body'>
            <div id='go-back-button' onClick={props.onback}>
                <img src={backarrow} alt="backarrow" />
                返回
            </div>
            <div id='header-tag-and-id'>
                <div id='header-tags'>
                    <div id='charactor'>
                        賣
                    </div>
                    <div id='item-type'>
                        {Infos.type}
                    </div>
                    <img src={GoodStoremark} alt='goodstoremark' id={Infos.goodstore?'good-store-mark':'good-store-mark-hidden'} />
                </div>
                <div id='header-id'>
                    編號：{Infos.id}
                </div>
            </div>
            <div id='item-name-and-follow'>
                <div id='item-name'>
                    {Infos.name}
                </div>
                <div id="follow-heart">
                    <img src={followheart} alt='heart' />
                    <div id="tooltip-for-heart">加入追蹤</div>
                </div>
            </div>
            <div id='image-preview'>
                <InfocardImageView />
            </div>
            <div id='price-and-purchase'>
                <div id='price'>
                    $  {Infos.price}
                </div>
                <button className='purchase-button' id={Infos.id} onClick={props.popup}>
                    購買
                </button>
            </div>
            <div id='infos'>
                <div id='infos-left'>
                    <div id='rates'>
                        <div id='rates-title'>
                            詢問度
                        </div>
                        <div id='rates-visual'>

                        </div>
                        <div id='rates-description'>
                            10間公司在接洽
                        </div>
                    </div>
                    <div id='basic-info'>
                        <div id='basic-info-title'>
                            基本資訊
                        </div>
                        <div id='basic-info-description'>
                            <p>● 賣方 {}</p>
                            <p>● 上架日期 {Infos.postdate}</p>
                            <p>● 物品所在地 {Infos.location}</p>
                        </div>
                    </div>
                </div>
                <div id='infos-right'>
                    <div id='spec-title'>
                        規格與內容
                    </div>
                    <div id='spec-content'>
                        <p>● 尺寸(長*寬*高)：{Infos.size}</p>
                        <p>● 總重：{Infos.size}</p>
                        <p>● 狀態：{Infos.state}</p>
                        <p>● 規格詳述：{}</p>
                        <button id='asking-button'>
                            我要問賣家
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}
const Imgprovider=createContext()
// ImgList={Scrollcar.ImgList}, InfObject={Scrollcard.InfObject}, onBack={Scrollcard.InfocardBackEvent}, popup={GreenMatchList.popup}
const Infocard = (props) => {
    return(
        <Imgprovider.Provider value={props.ImgList}>
            <Infocardgenerate onback={props.onBack} Info={props.InfObject} popup={props.popup} /> 
        </Imgprovider.Provider>
    )

}

export default Infocard;