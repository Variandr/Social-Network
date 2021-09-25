import React from 'react';
import s from './posts.module.css';

const NewPost = (p) => {
    return (
        <div className={s.post}>
            <img alt="ava" className={s.ava} src={p.ava}/>
            Post {p.id}
            <p>{p.post}</p>
        </div>
    )
}
const Posts = (p) => {
    let postsItem = p.postsData.map(props => <NewPost id={props.id} post={props.post} ava={p.profile.photos.small}/>)

    const AddPost = (e) => {
    p.AddPost();
    }

    const UpdatePostMsg = (e) => {
        let text = e.target.value;
        p.UpdatePostMsg(text);
    }
    return (
        <div className={s.posts}>
            <div>
                <textarea placeholder="Введите текст" onChange={UpdatePostMsg} value={p.postMsg}/>
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