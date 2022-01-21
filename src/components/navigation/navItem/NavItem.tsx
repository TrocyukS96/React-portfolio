import React from 'react';
import s from './NavItem.module.scss';

type NavItemPropsType = {
    text:string
    icon:any
    navData:string

}
export const NavItem = (props:NavItemPropsType) => {
    const {text, icon, navData}= props
    return (
        <a href={'#'+navData} className={s.navLink} >
            <li className={s.navItem }>
                <img className={s.navImg} src={icon} alt={text}/>
                <span className={s.navText}>
                   {text}
                </span>
            </li>
        </a>
    );
}