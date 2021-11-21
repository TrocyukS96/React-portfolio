import React from "react";

type InputProsType = {
    text:string
}
export function Input(props:InputProsType) {
    return (
        <div>
            <input placeholder={props.text}/>
        </div>

        )



}