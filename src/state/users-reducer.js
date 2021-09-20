let FOLLOW = 'ADD-POST';
let UNFOLLOW = 'UPDATE-POST-TEXT';
let ADD_USER = 'ADD-PEOPLE'

let initialState = {
    users: []
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
            return {...state, users: [...state.users, ...action.users]}

        default:
            return state;
    }
}

export default UsersReducer;
export const FollowAC = (userID) => ({type: FOLLOW, userID});
export const UnfollowAC = (userID) => ({type: UNFOLLOW, userID});
export const AddUsersAC = (users) => ({type: ADD_USER, users});