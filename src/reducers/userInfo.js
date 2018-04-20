import { USERINFO } from '../constants/ActionTypes';
import * as Cookies from "js-cookie";

const initialUserInfoState = {
    token: null,
    access: {}
}

export default function (state = initialUserInfoState, action = {}) {
    let { response } = action;
    switch (action.type) {
        // case USERINFO.USER_LOGIN:
        //     Cookies.set('token', response.data.info.token, { expires: 2 })
        //     Cookies.set('username', response.data.info.username, { expires: 2 })
        //     Cookies.set('userid', response.data.info.id, { expires: 2 })
        //     Cookies.set('roleId', response.data.info.roleId, { expires: 2 })
        //     Cookies.set('administrator', response.data.info.administrator ? response.data.info.administrator : false, { expires: 2 })
        //     Cookies.set('permission', JSON.stringify(response.data.info.permission), { expires: 2 })
        //     Cookies.set('role', response.data.info.role, { expires: 2 })
        //     return Object.assign({}, state, {
        //         token: response.data.info.token,
        //         access: {
        //             role: response.data.info.role || '',
        //             administrator: response.data.info.administrator ? response.data.info.administrator : false,
        //             username: response.data.info.username,
        //             userid: response.data.info.id,
        //             permission: response.data.info.permission, // 后台服务许可
        //         }
        //     })
        // case USERINFO.USER_LOGOUT:
        //     Cookies.remove('token');
        //     Cookies.remove('username');
        //     Cookies.remove('userid');
        //     Cookies.remove('roleId');
        //     Cookies.remove('administrator');
        //     Cookies.remove('permission');
        //     Cookies.remove('role');
        //     return Object.assign({}, state, {
        //         token: null,
        //         access: {}
        //     })
        default:
            return state
    }
}