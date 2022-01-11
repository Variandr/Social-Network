import {createSelector} from "reselect";

const getUsers = (state) => state.usersPage.users;
const getTotalUsersSize = (state) => state.usersPage.totalUsers;
const getUsersSizeOnPage = (state) => state.usersPage.usersOnPage;
const getPage = (state) => state.usersPage.currentPage;
const getFetching = (state) => state.usersPage.isFetching;
const getFollowingProgress = (state) => state.usersPage.followingProgress;
export const getUsersSelector = createSelector(getUsers, (users) => {
    return users
})
export const getTotalUsersSizeSelector = createSelector(getTotalUsersSize, (uSize) => {
    return uSize
})
export const getUsersSizeOnPageSelector = createSelector(getUsersSizeOnPage, (sizeOnPage) => {
    return sizeOnPage
})
export const getPageSelector = createSelector(getPage, (page) => {
    return page
})
export const getFetchingSelector = createSelector(getFetching, (isFetching) => {
    return isFetching
})
export const getFollowingProgressSelector = createSelector(getFollowingProgress, (progress) => {
    return progress
})