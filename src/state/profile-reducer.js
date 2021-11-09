import {ProfileAPI} from "../API/api";

const TOGGLE_FETCHING = 'TOGGLE_FETCHING';
const ADD_PROFILE = 'ADD_PROFILE';
const SET_STATUS = 'UPDATE_STATUS';

let initialState = {
    profile: null,
    isFetching: false,
    status: ''
};
const ProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FETCHING:
            return {...state, isFetching: action.isFetching}
        case ADD_PROFILE:
            return {...state, profile: action.profile}
        case SET_STATUS:
            return {...state, status: action.status}
        default:
            return state;
    }
}

export default ProfileReducer;
export const ToggleFetching = (isFetching) => ({type: TOGGLE_FETCHING, isFetching});
export const AddProfile = (profile) => ({type: ADD_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status});
export const getProfile = (userId) => (dispatch) => {
    dispatch(ToggleFetching(true));
    ProfileAPI.getProfile(userId).then(data => {
        dispatch(ToggleFetching(false));
        dispatch(AddProfile(data));
    });
};
export const getStatus = (userId) => (dispatch) => {
    ProfileAPI.getStatus(userId).then(response => {
        dispatch(setStatus(response.data))
    })
};
export const updateStatus = (status) => (dispatch) => {
    ProfileAPI.updateStatus(status).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status));
        }
    })
};