import React from 'react';
import s from './Navigation.module.scss';
import {NavItem} from "./navItem/NavItem";
import homeIcon from './../../assets/images/icons/home-icon.png';
import personIcon from './../../assets/images/icons/person-icon.png';
import portfolioIcon from './../../assets/images/icons/portfolio-icon.png';
import letterIcon from './../../assets/images/icons/letter-icon.png';

type NavigationPropsType = {
    active: boolean
    setActive: (active: boolean) => void
}
export const navData = ['Home', 'Skills', 'Portfolio', 'Contacts']
export const Navigation = (props: NavigationPropsType) => {
    const onClickCancelClass = () => {
        props.setActive(false)
    }
    return (
        <nav className={props.active ? s.nav + ' ' + s.active : s.nav}>
            <ul className={s.desktopList}>
                <NavItem text={navData[0]} icon={homeIcon} navData={navData[0]}/>
                <NavItem text={navData[1]} icon={personIcon} navData={navData[1]}/>
                <NavItem text={navData[2]} icon={portfolioIcon} navData={navData[2]}/>
                <NavItem text={navData[3]} icon={letterIcon} navData={navData[3]}/>
            </ul>
            <ul className={props.active ? s.mobileList + " " + s.active : s.mobileList}>
                {navData.map((l, i) => {
                    return (
                        <a className={s.mobileLink} href={'#' + l} key={i} onClick={onClickCancelClass}>
                            <li className={s.mobileItem}>
                                <span>{l}</span>
                            </li>
                        </a>
                    )
                })}
                <div className={s.cancel} onClick={onClickCancelClass}>X</div>
            </ul>

        </nav>
    );
}
