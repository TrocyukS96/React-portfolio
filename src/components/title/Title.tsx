import React from 'react';
import s from './Title.module.scss';

type TitlePropsType = {
    title:string,
    className?:any

}
export function Title(props:TitlePropsType) {
    const finalClassName = `${s.title} ${props.className}`;
    return (
        <h2 className={finalClassName} >
            {props.title}
        </h2>
    );
}