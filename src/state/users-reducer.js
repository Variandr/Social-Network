import {UsersAPI} from "../API/api";
import ChangeArrayData from "../helpers/objectHelpers";

const FOLLOW = '/users/ADD_POST';
const UNFOLLOW = '/users/UPDATE_POST_TEXT';
const ADD_USER = '/users/ADD_PEOPLE';
const SET_PAGE = '/users/SET_PAGE';
const TOGGLE_FETCHING = '/users/TOGGLE_FETCHING';
const TOGGLE_FOLLOWING = '/users/TOGGLE_FOLLOWING';
const SET_TOTAL_USERS = '/users/SET_TOTAL_USERS';

let initialState = {
    users: [],
    page: 1,
    usersOnPage: 10,
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
        case SET_PAGE:
            return {...state, page: action.page}
        case TOGGLE_FETCHING:
            return {...state, isFetching: action.isFetching}
        case TOGGLE_FOLLOWING:
            return {
                ...state,
                followingProgress: action.isFetching
                    ? [...state.followingProgress, action.userId]
                    : state.followingProgress.filter(id => id !== action.userId)
            }
        case SET_TOTAL_USERS:
            return {...state, totalUsers: action.totalUsers}
        default:
            return state;
    }
}

export default UsersReducer;
const SetTotalUsers = (totalUsers) => ({type: SET_TOTAL_USERS, totalUsers})
const Follow = (userID) => ({type: FOLLOW, userID});
const Unfollow = (userID) => ({type: UNFOLLOW, userID});
export const AddUsers = (users) => ({type: ADD_USER, users});
export const SetPage = (page) => ({type: SET_PAGE, page});
const ToggleFetching = (isFetching) => ({type: TOGGLE_FETCHING, isFetching});
const ToggleFollowing = (followingProgress, userId) => ({type: TOGGLE_FOLLOWING, followingProgress, userId});
export const getUsers = (page, pageSize) => {
    return async (dispatch) => {
        dispatch(SetPage(page));
        dispatch(ToggleFetching(true));
        let data = await UsersAPI.getUsers(page, pageSize);
        dispatch(ToggleFetching(false));
        dispatch(AddUsers(data.items));
        dispatch(SetTotalUsers(data.totalCount));
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

