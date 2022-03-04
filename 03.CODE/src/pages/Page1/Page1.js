import { useSelector, useDispatch } from "react-redux";

import GeneralParameters from "../../components/GeneralParamters";

const Page1 = () => {
    const { history } = GeneralParameters;
    const testData = useSelector(state => state.test);
    const dispatch = useDispatch();
    return (
        <>
            <div>This is Page 1</div>
            <div onClick={() => {
                dispatch({
                    type: 'THIS_IS_TEST',
                    payload: '測試' 
                });
            }}> Click to trigger React-Redux and Redux-saga Test Work </div>
            <div style={{marginBottom:'50px'}}>{testData.length !==0 && testData[0].name}</div>
            <div onClick={() => {
                history('/login');
                localStorage.removeItem('token');
                dispatch({ type: 'LOGOUT' });
            }}>LOGOUT</div>
        </>
    )
}

export default Page1;

