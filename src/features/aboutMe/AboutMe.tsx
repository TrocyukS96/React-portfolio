import React from 'react';
import s from './AboutMe.module.scss';
import {Title} from "../../components/title/Title";
import somePhoto from './../../assets/images/about/otherPhoto.jpg';
import herokuImg from './../../assets/images/about/heroku.png';
import codeWarsImg from './../../assets/images/about/codeWars.png';
import gitHubImg from './../../assets/images/about/gitHub.png';


export const AboutMe = () => {

    const myLinks=[
        {name:'GitHub', image:gitHubImg, link:'https://github.com/TrocyukS96'},
        {name:'Heroku', image:herokuImg, link:'https://dashboard.heroku.com/apps'},
        {name:'CodeWars', image:codeWarsImg, link:'https://www.codewars.com/users/TrocyukStas96'},
    ]
    const mappedLinks = myLinks.map((l,index)=>{
        return(
            // <li key={index}>{l.name}</li>
            <a href={l.link} className={s.aboutLink} target={'_blank'}>
                <li className={s.aboutItem}>
                    <img src={l.image} className={s.aboutLinkImg} alt=""/>
                    <span className={s.aboutLinkSpan}>{l.name}</span>
                </li>
            </a>
        )
    })
    return (
        <div className={s.aboutMe} id={'Home'}>
            <div className={s.wrapper}>
                <div className={s.content}>
                    <Title title={'Trocyuk Stanislav'} className={s.aboutTitle}/>
                    <div className={s.linksBlock}>
                        <ul className={s.linksList}>
                            {mappedLinks}
                        </ul>
                    </div>


                    <a download href="https://drive.google.com/file/d/1-8YM96g-CvKUdl2KmstQ8Z5zz25VhGH5/view?usp=sharing" className={s.link} target="_blank" > Download CV</a>
                </div>
                <div className={s.view}>
                    <img src={somePhoto} alt="person-view"/>
                </div>
            </div>

        </ div>
    );
}

