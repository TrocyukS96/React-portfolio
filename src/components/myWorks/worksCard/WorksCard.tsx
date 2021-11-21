import React from "react";
import s from './WorksCard.module.scss';
import {Btn} from "../../btn/Btn";

type WorksCardPropsType = {
   title:string,
   image:any,
    text:string
}

export function WorksCard (props:WorksCardPropsType){
return(
    <div className={s.worksCard}>
        <div className={s.wrapper}>
            <h3 className={s.cardsTitle}>
                {props.title}
            </h3>

            <a className={s.cardsViewLink} href="#">
                <img className={s.cardsView} src={props.image} alt="cards-view"/>
            </a>
            <p className={s.text}>{props.text}</p>
            <Btn title={'Show more'}/>
        </div>
    </div>
)
}