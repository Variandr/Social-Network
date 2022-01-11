import {UsersAPI} from "../API/api";
import {ChangeArrayData} from "../helpers/objectHelpers";

const FOLLOW = 'ADD_POST';
const UNFOLLOW = 'UPDATE_POST_TEXT';
const ADD_USER = 'ADD_PEOPLE';
const SET_TOTAL_USERS = 'SET_TOTAL_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const TOGGLE_FETCHING = 'TOGGLE_FETCHING';
const TOGGLE_FOLLOWING = 'TOGGLE_FOLLOWING';

let initialState = {
    users: [],
    currentPage: 1,
    usersOnPage: 6,
    totalUsers: 0,
    isFetching: false,
    followingProgress: [],
};
const UsersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {...state, users: ChangeArrayData(state.users, "id", action.userID, {followed: true})}
        case UNFOLLOW:
            return {...state, users: ChangeArrayData(state.users, "id", action.userID, {followed: false})}
        case ADD_USER:
            return {...state, users: action.users}
        case SET_TOTAL_USERS:
            return {...state, totalUsers: action.usersCount}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case TOGGLE_FETCHING:
            return {...state, isFetching: action.isFetching}
        case TOGGLE_FOLLOWING:
            return {
                ...state,
                followingProgress: action.isFetching
                    ? [...state.followingProgress, action.userId]
                    : state.followingProgress.filter(id => id !== action.userId)
            }
        default:
            return state;
    }
}

export default UsersReducer;
const Follow = (userID) => ({type: FOLLOW, userID});
const Unfollow = (userID) => ({type: UNFOLLOW, userID});
export const AddUsers = (users) => ({type: ADD_USER, users});
export const SetTotalUsers = (usersCount) => ({type: SET_TOTAL_USERS, usersCount});
export const SetCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const ToggleFetching = (isFetching) => ({type: TOGGLE_FETCHING, isFetching});
export const ToggleFollowing = (followingProgress, userId) => ({type: TOGGLE_FOLLOWING, followingProgress, userId});

export const getUsers = (currentPage, pageSize) => {
    return async (dispatch) => {
        dispatch(SetCurrentPage(currentPage));
        dispatch(ToggleFetching(true));
        let data = await UsersAPI.getUsers(currentPage, pageSize);
        dispatch(ToggleFetching(false));
        dispatch(AddUsers(data.items));
    }
}

const followingThunk = async (dispatch, userId, thunk, actionCreator) => {
    dispatch(ToggleFollowing(true, userId));
    let response = await thunk(userId)
    if (response.data.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(ToggleFollowing(false, userId));
}
export const unfollow = (userId) => {
    return async (dispatch) => await followingThunk(dispatch, userId, UsersAPI.unfollowUser.bind(UsersAPI), Unfollow)
}
export const follow = (userId) => {
    return async (dispatch) => await followingThunk(dispatch, userId, UsersAPI.followUser.bind(UsersAPI), Follow)
}

