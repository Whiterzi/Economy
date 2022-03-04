import api from './Utils/Api.js.js';
import GeneralParameters from '../Page/GeneralParamters.js';

const AuthService = {
    Token: ({ headers, data } = {}, option = {}) => {
        const url = `${GeneralParameters.env.REACT_APP_API_HOST}/auth/token`;
        const method = "POST";
        return api({ url, method, headers, data }, option = {});
    }

}

export default AuthService;