import React from 'react';
import s from './AboutMe.module.scss';
import {Title} from "../../components/title/Title";
import somePhoto from './../../assets/images/about/otherPhoto.jpg';

export const AboutMe = ()=> {
    return (
        <div className={s.aboutMe} id={'Home'}>
            <div className={s.wrapper}>
                <div className={s.content}>
                    <Title title={'Trocyuk Stanislav'} className={s.aboutTitle}/>
                    <p className={s.text}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, laboriosam!
                    </p>

                    <a href="./../../assets/download/Stanislav_Trocyuk_-_Front-end_developer.pdf" download className={s.link}> Download CV</a>
                    {/*<SuperLink text={'Download CVfff'} />*/}
                </div>
                <div className={s.view}>
                    <img src={somePhoto} alt="person-view"/>
                </div>
            </div>

        </ div>
    );
}
