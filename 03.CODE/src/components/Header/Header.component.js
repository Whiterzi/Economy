import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import Navbar from "../Navigationbar/Navigationbar";
import './Header.component.scss'
const items = [
    {
        name: 'PAGE 1',
        path: '/page1'

    }, {
        name: 'PAGE 2',
        path: '/page2'
    },{
        name: 'Main Page',
        path: '/MainPage'
    }
];

const Header = () => {
    return (
        <div id="header-frame">
            {/* <div>
                {items.map(item =>
                    <NavLink key={item.name} className={({ isActive }) => isActive ? 'active' : 'inactive'} to={item.path} >{item.name}</NavLink>
                )}
            </div> */}
            <Navbar />
            <div id="outlet">
            {/* The <Outlet> element is used as a placeholder. In this case an <Outlet> enables the Users component to render its child routes. */}
                <Outlet />
            </div>
        </div>
    );
}

export default Header;