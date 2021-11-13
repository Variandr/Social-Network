import React from 'react';
import s from './home.module.css';

const Home = () => {
    return <div className={s.wrapper}>
        <div className={s.box1}>
            <img src='https://miro.medium.com/max/850/0*7ipMq8VAuzJLSZeV.jpg'/>
        </div>
        <div className={s.box2}>
            <img src='https://networks.imdea.org/wp-content/uploads/2021/09/media-file-code-900x500.png'/>
        </div>
        <div className={s.box3}>
            <h2>Team</h2>
        </div>
        <div className={s.box4}>
            <h2>Portfolio</h2>
        </div>
        <div className={s.box5}>
            <h3>"I'm not even trying to make nice website."
            -Random Guy</h3>
        </div>
        <div className={s.box6}>
            <h2>About</h2>
        </div>
        <div className={s.box7}>
            <h2>Services</h2>
        </div>
        <div className={s.box8}>
            <h2>About</h2>
        </div>
        <div className={s.box9}>
            <h2>Services</h2>
        </div>
        <div className={s.box10}>
            <h2>Services</h2>
        </div>
        <div className={s.box11}>
            <h2>Services</h2>
        </div>
        <div className={s.box12}>
            <h2>Latest Tweets</h2>
        </div>
        <nav className={s.footer}>
<h1>This footer is weird... You know...</h1>
        </nav>
    </div>
}

export default Home;