import React from "react";
import s from "./ProjectCard.module.scss";
import {SuperLink} from "../../../components/superLink/SuperLink";
import {Title} from "../../../components/title/Title";

type ProjectCardPropsType = {
    cardImage:any
    cardTitle?:string
    link:string
}

export const ProjectCard = (props:ProjectCardPropsType) => {
    const {cardImage, cardTitle, link}=props
    return (
        <div className={s.card}>
            <Title title={cardTitle? cardTitle: 'Description'} className={s.projectCardTitle}/>
            <img className={s.cardImage} src={cardImage} alt={props.cardImage}/>
            {/*<SuperLink text={'visit it'} className={s.cardLink}/>*/}
            <a href={link} className={s.cardLink} target={'_blank'}> visit it</a>
        </div>
    );
}