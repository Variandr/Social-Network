import React from 'react';
import s from './home.module.css';

const Home = () => {
    return (
        <div className={s.main}>
            <div className={s.column}>
                <img alt='check'
                    src='https://www.slidescarnival.com/wp-content/uploads/2019/09/slidescarnival-background-image.png'/>
                <img alt='check'
                    src='https://static.vecteezy.com/system/resources/previews/001/849/553/original/modern-gold-background-free-vector.jpg'/>
                <img alt='check'
                    src='https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'/>
            </div>
            <div className={s.column}>
                <img alt='check'
                    src='https://img.freepik.com/free-photo/abstract-grunge-decorative-relief-navy-blue-stucco-wall-texture-wide-angle-rough-colored-background_1258-28311.jpg?size=626&ext=jpg'/>
                <img alt='check'
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToS8z_eByij9kJng37aITUwHt8gQg3OYVzZg&usqp=CAU'/>

            </div>
            <div className={s.column}>
                <img alt='check'
                    src='https://images.pexels.com/photos/586744/pexels-photo-586744.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'/>
                <img alt='check'
                    src='https://lumiere-a.akamaihd.net/v1/images/sa_pixar_virtualbg_coco_16x9_9ccd7110.jpeg'/>
            </div>


        </div>
    )
}

export default Home;