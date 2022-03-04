
/** 平台共用環境參數設定 */

const generalParameters = {

    env: {},
    history: {},
    token: {
        getToken: () => { return localStorage.getItem('token'); },
        setToken: (token) => { localStorage.setItem('token', token); },
        removeToken: () => { localStorage.removeItem('token'); },
    },
    toast: undefined,
    userInfo: {
        getUserId: () => { return localStorage.getItem('issue-userId'); },
        setUserId: (userId) => { localStorage.setItem('issue-userId', userId); },
        removeUserId: () => { localStorage.removeItem('issue-userId'); },

        getUserName: () => { return localStorage.getItem('issue-userName'); },
        setUserName: (userName) => { localStorage.setItem('issue-userName', userName); },
        removeUserName: () => { localStorage.removeItem('issue-userName'); },
    }

}

export default generalParameters;
