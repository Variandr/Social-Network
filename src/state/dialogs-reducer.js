let ADD_MESSAGE = 'ADD-MESSAGE';
let UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';

let initialState = {
    dialogsData: [
        {id: 1, name: "Savich"},
        {id: 2, name: "Palich"},
        {id: 3, name: "Bagatich"}],
    messagesData: [
        {id: 1, message: "Privet"},
        {id: 2, message: "Ya"},
        {id: 3, message: "Ne"},
        {id: 4, message: "Natyral"}
    ],
    message: ''
}
const DialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            let newMessage = {
                id: 5,
                message: state.message
            }
            let stateCopy = {...state};
            stateCopy.messagesData = [...state.messagesData];
            stateCopy.messagesData.push(newMessage);
            stateCopy.message = '';
            return stateCopy;
        }

        case UPDATE_MESSAGE_TEXT: {
            let stateCopy = {...state};
            stateCopy.message = [...state.message];
            stateCopy.message = action.msg;
            return stateCopy;
        }
        default:
            return state;
    }
}

export default DialogsReducer;
export const AddMessageAC = () => ({type: 'ADD-MESSAGE'});
export const UpdateMessageAC = (message) => ({type: 'UPDATE-MESSAGE-TEXT', msg: message});