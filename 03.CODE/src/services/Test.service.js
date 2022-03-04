// import api from './Utils/Api.js';
// import GeneralParameters from '../Page/GeneralParamters.js';
import axios from 'axios';



const TestService = {
    Test: ({ headers, data } = {}, option = {}) => {
        // const url = `${GeneralParameters.env.REACT_APP_API_HOST}/auth/token`;
        const url = 'http://universities.hipolabs.com/search?country=United+States';
        const method = 'GET';

        let api = ({ url, method, headers = {}, data }, option = {}) => {

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
        
                    // if (err.response.status === 403) { 
                    //     GeneralParameters.history('/login');
                // }
                    reject(err);
                    console.log('err', err)
                });
            });
        }

        return api({ url, method, headers, data }, option = {});
    }

}

export default TestService;