import s from './SkillItem.module.scss';
import 'react-circular-progressbar/dist/styles.css';
import {CircularProgressbar} from "react-circular-progressbar";
import { ProgressProvider } from './ProgressProvider';

type SkillItemPropsType = {
    title?: string
    icon?: any
    text?: string
    percentage: number

}
const bstyles = {
    backgroundColor: "#3e98c7",
    textColor: "#fff",
    pathColor: "#fff",
    trailColor: "transparent"
}

export const SkillItem = (props: SkillItemPropsType) => {

    return (
        <div className={s.skillItem}>
            <h3 className={s.title}>
                {props.title ? props.title : 'Important skill'}
            </h3>

            <div style={{width: 200, height: 200}}>
                {/*<CircularProgressbar value={props.percentage ? props.percentage : percentage} text={`${props.percentage ? props.percentage : percentage}%`} />*/}
                {/*<CircularProgressbar*/}
                {/*    value={props.percentage}*/}
                {/*    text={`${props.percentage}%`}*/}
                {/*    background*/}
                {/*    backgroundPadding={6}*/}

                {/*/>*/}

                <ProgressProvider valueStart={0} valueEnd={props.percentage}>
                    {(value:number) => <CircularProgressbar value={value}/>}
                </ProgressProvider>

            </div>
            <p className={s.text}>{props.text ? props.text : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, quod?'}</p>

        </div>
    );
}
