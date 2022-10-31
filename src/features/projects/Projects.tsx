import React from "react";
import s from "./Projects.module.scss";
import {Title} from "../../components/title/Title";
import {ProjectCard} from "./projectCard/ProjectCard";
import newProvidenceProjImg from './../../assets/images/myProjects/newProvidenceProjImg.png';
import archMoveProjImg from './../../assets/images/myProjects/archMoveProjImg.png';
import driveMotoProjImg from './../../assets/images/myProjects/driveMotoProjImg.png';
import learnCards from './../../assets/images/myProjects/learnCards.png';
import socialMedia from './../../assets/images/myProjects/socialMedia.png';
import banticom from './../../assets/images/myProjects/banticom.png';
import crmPlatfrom from './../../assets/images/myProjects/crm.png';


let projectImages = [
        // {img:nedvexImg, link:'http://212.41.17.20:8080/main',phoneTitle:'Internet shop'},
        {img:banticom, link:'https://online.prosells.ru/personal/dashboards/main',phoneTitle:'SMART ADMIN PANEL'},
        {img:crmPlatfrom, link:'http://ortoped-crm.fastweb-tech.ru/',phoneTitle:'CRM PLATFORM'},
    {img:socialMedia, link:'https://trocyuks96.github.io/socialMedia/#/profile',phoneTitle:'SOCIAL MEDIA'},
    {img:learnCards, link:'https://trocyuks96.github.io/learnCards-app/#/profile',phoneTitle:'LEARN CARDS'},
        // {img:driveMotoProjImg, link:'https://trocyuks96.github.io/react-project/',phoneTitle: 'Drive moto learning project'},
        {img:archMoveProjImg, link:'https://trocyuks96.github.io/arch-project/',phoneTitle: 'ARCH MOVE'},
        {img:newProvidenceProjImg, link:'https://trocyuks96.github.io/NewProvidence/',phoneTitle: 'NEW PROVIDANCE'},
        // {img:thriveProjImg, link:'https://trocyuks96.github.io/ThriveTalks-project/'},
        // {img:smoothyProjImg, link:'https://trocyuks96.github.io/Smoothie-project/'},
        // {img:aeroUnionImg, link:'https://trocyuks96.github.io/aurounion-project/'},
        // {img:planYourLifeImg, link:'https://trocyuks96.github.io/plan-your-life/'},
    ]
export const Projects = () => {

    return (
        <div className={s.projects} id={'Portfolio'}>
            <div className={s.wrapper}>
                <Title title={'My projects'} className={s.projectsTitle}/>
                <div className={s.cardsInner}>
                    {projectImages.map((p, i)=>{
                        return(
                            <ProjectCard key={i} cardImage={p.img} link={p.link} phoneTitle={p.phoneTitle}/>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}
