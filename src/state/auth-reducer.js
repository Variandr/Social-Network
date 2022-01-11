import {AuthAPI} from "../API/api";
import {stopSubmit} from "redux-form";

const ADD_AUTH_DATA = 'ADD_AUTH_DATA';

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
};
const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_AUTH_DATA:
            return {...state, ...action.payload}
        default:
            return state;
    }
}

export default AuthReducer;
export const AddAuthInfo = (id, email, login, isAuth) => ({
    type: ADD_AUTH_DATA,
    payload: {id, email, login, isAuth}
});
export const AuthMe = () => (dispatch) => {
    return AuthAPI.authMe().then(response => {
        if (response.data.resultCode === 0) {
            let {id, login, email} = response.data.data;
            dispatch(AddAuthInfo(id, email, login, true));
        }
    })
}
export const LogIn = (login, password, rememberMe) => (dispatch) => {
    AuthAPI.login(login, password, rememberMe).then(response => {
        console.log(response.data)
        if (response.data.resultCode === 0) {
            dispatch(AuthMe())
        } else {
            let msg = response.data.messages.length > 0 ? response.data.messages[0] : "Unknown error";
            dispatch(stopSubmit('login', {_error: msg}))
        }
    })
}
export const LogOut = () => (dispatch) => {
    AuthAPI.logout().then(response => {
        if (response.data.resultCode === 0) {
            dispatch(AddAuthInfo(null, null, null, false))
        }
    })
}
