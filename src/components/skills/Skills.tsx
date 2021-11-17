import React from 'react';
import s from './Skills.module.scss';
import {SkillsCard} from "./skills-card/SkillsCard";
let discr = 'This is a very important skill for my future work'

export function Skills() {
    return (
        <div className={s.skills}>
            <h1 className={s.skillsTitle}>My skills</h1>
            <div className={s.skillsInner}>
                <SkillsCard title={'React'} description={discr}/>
                <SkillsCard title={'Redux'} description={discr}/>
                <SkillsCard title={'JavaScript'} description={discr}/>
                <SkillsCard title={'Flux-cycle'} description={discr}/>
                <SkillsCard title={'Material UI'} description={discr}/>
                <SkillsCard title={'Git'} description={discr}/>
                <SkillsCard title={'StoryBook'} description={discr}/>
                <SkillsCard title={'HTML'} description={discr}/>
                <SkillsCard title={'CSS'} description={discr}/>
                <SkillsCard title={'SASS'} description={discr}/>
            </div>
        </div>
    );
}


