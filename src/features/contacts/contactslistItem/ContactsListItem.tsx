import React from 'react';
import s from './ContactsListItem.module.scss';

type ContactsListItemPropsType = {
    subTitle:string,
    text:string,
    image:any
}
export const ContactsListItem = (props:ContactsListItemPropsType) => {
    return (
        <li className={s.item}>
            <img src={props.image} alt="point-icon"/>
            <div className={s.itemContent}>
                <h4 className={s.subTitle}>{props.subTitle}</h4>
                <p className={s.itemText}>{props.text}</p>
            </div>
        </li>
    );
}