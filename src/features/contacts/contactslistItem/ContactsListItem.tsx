import React, {FC} from 'react';
import s from './ContactsListItem.module.scss';

type Iprops = {
    subTitle: string,
    text: string,
    image: any
    isSvgIcon?: boolean
}
export const ContactsListItem: FC<Iprops> = ({isSvgIcon=true, image, text, subTitle}) => {
    return (
        <li className={s.item}>
            {isSvgIcon ?
                image :
                <img src={image} alt="point-icon"/>
            }
            <div className={s.itemContent}>
                <h4 className={s.subTitle}>{subTitle}</h4>
                <p className={s.itemText}>{text}</p>
            </div>
        </li>
    );
}