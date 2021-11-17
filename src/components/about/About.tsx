import React from 'react';
import s from './About.module.scss';
import coolView from './../../assets/images/about/strange guy on the background.jpeg';

export function About() {
    return (
        <div className={s.about}>
            <div className={s.aboutBlocks}>
                <div className={s.aboutText}>
                    <h2 className={s.aboutTitle}>Hello!</h2>
                    <p className={s.aboutDiscr}>My name is Stanislav</p>
                    <p className={s.aboutDiscr}>I'm a front-end developer</p>
                </div>
                <div className={s.aboutImage}>
                    <img src={coolView} alt="cool-view"/>
                </div>
            </div>
        </div>
    );
}


