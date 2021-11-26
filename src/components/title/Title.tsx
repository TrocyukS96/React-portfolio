import React from 'react';
import s from './Title.module.scss';

type TitlePropsType = {
    title:string,

}
export function Title(props:TitlePropsType) {
    return (
        <h2 className={s.title} >
            {props.title}
        </h2>
    );
}