import React from 'react';
import s from './Btn.module.scss';

type BtnPropsType = {
    title:string
}
export function Btn(props:BtnPropsType) {
    return (
        <button className={s.btn}>
            {props.title}
        </button>
    );
}


