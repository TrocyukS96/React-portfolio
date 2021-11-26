import React from "react";
import s from './Logo.module.scss';

type LogoPropsType = {

}
export function Logo(props:LogoPropsType) {
    return (
        <>
            <a className={s.logoLink} href="#">
                <p className={s.logo}>TROCYUK <span>.</span></p>
            </a>
        </>
    )
}