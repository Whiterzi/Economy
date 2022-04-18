import React from "react";
import './Matchconfirm.scss'
import GetData from "../GetData";

/*
--props 
popoff - GreenMatchList.Callpopoff from Mathchconfirm
popid - GreenMatchList.PopupID  from Matchconfirm
*/
const MatchconfirmPop = (props) => {
    // find object using popid 
    const datalist = (GetData().filter(element => element.id === props.popid))[0]

    return (
        <div id="pop-window-base">
            <div id="confirm-title">
                媒合確認
            </div>
            <div id='trade-info-container'>
                <div id="sale-and-buy">
                    <div id="sale">
                        <div id='sale-title'>
                            賣方
                        </div>
                        <div id='sale-content'>
                            <p>公司名稱：{ 'Amazon Mortal Design'}</p>
                            <p>聯絡窗口：{ '蘇小姐'}</p>
                            <p>聯絡方式：{ '0912345678'}</p>
                            <p>email：{ 'amd@amd.com.org.gov' }</p>
                        </div>
                    </div>
                    <div id="buy">
                        <div id='buy-title'>
                            買方
                        </div>
                        <div id='buy-content'>
                            <p>公司名稱：{ 'Navigation Vibrate Define Indivisual Apple'}</p>
                            <p>聯絡窗口：{ '黃先生'}</p>
                            <p>聯絡方式：{ '0912345562'}</p>
                            <p>email：{ 'nvidlma@ndmia.super.com'}</p>
                        </div>
                    </div>
                </div>
                <div id="merchandise-info">
                    <div id='merchandise-image'>
                        <img src={require('../../imgs/img2.jpg')} alt="" />
                    </div>
                    <div id='merchandise-content'>
                        <div id='info'>
                            <p>編號：{datalist.id}</p>
                            <p>媒合項目：{datalist.name}</p>
                            <p>媒合項目所在地：{datalist.location}</p>
                            <p>媒合金額：{datalist.price}</p>
                        </div>
                        <div id='spec'>
                            <div id='spec-title'>
                                規格與內容
                            </div>
                            <div id='spec-content'>
                                <p>● 尺寸(長*寬*高)：{datalist.size}</p>
                                <p>● 總重：{ }</p>
                                <p>● 狀態：{datalist.state}</p>
                                <p>● 規格詳述：{ }</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id='precautions'>
                <p>注意事項：無</p>
            </div>

            <div id="background-square" />
            <button id='confirm-button' onClick={props.popoff}>
                確定
            </button>
        </div>
    )
}


/*
--props 
enable - GreenMatchList.Popup
popup - GreenMatchList.Callpopup
popoff - GreenMatchList.Callpopoff
popid - GreenMatchList.PopupID
*/
const Matchconfirm = (props) => {
    if (props.enable) {
        return (
            <div id='matchconfirm-base' onClick={props.popoff}>
                <MatchconfirmPop popoff={props.popoff} popid={props.popid} />
            </div>
        )
    } else {
        return <></>
    }
}

export default Matchconfirm