let ADD_POST = 'ADD-POST';
let UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';

let initialState = {
        postsData: [
            {id: 1, post: 'Hi baby'},
            {id: 2, post: 'Ima right behind u'},
            {id: 3, post: 'So go fuck urself'}
        ],
        postMsg: ''
};
const ProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 4,
                post: state.postMsg
            }
            state.postsData.push(newPost);
            state.postMsg = '';
            return state;
        }
        case UPDATE_POST_TEXT: {
            state.postMsg = action.PostMsg;
            return state;
        }
        default:
            return state;
    }
}

export default ProfileReducer;
export const AddPostAC = () => ({type: 'ADD-POST'});
export const UpdatePostMsgAC = (message) => ({type: 'UPDATE-POST-TEXT', PostMsg: message});