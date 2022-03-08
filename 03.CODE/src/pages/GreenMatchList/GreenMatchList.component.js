import React , {useState} from "react";
import './GreenMatchList.component.scss';
import Searchbar from "../../components/SearchBar/Searchbar";
import DivSwitch from "../../components/DivSwitch/Divswitch";
import Sidebar from "../../components/SideBar/Sidebar";
import { ScrollPanel } from 'primereact/scrollpanel';
import Scrollcard from "../../components/ScrollCard/Scrollcard";
import Filterchips from "../../components/FilterChips/Filterchips";
import Matchconfirm from "../../components/MatchConfirm/Matchconfirm";


const GreenMatchList = ()=>{
    const [SidebarState , setSidebarState] = useState("Init")
    const [Filteroption , setFilteroption] = useState([]);
    const [Popup , setPopup] =useState(false);
    const [PopupID , setPopupID] =useState();
    const [Searchvalue , onSearching] = useState('');

    const openSidebar = ()=>{
        setSidebarState(!SidebarState)
    }

    const onCheckboxChanges = (e)=>{
        let tempFilteroption = [...Filteroption]
        if(e.checked){
            tempFilteroption.push(e.target.value)
        }else{
            tempFilteroption.splice(Filteroption.indexOf(e.value),1)
        }
        setFilteroption(tempFilteroption)
    }
    const onItemDelete = (e)=>{
        let tempFilteroption = [...Filteroption]
        tempFilteroption.splice(tempFilteroption.indexOf(e.target.id),1)
        setFilteroption(tempFilteroption)
    }

    const Callpopup = (e)=>{
        setPopupID(e.target.id)
        setPopup(true)        
    }
    const CallPopoff = ()=>{
        setPopup(false)
    }

    return( 
        <>
        <Matchconfirm enable={Popup} popup={Callpopup} popoff={CallPopoff} popid={PopupID}/>
        <div id="frame">
            <div id="frame-parent">
                <div id="frame-head">
                     <div id="filter-container">
                        <div>
                        <div id='filter'>
                        { /* eslint-disable-next-line jsx-a11y/anchor-is-valid */ }
                            <a id="filtertitle" onClick={openSidebar}>篩選條件:</a>
                            <div id="chip-container">
                                <Filterchips Filteroption={Filteroption} onItemDelete={onItemDelete} />
                            </div>
                        </div>
                         <div id="finding-switch">
                             <DivSwitch />
                         </div>
                        </div>
                     </div>
                    <div id="carbonfoot">
                        <div>
                            <img src={require('../../imgs/CarbonFoot.png')} alt="foot" />
                        </div>
                        <Searchbar id="searchbar" onSearch={onSearching} values={Searchvalue}/>
                    </div>
                </div>
                <div id="frame-body">
                    <Sidebar 
                        SidebarState = {SidebarState} 
                        setSidebarState = {setSidebarState} 
                        Filteroption={Filteroption} 
                        onCheckboxChanges={onCheckboxChanges}
                     />
                    <div id="frame-body-container">
                        <div id="frame-body-map"></div>
                        <div id="frame-body-list">
                            <ScrollPanel id="scrollpanel">
                                <Scrollcard filter={Filteroption} keyword={Searchvalue} popup={Callpopup} />
                            </ScrollPanel>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}




export default GreenMatchList;;