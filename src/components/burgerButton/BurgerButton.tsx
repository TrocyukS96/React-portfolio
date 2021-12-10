import React from 'react';
import s from './BurgerButton.module.scss';

type BurgerButtonPropsType = {
    setActive:(active:boolean)=>void
    active:boolean
}
export const BurgerButton = (props:BurgerButtonPropsType)=> {
    const onClickToggleClass = () => {
        props.setActive(!props.active)
    }
    return (
        <div className={props.active ? s.burger + ' ' + s.active: s.burger}  onClick={onClickToggleClass}>
            <span></span>
        </div>
    );
}