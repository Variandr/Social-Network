import React from 'react';
import s from './posts.module.css';

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
    let postsItem = p.profilePage.postsData.map(props => <NewPost id={props.id} post={props.post} img={p.img}/>)

    const AddPost = (e) => {
    p.pushPost();
    }

    const UpdatePostMsg = (e) => {
        let text = e.target.value;
        p.onPostUpdate(text);
    }
    return (
        <div className={s.posts}>
            <div>
                <textarea placeholder="Введите текст" onChange={UpdatePostMsg} value={p.profilePage.postMsg}/>
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