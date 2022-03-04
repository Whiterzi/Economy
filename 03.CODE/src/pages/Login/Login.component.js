import React, { useState, useEffect, useCallback } from 'react';

import { Password } from 'primereact/password';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import GeneralParameters from '../../components/GeneralParamters';

// import LoginService from './Login.service';
import LoginLogo from '../../imgs/login-logo.svg';

import './Login.component.scss';


const Login = () => {
    const { token, toast, history, userInfo } = GeneralParameters;
    const [state, setState] = useState({ user: '', pwd: '' });


    // const onLoginLoading = useCallback(() => {
        // const loginLoading = () => {

        //     LoginService.getToken(state.user, state.pwd).then(r => {
        //         token.setToken(r.content.token);
        //         userInfo.setUserId(r.content.userId);
        //         userInfo.setUserName(r.content.userName);
        //         toast.current.show({ severity: 'success', summary: 'Successful', detail: 'Success', life: 3000 });

        //         setTimeout(() => {
        //             history.push('/page/index');
        //         }, 1000);
        //     }).catch(err => {
        //         console.log('login error', err);
        //         toast.current.show({ severity: 'error', summary: 'Error', detail: 'Username/Password Error', life: 3000 });
        //     });
        // }

        // loginLoading();

    // }, [state, token, toast, history, userInfo]);
    

    // useEffect(() => {
    //     const pressEnter =  (e) => {
    //         if (e.keyCode === 13 && state.user !== '' && state.pwd !== '') {
    //             onLoginLoading();
    //         }
    //     }

    //     document.addEventListener('keyup', pressEnter);
    //     return () => {
    //         document.removeEventListener('keyup', pressEnter);
    //     };
    // }, [state, onLoginLoading]);



    const StyleSheet = {
        position:'relative',
        width: '100vw',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        color:'red'
        // backgroundImage: `url(${LoginBackgroundImage})` 
        
    }

    return (
        <div style={StyleSheet} className='login-background-image' onClick={() => {
            localStorage.setItem('token', '123');
            history('/page1');
        }}>

            <div className='content-section implementation' style={{ width: '100%', position:'absolute', top:'20%', left:'0%', transform:'tranlate(-50%)', zIndex:'9999'}}>
                <div className='card' >
                    < div className='p-fluid p-grid' style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <div className='p-field p-col-12 p-md-4' ></div>

                        <div className='p-field p-col-12 p-md-4' style={{ border: '1px solid rgb(206, 206, 206)', borderRadius: '5px', maxWidth: '550px' , backgroundColor:'rgba(255, 255, 255, 1)', boxShadow:'0px 0px 10px 1px rgba(255, 255, 255, 0.452)'}}>
                            < div className='p-fluid p-grid' >

                                <div className='p-field p-col-12 p-md-1'></div>
                                <div className='p-field p-col-12 p-md-10 logo'>
                                    <img className='logo-img' src={LoginLogo} alt='login-logo' ></img>
                                </div>
                                <div className='p-field p-col-12 p-md-1'></div>

                                <div className='p-field p-col-12 p-md-1'></div>
                                <div className='p-field p-col-12 p-md-10'>
                                    <div className='p-inputgroup'>
                                        <span className='p-inputgroup-addon'>
                                            <i className='pi pi-user'></i>
                                        </span>
                                        <span className='p-float-label'>
                                            <InputText
                                                id='user'
                                                type='text'
                                                value={state.user}
                                                onChange={e => setState(prevState => ({ ...prevState, user: e.target.value }))}
                                            />
                                            <label htmlFor='User'>User</label>
                                        </span>
                                    </div>
                                </div>
                                <div className='p-field p-col-12 p-md-1'></div>

                                <div className='p-field p-col-12 p-md-1'></div>
                                <div className='p-field p-col-12 p-md-10'>
                                    <span className='p-float-label'>
                                        <Password
                                            inputId='password'
                                            value={state.pwd}
                                            onChange={(e) => setState(prevState => ({ ...prevState, pwd: e.target.value }))}
                                            toggleMask
                                        />
                                        <label htmlFor='password'>Password</label>
                                    </span>
                                </div>
                                <div className='p-field p-col-12 p-md-1'></div>

                                <div className='p-field p-col-12 p-md-1'></div>
                                <div className='p-field p-col-12 p-md-10' style={{marginTop:'40px'}}>
                                    <Button label='Login' disabled={state.user === '' || state.pwd === '' ? true : false} />
                                </div>
                                <div className='p-field p-col-12 p-md-1'></div>
                            </div>
                        </div>
                        <div className='p-field p-col-12 p-md-4'></div>
                    </div>
                </div>
            </div >



        </div >
    );
}

export default Login;