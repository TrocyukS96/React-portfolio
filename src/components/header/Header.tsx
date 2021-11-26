import React, {useState,} from 'react';
import s from './Header.module.scss';
import {Logo} from "../logo/Logo";
import {Navigation} from "../navigation/Navigation";

export const Header =(props:any) => {
    const [open, setOpen] = useState<boolean>(false)

    const onclickToggleActiveNav = () => {
        setOpen(!open)
    }
    return (
        <header className={s.header} >
                <div className={s.wrapper}>
                    <div className={s.logo}>
                        <Logo/>
                    </div>
                    <Navigation openMenu={open} setOpenMenu={setOpen}/>
                    <button  className={open ? s.burgerBtn + ' ' + s.activeBurger : s.burgerBtn} onClick={onclickToggleActiveNav}  >
                        <span></span>
                    </button>
                </div>
        </header>
    )
}