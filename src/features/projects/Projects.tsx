import React from "react";
import s from "./Projects.module.scss";
import {Title} from "../../components/title/Title";
import newProvidenceProjImg from './../../assets/images/myProjects/newProvidenceProjImg.png';
import archMoveProjImg from './../../assets/images/myProjects/archMoveProjImg.png';
import learnCards from './../../assets/images/myProjects/learnCards.png';
import socialMedia from './../../assets/images/myProjects/socialMedia.png';
import banticom from './../../assets/images/myProjects/banticom.png';
import crmPlatfrom from './../../assets/images/myProjects/crm.png';
import uTouch from './../../../src/assets/images/myProjects/uTouch.png'
import todoList from './../../assets/images/myProjects/todolist.png';

import {PortfolioCard} from "../../components/portfolioCard/PortfolioCard";


let projectImages = [
    // {img:nedvexImg, link:'http://212.41.17.20:8080/main',phoneTitle:'Internet shop'},
    // {img: banticom, link: 'https://online.prosells.ru/personal/dashboards/main', phoneTitle: 'SMART ADMIN PANEL'},
    {
        image: todoList, title: 'Todolist app',
        text: 'Данный проект был разработан мною как учебное приложение, в котором я отработал основные подходы при создании frontend- приложений, внедрил работу стейт-менеджера redux toolkit, подключил АПИ.',
        technologies: ['React', 'Redux', 'Axios','Formik','React router'],
        flowList: ['Flux архитектура', 'регистрация и авторизация', 'аутентификация', 'uni-тесты'],
        site: 'https://trocyuks96.github.io/todoList/',
        openSource: 'https://github.com/TrocyukS96/todoList'
    },
    {
        image: uTouch, title: 'UTouch site',
        text: 'Лендинг, разработанный мною на Next JS',
        technologies: ['Next JS'],
        site: 'https://utouch.dev/',
        openSource: 'https://github.com/TrocyukS96/utouch'
    },
    // {img: crmPlatfrom, link: 'http://ortoped-crm.fastweb-tech.ru/', phoneTitle: 'CRM PLATFORM'},
    // {img: socialMedia, link: 'https://trocyuks96.github.io/socialMedia/#/profile', phoneTitle: 'SOCIAL MEDIA'},
    // {img: learnCards, link: 'https://trocyuks96.github.io/learnCards-app/#/profile', phoneTitle: 'LEARN CARDS'},
    // // {img:driveMotoProjImg, link:'https://trocyuks96.github.io/react-project/',phoneTitle: 'Drive moto learning project'},
    // {img: archMoveProjImg, link: 'https://trocyuks96.github.io/arch-project/', phoneTitle: 'ARCH MOVE'},
    // {img: newProvidenceProjImg, link: 'https://trocyuks96.github.io/NewProvidence/', phoneTitle: 'NEW PROVIDANCE'},
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
                    {projectImages.map((project, i) => {
                        return (
                            <PortfolioCard
                                key={i}
                                title={project.title}
                                text={project.text} time={'123'}
                                cardImage={project.image}
                                site={project?.site ? project.site : null}
                                source={project?.openSource ? project.openSource : null}
                                technologies={project.technologies}
                                flowList={project?.flowList}
                            />
                        )
                    })}


                </div>
            </div>
        </div>
    );
}
