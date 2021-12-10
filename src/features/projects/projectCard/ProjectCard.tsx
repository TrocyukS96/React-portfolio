import React from "react";
import s from "./ProjectCard.module.scss";
import {SuperLink} from "../../../components/superLink/SuperLink";
import {Title} from "../../../components/title/Title";

type ProjectCardPropsType = {
    cardImage:any
    cardTitle?:string
}

export const ProjectCard = (props:ProjectCardPropsType) => {

    return (
        <div className={s.card}>
            <Title title={props.cardTitle? props.cardTitle: 'Description'} className={s.projectCardTitle}/>
            <img className={s.cardImage} src={props.cardImage} alt={props.cardImage}/>
            {/*<SuperLink text={'visit it'} className={s.cardLink}/>*/}
            <a href="#" className={s.cardLink}> visit it</a>
        </div>
    );
}