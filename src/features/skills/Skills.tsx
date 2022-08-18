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

const skillsData = [
    {title:'Js',icon: javascriptIcon, percentage:70},
    {title:'Typescript',icon: reactIcon, percentage:80},
    {title:'ReactJS',icon: reactIcon, percentage:85},
    {title:'NextJS',icon: reactIcon, percentage:85},
    {title:'Redux',icon: reduxIcon, percentage:82},
    {title:'MobX',icon: reduxIcon, percentage:70},
    {title:'Docker',icon: reduxIcon, percentage:70},
    {title:'StoryBook',icon: storybookIcon, percentage:87},
    {title:'Formik',icon: formikIcon, percentage:88},
    {title:'HTML',icon: htmlIcon, percentage:75},
    {title:'GIT',icon: gitIcon, percentage:70},
    {title:'CSS',icon: cssIcon, percentage:82},
    {title:'SCSS',icon: scssIcon, percentage:85},
    {title:'SVG',icon: svgIcon, percentage:70},
    {title:'English',icon: svgIcon, percentage:75},
]
//types
type SkillDataType = {title:string, icon:any, percentage:number }

export const Skills = () => {
    return (
        <div className={s.skills} id={'Skills'}>
            <div className={s.wrapper}>
                <Title title={'My skills'} className={s.title}/>
                <div className={s.skillsBlock}>
                    {skillsData.map((s:any,index:number)=>{
                        return(
                            <SkillItem key={index} title={s.title} icon={s.icon} percentage={s.percentage}/>
                        )
                    })}
                </div>

            </div>

        </div>
    );
}
