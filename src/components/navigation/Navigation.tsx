import React from 'react';
import s from './Navigation.module.scss';
import {NavItem} from "./navItem/NavItem";
import homeIcon from './../../assets/images/icons/home-icon.png';
import personIcon from './../../assets/images/icons/person-icon.png';
import portfolioIcon from './../../assets/images/icons/portfolio-icon.png';
import letterIcon from './../../assets/images/icons/portfolio-icon.png';

type NavigationPropsType = {
    active:boolean
    setActive:(active:boolean)=>void
}
export const Navigation = (props:NavigationPropsType)=> {
    const onClickCancelClass = () => {
        props.setActive(false)
    }
    return (
        <nav className={props.active ? s.nav+ ' ' + s.active : s.nav}>
        {/*<nav className={s.nav+ ' ' + s.active}>*/}
            <ul className={s.desktopList}>
                <NavItem text={'Home'} icon={homeIcon}/>
                <NavItem text={'About'} icon={personIcon}/>
                <NavItem text={'Portfolio'} icon={portfolioIcon}/>
                <NavItem text={'Contact'} icon={letterIcon}/>
            </ul>
            <ul className={props.active ? s.mobileList + " " + s.active : s.mobileList}>
                {/*<NavItem text={'Home'} icon={homeIcon}/>*/}
                {/*<NavItem text={'About'} icon={personIcon}/>*/}
                {/*<NavItem text={'Portfolio'} icon={portfolioIcon}/>*/}
                {/*<NavItem text={'Contact'} icon={letterIcon}/>*/}
                <a className={s.mobileLink} href="#">
                    <li className={s.mobileItem}>
                        {/*<img src={homeIcon}className={s.mobileImage}  alt="Home-icon"/>*/}
                        <span>Home</span>
                    </li>
                </a>
                <a className={s.mobileLink} href="#">
                    <li className={s.mobileItem}>
                        {/*<img src={personIcon} className={s.mobileImage} alt="person-icon"/>*/}
                        <span>About</span>
                    </li>
                </a>
                <a className={s.mobileLink} href="#">
                    <li className={s.mobileItem}>
                        {/*<img  src={portfolioIcon} className={s.mobileImage} alt="portfolio-icon"/>*/}
                        <span>Portfolio</span>
                    </li>
                </a>
                <a className={s.mobileLink} href="#">
                    <li className={s.mobileItem}>
                        {/*<img className={s.mobileImage} src={letterIcon} alt="letter-icon"/>*/}
                        <span>Contact</span>
                    </li>
                </a>

                <div className={s.cancel} onClick={onClickCancelClass}>X</div>
            </ul>

        </nav>
    );
}
