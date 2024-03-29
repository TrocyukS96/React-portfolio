import React from "react";
import s from "./ProjectCard.module.scss";

type ProjectCardPropsType = {
    cardImage:any
    cardTitle?:string
    link:string
    phoneTitle?:string
}

export const ProjectCard = (props:ProjectCardPropsType) => {
    const {cardImage, cardTitle, link,phoneTitle}=props
    return (
        <div className={s.card}>
            <div className={s.phone}>
                <div className={s.spanWrap}>
                <span>{phoneTitle && phoneTitle}</span>
                </div>
            </div>
            <img className={s.cardImage} src={cardImage} alt={props.cardImage}/>
            {/*<SuperLink text={'visit it'} className={s.cardLink}/>*/}
            <a href={link} className={s.cardLink} target={'_blank'}> VISIT</a>
        </div>
    );
}