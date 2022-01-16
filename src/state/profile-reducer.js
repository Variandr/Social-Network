import {ProfileAPI} from "../API/api";
import {stopSubmit} from "redux-form";

const TOGGLE_FETCHING = '/profile/TOGGLE_FETCHING';
const ADD_PROFILE = '/profile/ADD_PROFILE';
const SET_STATUS = '/profile/UPDATE_STATUS';
const SET_PHOTOS = '/profile/SET_PHOTOS';

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
        case SET_PHOTOS:
            return {...state, profile: {...state.profile, photos: action.photos}}
        default:
            return state;
    }
}

export default ProfileReducer;
const ToggleFetching = (isFetching) => ({type: TOGGLE_FETCHING, isFetching});
const AddProfile = (profile) => ({type: ADD_PROFILE, profile});
const setStatus = (status) => ({type: SET_STATUS, status});
const setPhoto = (photos) => ({type: SET_PHOTOS, photos})
export const getProfile = (userId) => async (dispatch) => {
    dispatch(ToggleFetching(true));
    let data = await ProfileAPI.getProfile(userId);
    dispatch(ToggleFetching(false));
    dispatch(AddProfile(data.data));
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
export const updatePhoto = (photo) => async (dispatch) => {
    let response = await ProfileAPI.updatePhoto(photo)
    if(response.data.resultCode === 0){
        dispatch(setPhoto(response.data.data.photos))
    }
};
export const updateProfile = (profile) => async (dispatch, getState) => {
    let userId = getState().loginPage.id
    let response = await ProfileAPI.updateProfile(profile);
    if (response.data.resultCode === 0) {
        dispatch(getProfile(userId))
    }else{
        dispatch(stopSubmit("profile", {_error: response.data.messages[0] }));
        return Promise.reject(response.data.messages[0]);
    }
}