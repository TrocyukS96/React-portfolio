import React from "react";
import s from "./Projects.module.scss";
import {Title} from "../../components/title/Title";
import funnyImage from '../../assets/images/temporaryImages/funnyMonkey.jpg';
import {ProjectCard} from "./projectCard/ProjectCard";

let projectImages =
    [funnyImage, funnyImage,funnyImage, funnyImage, funnyImage, funnyImage, funnyImage]

export const Projects = () => {

    return (
        <div className={s.projects} id={'Portfolio'}>
            <div className={s.wrapper}>
                <Title title={'My projects'} className={s.projectsTitle}/>
                <div className={s.cardsInner}>
                    {projectImages.map((p, i)=>{
                        return(
                            <ProjectCard cardImage={p}/>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}
