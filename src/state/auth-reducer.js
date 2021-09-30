import {AuthAPI} from "../API/api";

const ADD_AUTH_INFO = 'ADD_AUTH_INFO';

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
};
const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_AUTH_INFO:
            return {...state, ...action.data, isAuth: true}
        default:
            return state;
    }
}

export default AuthReducer;
export const AddAuthInfo = (data) => ({type: ADD_AUTH_INFO, data});
export const AuthMe = () => {
    return (dispatch) => {
        AuthAPI.authMe().then(response => {
            dispatch(AddAuthInfo(response.data.data))
        })
    }
}
