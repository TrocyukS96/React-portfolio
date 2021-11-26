import React from "react";
import s from './Input.module.scss';

type InputProsType = {
    text:string,
    type?:any
}
export function Input(props:InputProsType) {
    return (
        <div className={s.inner}>
            <input placeholder={props.text} type={props.type}/>
        </div>

        )



}