import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";

import GeneralParameters from "../../components/GeneralParamters";

const page2List = [
    {
        name: 'list-1',
        desc: 'this is list-1'
    }, {
        name: 'list-2',
        desc: 'this is list-2'
    }, {
        name: 'list-3',
        desc: 'this is list-3'
    }
]

const Page2 = () => {
    const { history } = GeneralParameters;
    const dispatch = useDispatch();
    return (
        <>
            <div>This is Page 2</div>
            {page2List.map(list =>
                <Link key={list.name} to={`/page2/${list.name}`} style={{marginRight:'20px'}}>page2: {list.name}</Link>
            )}
            <Outlet />
            <div onClick={() => {
                history('/login');
                localStorage.removeItem('token');
                dispatch({ type: 'LOGOUT' });
            }}>LOGOUT</div>
        </>

    )
}

export default Page2;