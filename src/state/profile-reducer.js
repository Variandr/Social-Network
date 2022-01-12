import {ProfileAPI} from "../API/api";

const TOGGLE_FETCHING = '/profile/TOGGLE_FETCHING';
const ADD_PROFILE = '/profile/ADD_PROFILE';
const SET_STATUS = '/profile/UPDATE_STATUS';

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
const ToggleFetching = (isFetching) => ({type: TOGGLE_FETCHING, isFetching});
const AddProfile = (profile) => ({type: ADD_PROFILE, profile});
const setStatus = (status) => ({type: SET_STATUS, status});
export const getProfile = (userId) => async (dispatch) => {
    dispatch(ToggleFetching(true));
    let data = await ProfileAPI.getProfile(userId);
    dispatch(ToggleFetching(false));
    dispatch(AddProfile(data));
};
export const getStatus = (userId) => async (dispatch) => {
    let response = await ProfileAPI.getStatus(userId);
    dispatch(setStatus(response.data))
};
export const updateStatus = (status) => async (dispatch) => {
    let response = await ProfileAPI.updateStatus(status);
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
    }
};