import {AuthAPI} from "../API/api";
import {stopSubmit} from "redux-form";

const ADD_AUTH_DATA = 'ADD_AUTH_DATA';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
};
const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_AUTH_DATA:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}

export default AuthReducer;
export const AddAuthInfo = (userId, email, login, isAuth) => ({
    type: ADD_AUTH_DATA,
    payload: {userId, email, login, isAuth}
});
export const AuthMe = () => (dispatch) => {
    AuthAPI.authMe().then(response => {
        if (response.data.resultCode === 0) {
            let {userId, login, email} = response.data.data;
            dispatch(AddAuthInfo(userId, email, login, true));
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
