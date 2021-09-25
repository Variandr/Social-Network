const FOLLOW = 'ADD_POST';
const UNFOLLOW = 'UPDATE_POST_TEXT';
const ADD_USER = 'ADD_PEOPLE';
const SET_TOTAL_USERS = 'SET_TOTAL_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const TOGGLE_FETCHING = 'TOGGLE_FETCHING';

let initialState = {
    users: [],
    currentPage: 1,
    pageSize: 8,
    totalUsers: 0,
    isFetching: false
};
const UsersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(props => {
                    if (props.id === action.userID) {
                        return {...props, follow: true}
                    }
                    return props;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(props => {
                    if (props.id === action.userID) {
                        return {...props, follow: false}
                    }
                    return props;
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