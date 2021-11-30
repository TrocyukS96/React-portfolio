import s from './SkillItem.module.scss';

import someIcon from './../../../assets/images/icons/home-icon.png';

import 'react-circular-progressbar/dist/styles.css';
import {CircularProgressbar} from "react-circular-progressbar";

type SkillItemPropsType = {
    title?: string
    icon?: any
    text?: string
    percentage?:number

}

export const SkillItem = (props: SkillItemPropsType) => {
    const percentage = 66;

    return (
        <div className={s.skillItem}>
            <h3 className={s.title}>
                {props.title ? props.title : 'Important skill'}
            </h3>
            <img className={s.iconImg} src={props.icon ? props.icon : someIcon} alt={props.icon}/>
            {/*<CircularProgressbar percentage={percentage} text={`${percentage}%`} />;*/}
            <div style={{ width: 200, height: 200 }}>
                <CircularProgressbar value={props.percentage ? props.percentage : percentage} text={`${props.percentage ? props.percentage : percentage}%`} />
            </div>
            <p className={s.text}>{props.text ? props.text : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, quod?'}</p>

        </div>
    );
}
