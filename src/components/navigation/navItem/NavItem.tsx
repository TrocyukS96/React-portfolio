import React, {FC} from 'react';
import s from './NavItem.module.scss';

type NavItemPropsType = {
    text:string
    icon:any
    navData:string
    isSvgIcon?:boolean

}
export const NavItem:FC<NavItemPropsType> = ({text, icon, navData,isSvgIcon}) => {
    return (
        <a href={'#'+navData} className={s.navLink} >
            <li className={s.navItem }>
                {isSvgIcon
                ? icon
                : <img className={s.navImg} src={icon} alt={text}/>}
                <span className={s.navText}>
                   {text}
                </span>
            </li>
        </a>
    );
}