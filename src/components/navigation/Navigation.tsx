import React from "react";
import s from './Navigation.module.scss';
import {NavItem} from "./navItem/NavItem";

type NavigationPropsType = {
    openMenu:boolean
    setOpenMenu:()=>void
}
export function Navigation (props:any)  {
    const onClicktogleClass = ()=>{
       props.setOpenMenu(!props.openMenu)
    }
    const onBlurHideNav = () =>{
        props.setOpenMenu(false)
    }
    return (
                <nav className={props.openMenu ? s.navigation + ' ' + s.activeNav:  s.navigation } onBlur={()=>props.setOpenMenu(false)} >
                    <button className={props.openMenu ? s.cancelBtn + ' ' + s.activeBtn: s.cancelBtn } onClick={onClicktogleClass}>X</button>
                    <ul className={s.navigationList}>
                        <NavItem title={'About me'}/>
                        <NavItem title={'Skills'}/>
                        <NavItem title={'My works'}/>
                        <NavItem title={'Contacts'}/>
                    </ul>
                </nav>
    )
}