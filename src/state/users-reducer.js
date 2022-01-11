import {UsersAPI} from "../API/api";

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
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userID) {
                        return {...user, followed: true}
                    }
                    return user;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userID) {
                        return {...user, followed: false}
                    }
                    return user;
                })
            }

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
export const Follow = (userID) => ({type: FOLLOW, userID});
export const Unfollow = (userID) => ({type: UNFOLLOW, userID});
export const AddUsers = (users) => ({type: ADD_USER, users});
export const SetTotalUsers = (usersCount) => ({type: SET_TOTAL_USERS, usersCount});
export const SetCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const ToggleFetching = (isFetching) => ({type: TOGGLE_FETCHING, isFetching});
export const ToggleFollowing = (followingProgress, userId) => ({type: TOGGLE_FOLLOWING, followingProgress, userId});

export const getUsers = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(SetCurrentPage(currentPage));
        dispatch(ToggleFetching(true));
        UsersAPI.getUsers(currentPage, pageSize).then(data => {
                dispatch(ToggleFetching(false));
                dispatch(AddUsers(data.items));
            }
        )
    }
}

export const unfollowThunk = (userId) => {
    return (dispatch) => {
        dispatch(ToggleFollowing(true, userId));
        UsersAPI.unfollowUser(userId).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(Unfollow(userId))
            }
            dispatch(ToggleFollowing(false, userId));
        })
    }
}
export const followThunk = (userId) => {
    return (dispatch) => {
        dispatch(ToggleFollowing(true, userId));
        UsersAPI.followUser(userId).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(Follow(userId))
            }
            dispatch(ToggleFollowing(false, userId));
        })
    }
}

