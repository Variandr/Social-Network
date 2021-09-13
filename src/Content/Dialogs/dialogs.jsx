import React from 'react';
import {NavLink} from "react-router-dom";
import s from './dialogs.module.css';
import {AddMessageAC, UpdateMessageAC} from "../../state/dialogs-reducer";

const DialogItem = (p) => {
    return <div><NavLink to={'/messages/' + p.id} className={s.dialogItem}
                         activeClassName={s.dialogItemActive}>{p.name}</NavLink></div>
}
const NewMessage = (p) => {
    return <div><p>{p.Message}</p></div>
}

const Dialogs = (p) => {

    let dialogElements = p.state.dialogsData.map(props => <DialogItem id={props.id} name={props.name}/>)

    let NewMessageElement = React.createRef();
    let messageItem = p.state.messagesData.map(props => <NewMessage id={props.id} Message={props.message}/>)

    const AddMessage = () => {
        p.store.dispatch(AddMessageAC());
    }

    const UpdateMessage = () => {
        let text = NewMessageElement.current.value;
        let action = UpdateMessageAC(text);
        p.store.dispatch(action);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialog}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messageItem}
                <textarea placeholder={"Введите сообщение"} ref={NewMessageElement} onChange={UpdateMessage} value={p.state.message}/>
                <button onClick={AddMessage}>Add</button>
            </div>
        </div>
    )
}
export default Dialogs;