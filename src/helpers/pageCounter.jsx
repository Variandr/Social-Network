import s from "../Content/Users/users.module.css";
import React from "react";

const PageCounter = ({page, onPageChanged}) => {
    let pagesCount = 10
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return <div className={s.counter}>
        {pages.map(p => {
            return <span className={p === page ? s.selected : ''}
                         onClick={() => {
                             onPageChanged(p)
                         }}>{p}</span>
        })}
    </div>
}
export default PageCounter;