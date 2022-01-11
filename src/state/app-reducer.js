import {AuthMe} from "./auth-reducer";

const SET_INITIALIZED = 'SET_INITIALIZED';

let initialState = {
initialized: false,
};
const AppReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIALIZED:
            return {...state, initialized: true}
        default:
            return state;
    }
}

export default AppReducer;
const initialSuccess = () => ({type: SET_INITIALIZED});
export const initializeApp = () => (dispatch) => {
    let promise = dispatch(AuthMe());
    Promise.all([promise]).then(() => {
        dispatch(initialSuccess());
    })
}
