import React from 'react';
import s from './Navigation.module.scss';
import {NavItem} from "./navItem/NavItem";
import homeIcon from './../../assets/images/icons/home-icon.png';
import personIcon from './../../assets/images/icons/person-icon.png';
import BagIcon from "../../assets/images/icons/BagIcon";
import LetterIcon from "../../assets/images/icons/LetterIcon";

type NavigationPropsType = {
    active: boolean
    setActive: (active: boolean) => void
}
export const navData = ['Home', 'Skills', 'Portfolio', 'Contacts']



export const Navigation = (props: NavigationPropsType) => {

    const scrollToHandler = (id: string) => {
        debugger
        const element = document.querySelector(id)
        if (element) {
            window.scrollTo({
                left: 0,
                //@ts-ignore
                top: element.offsetTop,
                behavior: 'smooth'
            })
        }
    }

    const onClickCancelClass = (path?:string) => {
        debugger
        props.setActive(false)

        if(path){
            scrollToHandler(path)
        }
    }


    return (
        <nav className={props.active ? s.nav + ' ' + s.active : s.nav}>
            <ul className={s.desktopList}>
                <NavItem text={navData[0]} icon={homeIcon} navData={navData[0]} onClick={()=>scrollToHandler('#'+navData[0])}/>
                <NavItem text={navData[1]} icon={personIcon} navData={navData[1]} onClick={()=>scrollToHandler('#'+navData[1])}/>
                <NavItem onClick={()=>scrollToHandler('#'+navData[2])}
                    isSvgIcon={true}
                    text={navData[2]}
                    icon={<BagIcon/>}
                    navData={navData[2]}
                />
                <NavItem text={navData[3]} onClick={()=>scrollToHandler('#'+navData[3])}
                         isSvgIcon={true}
                         icon={<LetterIcon className={s.letterIcon}/>} navData={navData[3]}/>
            </ul>
            <ul className={props.active ? s.mobileList + " " + s.active : s.mobileList}>
                {navData.map((l, i) => {
                    return (
                        <a className={s.mobileLink} key={i} onClick={()=>onClickCancelClass('#'+l)}>
                            <li className={s.mobileItem}>
                                <span>{l}</span>
                            </li>
                        </a>
                    )
                })}
                <div className={s.cancel} onClick={()=>onClickCancelClass()}>X</div>
            </ul>

        </nav>
    );
}
