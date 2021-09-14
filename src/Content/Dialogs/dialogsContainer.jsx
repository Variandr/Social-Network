import React from 'react';
import {AddMessageAC, UpdateMessageAC} from "../../state/dialogs-reducer";
import Dialogs from "./dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        dialogsData: state.dialogsPage.dialogsData,
        messagesData: state.dialogsPage.messagesData,
        message: state.dialogsPage.message
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        pushMessage: () => {
            dispatch(AddMessageAC());
        },
        onUpdateMessage: (action) => {
            dispatch(UpdateMessageAC(action));
        }
    }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
export default DialogsContainer;