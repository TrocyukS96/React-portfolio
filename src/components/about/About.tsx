import React from 'react';
import s from './About.module.scss';
import coolView from './../../assets/images/about/strange guy on the background.jpeg';
import {Title} from "../title/Title";
import {SuperButton}from "../superButton/SuperButton";

export function About() {
    return (
        <div className={s.about}>
            <div className={s.aboutBlocks}>
                <div className={s.aboutText}>
                    <Title title={'Hello!'}/>
                    <p className={s.aboutDiscr}>My name is Stanislav <br/> I'm a front-end developer</p>
                    {/*<SuperButton title={'Download CV'}  className={s.changeBackground}/>*/}
                    <a href="#" className={s.bot5}>Download</a>
                </div>
                <div className={s.aboutImage}>
                    <img src={coolView} alt="cool-view"/>
                </div>
            </div>
        </div>
    );
}


