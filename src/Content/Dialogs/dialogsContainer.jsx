import React from 'react';
import {AddMessageAC, UpdateMessageAC} from "../../state/dialogs-reducer";
import Dialogs from "./dialogs";

const DialogsContainer = (props) => {

    let state = props.store.getState().dialogsPage;

    let AddMessage = () => {
        props.store.dispatch(AddMessageAC());
    }

    let UpdateMessage = (action) => {
        props.store.dispatch(UpdateMessageAC(action));
    }
    return <Dialogs pushMessage={AddMessage} onUpdateMessage={UpdateMessage} dialogsPage={state}/>
}
export default DialogsContainer;