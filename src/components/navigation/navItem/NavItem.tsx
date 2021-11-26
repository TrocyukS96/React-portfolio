import React from "react";
import s from './NavItem.module.scss';

type NavItemPropsType = {
    title: string
}

export function NavItem(props: NavItemPropsType) {
    return (
        <li className={s.navItem}>
            <a className="navigation__link" href="#about">{props.title}</a>
        </li>
    )
}