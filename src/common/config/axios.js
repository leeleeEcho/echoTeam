import axios from 'axios'
import qs from 'qs'
import NProgress from 'nprogress'
import * as Cookies from "js-cookie";
import server from './host';

axios.defaults.baseURL = server;

axios.interceptors.request.use(config => {
    NProgress.start()
    let configUrl = config.url;
    if (configUrl === 'api/1.0/userLogin') {
        return config
    } else {
        let token = Cookies.get('token');
        if (token) {
            return config
        } else {
            window.location.href = '/login'
        }
    }

}, error => {
    return Promise.reject(error)
})

axios.interceptors.response.use(response => response, error => Promise.resolve(error.response))

function checkStatus(response) {
    NProgress.done()
    if (response.status === 200 || response.status === 304 || response.status === 204) {
        return response
    }
    return {
        data: {
            code: -404,
            message: response.statusText,
            data: response.statusText,
        }
    }
}

function checkCode(res) {
    if (res.status !== 200) {
        alert(res.data.message)
    }
    return res
}

export default {
    post(url, data) {
        let token = Cookies.get('token');
        data['token'] = token || 'mockToken'
        return axios({
            method: 'post',
            url,
            data: qs.stringify(data),
            timeout: 30000
        }).then(checkStatus).then(checkCode)
    },
    get(url, params) {
        return axios({
            method: 'get',
            url,
            params,
            timeout: 30000,
            headers: {
                'X-Requested-With': 'XMLHttpRequest'
            }
        }).then(checkStatus).then(checkCode)
    }
}