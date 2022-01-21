import React from "react";
import s from './Skills.module.scss';
import {Title} from "../../components/title/Title";
import {SkillItem} from "./skillItem/SkillItem";
import reactIcon from './../../assets/images/skills/react-icon.png';
import reduxIcon from './../../assets/images/skills/reduxIcon.webp';
import javascriptIcon from './../../assets/images/skills/js-icon.png';
import storybookIcon from './../../assets/images/skills/storyBookIcon.svg';
import formikIcon from './../../assets/images/skills/formik-icon.jpg';
import htmlIcon from './../../assets/images/skills/html_icon.png';
import cssIcon from './../../assets/images/skills/css-icon.png';
import scssIcon from './../../assets/images/skills/scss-icon.png';
import svgIcon from '../../assets/images/skills/svg-icon.png';
import gitIcon from '../../assets/images/skills/git_icon.png';


export const Skills = () => {


    return (
        <div className={s.skills} id={'Skills'}>
            <div className={s.wrapper}>
                <Title title={'My skills'} className={s.title}/>
                <div className={s.skillsBlock}>
                    <SkillItem title={'React'} icon={reactIcon} percentage={85}/>
                    <SkillItem title={'Redux'} icon={reduxIcon} percentage={82}/>
                    <SkillItem title={'Js'} icon={javascriptIcon} percentage={70}/>
                    <SkillItem title={'StoryBook'} icon={storybookIcon} percentage={87}/>
                    <SkillItem title={'Formik'} icon={formikIcon} percentage={88}/>
                    <SkillItem title={'HTML'} icon={htmlIcon} percentage={75}/>
                    <SkillItem title={'CSS'} icon={cssIcon} percentage={82}/>
                    <SkillItem title={'SCSS'} icon={scssIcon} percentage={85}/>
                    <SkillItem title={'SVG'} icon={svgIcon} percentage={70}/>
                    <SkillItem title={'GIT'} icon={gitIcon} percentage={70}/>

                </div>

            </div>

        </div>
    );
}
