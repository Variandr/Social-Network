// import ProfileReducer from "./profile-reducer";
// import DialogsReducer from "./dialogs-reducer";
//
// let store = {
//     _callSubscriber() {
//         console.log('state changed')
//     },
//     _state: {
//         dialogsPage: {
//             dialogsData: [
//                 {id: 1, name: "Savich"},
//                 {id: 2, name: "Palich"},
//                 {id: 3, name: "Bagatich"}],
//             messagesData: [
//                 {id: 1, message: "Privet"},
//                 {id: 2, message: "Ya"},
//                 {id: 3, message: "Ne"},
//                 {id: 4, message: "Natyral"}
//             ],
//             message: ''
//         },
//         profilePage: {
//             postsData: [
//                 {id: 1, post: 'Hi baby'},
//                 {id: 2, post: 'Ima right behind u'},
//                 {id: 3, post: 'So go fuck urself'}
//             ],
//             postMsg: ''
//         }
//     },
//     getState() {
//         return this._state;
//     },
//     subscriber(observer) {
//         store._callSubscriber = observer;
//     },
//     dispatch(action) {
//     this._state.profilePage = ProfileReducer(action, this._state.profilePage);
//     this._state.dialogsPage = DialogsReducer(action, this._state.dialogsPage);
//     this._callSubscriber(this._state);
//     }
// }
// export const AddPostAC = () => ({type: 'ADD-POST'});
// export const UpdatePostMsgAC = (message) => ({type: 'UPDATE-POST-TEXT', PostMsg: message});
// export const AddMessageAC = () => ({type: 'ADD-MESSAGE'});
// export const UpdateMessageAC = (message) => ({type: 'UPDATE-MESSAGE-TEXT', msg: message});
// export default store;