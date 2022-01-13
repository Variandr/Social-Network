import s from "../Content/Users/users.module.css";
import React, {useState} from "react";
import {AiFillLeftCircle, AiFillRightCircle} from "react-icons/all";

const PageCounter = ({page, onPageChanged, totalUsers, usersOnPage, portionSize = 10}) => {
    let pagesCount = Math.ceil(totalUsers / usersOnPage);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    let portions = Math.ceil(pagesCount / portionSize);
    let [portion, setPortion] = useState(1);
    let leftPortionNum = (portion - 1) * portionSize + 1;
    let rightPortionNum = portion * portionSize;

    return <div className={s.counter}>
        {portion > 1 ? <AiFillLeftCircle onClick={() => setPortion(portion - 1)}/> : ""}
        {pages.filter(p => p >= leftPortionNum && p <= rightPortionNum)
            .map(p => {
                return <span className={p === page ? s.selected : ''}
                             onClick={() => {
                                 onPageChanged(p)
                             }} key={p}>{p}</span>
            })}
        {portion < portions ? <AiFillRightCircle onClick={() => setPortion(portion + 1)}/> : ""}
    </div>
}
export default PageCounter;