import React from 'react';
import s from './SuperLink.module.scss';

type SuperLinkPropsType = {
    text:string
    className?:any
}
export const SuperLink = (props:SuperLinkPropsType) => {
    const finalClassName = `${s.superLink} ${props.className}`;
    return (
        <a href="#" className={s.finalClassName}>{props.text}</a>)
}