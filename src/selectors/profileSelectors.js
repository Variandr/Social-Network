import {createSelector} from "reselect";

const getProfile = (state) => state.profilePage.profile;
export const getStatus = (state) => state.profilePage.status;
export const getId = (state) => state.loginPage.id;
export const getProfileSelector = createSelector(getProfile, (profile) => {
    return profile
})
export const getStatusSelector = createSelector(getStatus, (status) => {
    return status
})
export const getIdSelector = createSelector(getId, (id) => {
    return id
})
