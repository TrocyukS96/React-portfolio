import s from './SkillItem.module.scss';
import 'react-circular-progressbar/dist/styles.css';
import {CircularProgressbar} from "react-circular-progressbar";
import { ProgressProvider } from './ProgressProvider';
import VisibilitySensor from "react-visibility-sensor";


type SkillItemPropsType = {
    title?: string
    icon?: any
    text?: string
    percentage: number

}
const bstyles = {
    fill: "#ffb800",
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

                {/*<ProgressProvider valueStart={0} valueEnd={props.percentage}>*/}
                {/*    {(value:number) => <CircularProgressbar value={value}/>}*/}
                {/*</ProgressProvider>*/}
                <VisibilitySensor>
                    {({ isVisible }) => {
                        const percentage = isVisible ? props.percentage : 0;


                        return (
                            <CircularProgressbar
                                value={percentage}
                                text={`${percentage}%`}
                                // @ts-ignore
                                styles={{
                                    path: {
                                        // transform: "rotate(180deg)",
                                        transformOrigin: "center center",
                                        strokeLinecap: "butt",
                                        stroke: percentage >= 70 ? "#ffb800" : '#fff'
                                    },
                                    trail: {
                                        strokeWidth: 0
                                    },
                                    text: {
                                        fontSize: 22,
                                        fontWeight: 800,
                                        animation: "fadein 2s",
                                        fill: percentage >= 70 ? "rgb(255,184,0)" : '#fff'
                                    }
                                }}
                            />
                        );
                    }}
                    </VisibilitySensor>
            </div>
            <p className={s.text}>{props.text ? props.text : ''}</p>

        </div>
    );
}
