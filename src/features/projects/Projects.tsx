import React from "react";
import s from "./Projects.module.scss";
import {Title} from "../../components/title/Title";
import funnyImage from '../../assets/images/temporaryImages/funnyMonkey.jpg';
import {ProjectCard} from "./projectCard/ProjectCard";


export const Projects = () => {

    return (
        <div className={s.projects}>
            <div className={s.wrapper}>
                <Title title={'My projects'} className={s.projectsTitle}/>
                <div className={s.cardsInner}>
                    <ProjectCard cardImage={funnyImage}/>
                    <ProjectCard cardImage={funnyImage}/>
                    <ProjectCard cardImage={funnyImage}/>
                    <ProjectCard cardImage={funnyImage}/>
                    <ProjectCard cardImage={funnyImage}/>
                    <ProjectCard cardImage={funnyImage}/>
                    <ProjectCard cardImage={funnyImage}/>
                    <ProjectCard cardImage={funnyImage}/>
                </div>
            </div>
        </div>
    );
}
