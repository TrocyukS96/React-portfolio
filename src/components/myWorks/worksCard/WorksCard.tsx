import React from "react";
import s from './WorksCard.module.scss';
import {SuperButton}from "../../superButton/SuperButton";

type WorksCardPropsType = {
    title: string,
    image: any,
}

export function WorksCard(props: WorksCardPropsType) {
    return (
        <div className={s.worksCard}>
            <div className={s.wrapper}>
                <h3 className={s.cardsTitle}>
                    {props.title}
                </h3>
                <div className={s.cardViewInner}>
                    <a className={s.cardsViewLink} href="#">
                        <img className={s.cardsViewImg} src={props.image} alt="cards-view"/>
                    </a>
                    <div className={s.btnBox}>
                        <SuperButton title={'Show more'} />
                    </div>
                </div>

            </div>
        </div>
    )
}