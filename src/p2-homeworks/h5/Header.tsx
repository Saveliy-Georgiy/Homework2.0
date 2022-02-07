import React from 'react'
import {NavLink} from "react-router-dom";
import s from './Header.module.css'

function Header() {

    return (
        <div className={s.dropdown}>
            <button className={s.dropbtn}>samurai levels</button>
            <div className={s.dropdownContent}>
            <NavLink
                to="/pre-junior"
                className={navData => navData.isActive ?s.active: s.link}>
                pre-junior</NavLink>
            <NavLink
                to="/junior"
                className={navData => navData.isActive ? s.active: s.link}>
                junior</NavLink>
            <NavLink
                to="/junior+"
                className={navData => navData.isActive ? s.active: s.link}>
                junior+</NavLink>
            </div>
        </div>
    )
}

export default Header
