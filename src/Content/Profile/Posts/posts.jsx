import React from 'react';
import s from './posts.module.css';

let ava = 'https://images.unsplash.com/photo-1555445091-5a8b655e8a4a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80';
const NewPost = (p) => {
    return (
        <div className={s.post}>
            <img alt="ava" className={s.ava} src={ava}/>
            Post {p.id}
            <p>{p.post}</p>
        </div>
    )
}
const Posts = (p) => {
    let postsItem = p.postsData.map(props => <NewPost id={props.id} post={props.post} img={ava}/>)

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