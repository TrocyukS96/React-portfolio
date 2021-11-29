import React from 'react';
import s from './AboutMe.module.scss';
import {Title} from "../../components/title/Title";
import myView from './../../assets/images/about/myview.jpg';

export const AboutMe = ()=> {
    return (
        <div className={s.aboutMe}>
            <div className={s.wrapper}>
                <div className={s.content}>
                    <Title title={'Trocyuk Stanislav'} className={s.aboutTitle}/>
                    <p className={s.text}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, laboriosam!
                    </p>
                    <a href="#" className={s.link}> Download CV</a>
                </div>
                <div className={s.view}>
                    <img src={myView} alt="person-view"/>
                </div>
            </div>

        </ div>
    );
}
