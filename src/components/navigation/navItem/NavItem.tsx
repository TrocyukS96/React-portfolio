import React from 'react';
import s from './NavItem.module.scss';

type NavItemPropsType = {
    text:string
    icon:any
}
export const NavItem = (props:NavItemPropsType) => {
    return (
        <a href="#" className={s.navLink}>
            <li className={s.navItem }>
                <img className={s.navImg} src={props.icon} alt={props.text}/>
                <span className={s.navText}>
                   {props.text}
                </span>
            </li>
        </a>
    );
}