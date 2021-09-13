import React from 'react';
import s from './posts.module.css';
import {AddPostAC, UpdatePostMsgAC} from "../../../state/profile-reducer";

const NewPost = (p) => {
    return (
        <div className={s.post}>
            <img className={s.ava} src={p.img}/>
            Post {p.id}
            <p>{p.post}</p>
        </div>
    )
}
const Posts = (p) => {
    let NewPostElement = React.createRef();
    let postsItem = p.state.postsData.map(props => <NewPost id={props.id} post={props.post} img={p.img}/>)

    const AddPost = () => {
        p.store.dispatch(AddPostAC());
    }

    const UpdatePostMsg = () => {
        let text = NewPostElement.current.value;
        let action = UpdatePostMsgAC(text);
        p.store.dispatch(action);
    }

    return (
        <div className={s.posts}>
            <div>
                <textarea placeholder="Введите текст" ref={NewPostElement} onChange={UpdatePostMsg} value={p.state.postMsg}/>
            </div>
            <div className={s.button}>
                <button onClick={AddPost}>Add</button>
            </div>
            <div>
                {postsItem}
            </div>
        </div>

    )
}

export default Posts;