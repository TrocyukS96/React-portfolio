import React from 'react';
import {SkillsCard} from "./skills-card/SkillsCard";
import {Title} from "../title/Title";
import s from './Skills.module.scss';
import reactIcon from './../../assets/images/skills/react-icon.png';
import reduxIcon from './../../assets/images/skills/reduxIcon.webp';
import jsIcon from './../../assets/images/skills/js-icon.png';
import materialUIIcon from './../../assets/images/skills/materialUI.png';
import gitIcon from './../../assets/images/skills/git_icon.png';
import storybookIcon from './../../assets/images/skills/storyBookIcon.svg';
import htmlIcon from './../../assets/images/skills/html_icon.png';
import css from './../../assets/images/skills/css-icon.png';
import scssIcon from './../../assets/images/skills/scss-icon.png';
import svgIcon from './../../assets/images/skills/svg-icon.png';

let discr = 'This is a very important skill for my future work'

export function Skills() {
    return (
        <div className={s.skills}>
            <Title title={'My skills'} />
            <div className={s.skillsInner}>
                <SkillsCard title={'React'} description={discr} image={reactIcon}/>
                <SkillsCard title={'Redux'} description={discr} image={reduxIcon}/>
                <SkillsCard title={'JavaScript'} description={discr} image={jsIcon}/>
                <SkillsCard title={'Material UI'} description={discr} image={materialUIIcon}/>
                <SkillsCard title={'Git'} description={discr} image={gitIcon}/>
                <SkillsCard title={'StoryBook'} description={discr} image={storybookIcon}/>
                <SkillsCard title={'HTML'} description={discr} image={htmlIcon}/>
                <SkillsCard title={'CSS'} description={discr} image={css}/>
                <SkillsCard title={'SCSS'} description={discr} image={scssIcon}/>
                {/*<SkillsCard title={'SVG'} description={discr} image={svgIcon}/>*/}
            </div>
        </div>
    );
}


