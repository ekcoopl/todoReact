import React from 'react';
import style from "./Header.module.css"

const Header = () => {
    return (
        <div className={style.header}>
            <input className={style.inputTask} type="text" placeholder='Введите свою задачу'/>
            <button className={style.btn}>Add</button>
        </div>
    );
}

export default Header;
