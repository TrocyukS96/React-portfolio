import React from "react";
import s from './TextArea.module.scss';

 type TextAreaPropsType = {
    text:string
}
export function TextArea(props:TextAreaPropsType) {
    return(
        <div>
            <textarea placeholder={props.text}/>
        </div>
    )

}