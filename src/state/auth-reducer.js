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
const AddAuthData = (id, email, login, isAuth) => ({
    type: ADD_AUTH_DATA,
    payload: {id, email, login, isAuth}
});
export const AuthMe = () => async (dispatch) => {
    let response = await AuthAPI.authMe();
    if (response.data.resultCode === 0) {
        let {id, login, email} = response.data.data;
        dispatch(AddAuthData(id, email, login, true));
    }
}
export const LogIn = (login, password, rememberMe) => async (dispatch) => {
    let response = await AuthAPI.login(login, password, rememberMe);
    if (response.data.resultCode === 0) {
        dispatch(AuthMe())
    } else {
        let msg = response.data.messages.length > 0 ? response.data.messages[0] : "Unknown error";
        dispatch(stopSubmit('login', {_error: msg}))
    }
}
export const LogOut = () => async (dispatch) => {
    let response = await AuthAPI.logout();
    if (response.data.resultCode === 0) {
        dispatch(AddAuthData(null, null, null, false))
    }
}
