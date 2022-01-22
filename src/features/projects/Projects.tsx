import React from "react";
import s from "./Projects.module.scss";
import {Title} from "../../components/title/Title";
import funnyImage from '../../assets/images/temporaryImages/funnyMonkey.jpg';
import {ProjectCard} from "./projectCard/ProjectCard";
import aeroUnionImg from './../../assets/images/myProjects/auroUnionProj.png';
import planYourLifeImg from './../../assets/images/myProjects/planYourLifeProj.png';
import smoothyProjImg from './../../assets/images/myProjects/organicFoodsImg.png';
import thriveProjImg from './../../assets/images/myProjects/thriveProgImg.png';
import newProvidenceProjImg from './../../assets/images/myProjects/newProvidenceProjImg.png';
import archMoveProjImg from './../../assets/images/myProjects/archMoveProjImg.png';
import driveMotoProjImg from './../../assets/images/myProjects/driveMotoProjImg.png';


// let projectImages =
    // [funnyImage, funnyImage,funnyImage, funnyImage, funnyImage, funnyImage, funnyImage]
    let projectImages = [
        {img:driveMotoProjImg, link:'https://trocyuks96.github.io/react-project/'},
        {img:archMoveProjImg, link:'https://trocyuks96.github.io/arch-project/'},
        {img:newProvidenceProjImg, link:'https://trocyuks96.github.io/NewProvidence/'},
        {img:thriveProjImg, link:'https://trocyuks96.github.io/ThriveTalks-project/'},
        {img:smoothyProjImg, link:'https://trocyuks96.github.io/Smoothie-project/'},
        {img:aeroUnionImg, link:'https://trocyuks96.github.io/aurounion-project/'},
        {img:planYourLifeImg, link:'https://trocyuks96.github.io/plan-your-life/'},
    ]
export const Projects = () => {

    return (
        <div className={s.projects} id={'Portfolio'}>
            <div className={s.wrapper}>
                <Title title={'My projects'} className={s.projectsTitle}/>
                <div className={s.cardsInner}>
                    {projectImages.map((p, i)=>{
                        return(
                            <ProjectCard key={i} cardImage={p.img} link={p.link}/>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}
