import React from "react";
import './Sidebar.scss';
import { Dropdown } from "primereact/dropdown";
import { Checkbox } from 'primereact/checkbox';
import { Button } from 'primereact/button';




/*
Filteroption - GreenMatchList.Filteroption from Sidebar
onCheckboxChanges - GreenMatchList.onCheckboxChanges from Sidebar
*/
const GenerateCheckBox = (props) => {
    const FilterArray = [{
        ID: 'chwood',
        value: '木材'
    }, {
        ID: 'chmetal',
        value: '金屬'
    }, {
        ID: 'chdesk',
        value: '桌椅',
    }, {
        ID: 'ch3c',
        value: '3C產品'
    }]
    return FilterArray.map(element => {
        return (
            <React.Fragment key={element.ID}>
                <Checkbox id='checkbox-size' inputId={element.ID} value={element.value} onChange={props.callback} checked={props.Filteroption.includes(element.value)}></Checkbox>
                <label htmlFor={element.ID} className="p-checkbox-label">{element.value}</label>
            </React.Fragment>
        )
    })

}
/*
--props
SidebarState - GreenMatchList.SidebarState
setSidebarState - GreenMatchList.setSidebarState
Filteroption - GreenMatchList.Filteroption
onCheckboxChanges - GreenMatchList.onCheckboxChanges
*/

const Sidebar = (props) => {
    const onTriggerChange = () => {
        props.setSidebarState(!props.SidebarState)
    }
    const dropdownWidth = {
        width: '170px'
    }
    const chekboxsize = {
        transform: 'scale(1.5)'
    }

    const barbuttontrigger = `sidebar-trigger ${props.SidebarState !== "Init" ? (props.SidebarState ? 'sidebar-triggered' : 'sidebar-nottriggered') : ''}`
    const barpaneltrigger = `sidebar ${props.SidebarState !== "Init" ? (props.SidebarState ? 'sidebar-triggered' : 'sidebar-nottriggered') : ''}`
    return (
        <>
            <div className={barbuttontrigger} onClick={onTriggerChange} >
                {!props.SidebarState ? '<' : '>'}
            </div>
            <div className={barpaneltrigger}>
                <div id="sidebar-content">
                    <div className="sidebar-title">
                        <div className="sidebar-text">地區</div>
                    </div>
                    <div id="dropdown-group">
                        <Dropdown style={dropdownWidth} placeholder="新北市" />
                        <Dropdown style={dropdownWidth} placeholder="五股區" />
                    </div>
                    <div className="sidebar-title">
                        <div className="sidebar-text">種類</div>
                    </div>
                    <div id="sidebar-checkbox-list">
                        <GenerateCheckBox callback={props.onCheckboxChanges} Filteroption={props.Filteroption} />
                    </div>
                    <div className="sidebar-title">
                        <div className="sidebar-text">優質商家</div>
                    </div>
                    <div id="sidebar-great-store">
                        <Checkbox style={chekboxsize} inputId="cbgoodstore" value="優質商家" onChange={props.onCheckboxChanges} checked={props.Filteroption.includes("優質商家")}></Checkbox>
                        <label htmlFor="cbgoodstore" className="p-checkbox-label" style={{ marginLeft: '10px' }}>優質商家</label>
                    </div>
                    <div className="sidebar-title searchbutton-position">
                        <Button label='搜尋' onClick={onTriggerChange} />
                    </div>
                </div>
            </div>
        </>
    )

}

export default Sidebar;