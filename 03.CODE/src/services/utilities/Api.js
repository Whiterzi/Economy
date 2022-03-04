import axios from 'axios';
import GeneralParameters from '../../Page/GeneralParamters';

/**
 * to do API 須加上token
 */
let api = ({ url, method, headers = {}, data }, option = {}) => {

    /** 在非登入頁面時, 帶token */
    if (url.indexOf('/user/get-token') === -1) {
        headers ? headers = { authorization: `Bearer ${GeneralParameters.token.getToken()}` } : headers.authorization = `Bearer ${GeneralParameters.token.getToken()}`;
    }

    return new Promise((resolve, reject) => {
        axios({
            method: method || 'GET',
            url: url,
            data: data ? data : null,
            headers: headers || {},
            ...option
        }).then(res => {
            resolve(res.data);
        }).catch(err => {

            if (err.response.status === 403) { 
                GeneralParameters.history('/login');
        }
            
            reject(err);
        });
    });
}

export default api;