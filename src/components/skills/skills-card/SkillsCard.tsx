import React from 'react';
import s from './SkillsCard.module.scss';
type SkillsCardPropsType = {
    title:string
    description:string
    image?:any
}
export function SkillsCard(props:SkillsCardPropsType) {
    return (
        <div className={s.card}>
            <div className={s.cardInner}>
                <div className={s.CardLogo}>
                    <img className={s.cardImg} src={props.image} alt={props.title}/>
                </div>
                <h3 className={s.cardTitle}>
                    {props.title}
                </h3>
                <p className={s.cardDiscr}>
                    {props.description}
                </p>
            </div>
        </div>
    );
}