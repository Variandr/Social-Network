import React from 'react';
import {NavLink} from "react-router-dom";
import s from './dialogs.module.css';

const DialogItem = (p) => {
    return <div><NavLink to={'/messages/' + p.id} className={s.dialogItem}
                         activeClassName={s.dialogItemActive}>{p.name}</NavLink></div>
}
const NewMessage = (p) => {
    return <div><p>{p.Message}</p></div>
}

const Dialogs = (p) => {

    let dialogElements = p.dialogsData.map(props => <DialogItem id={props.id} name={props.name}/>)
    let messageItem = p.messagesData.map(props => <NewMessage id={props.id} Message={props.message}/>)

    const AddMessage = () => {
        p.pushMessage();
    }

    const UpdateMessage = (e) => {
        let text = e.target.value;
        p.onUpdateMessage(text);
    }

    return (
        <div className={s.dialogs}>
            <div>
                {dialogElements}
            </div>
            <div>
                {messageItem}
                <textarea placeholder={"Введите сообщение"} onChange={UpdateMessage} value={p.message}/>
                <button onClick={AddMessage}>Add</button>
            </div>
        </div>
    )
}
export default Dialogs;