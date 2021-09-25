const ADD_POST = 'ADD_POST';
const UPDATE_POST_TEXT = 'UPDATE_POST_TEXT';
const TOGGLE_FETCHING = 'TOGGLE_FETCHING';
const ADD_PROFILE = 'ADD_PROFILE';

let initialState = {
    profile: null,
    postsData: [
        {id: 1, post: 'Hi baby'},
        {id: 2, post: 'Ima right behind u'},
        {id: 3, post: 'So go fuck urself'}
    ],
    postMsg: '',
    isFetching: false
};
const ProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 4,
                post: state.postMsg
            }
            let stateCopy = {...state};
            stateCopy.postsData = [...state.postsData];
            stateCopy.postsData.push(newPost);
            stateCopy.postMsg = '';
            return stateCopy;
        }
        case UPDATE_POST_TEXT:
            return {...state, postMsg: action.message}
        case TOGGLE_FETCHING:
            return {...state, isFetching: action.isFetching}
        case ADD_PROFILE:
            return {...state, profile: action.profile}

        default:
            return state;
    }
}

export default ProfileReducer;
export const AddPost = () => ({type: ADD_POST});
export const UpdatePostMsg = (message) => ({type: UPDATE_POST_TEXT, message});
export const ToggleFetching = (isFetching) => ({type: TOGGLE_FETCHING, isFetching});
export const AddProfile = (profile) => ({type: ADD_PROFILE, profile});