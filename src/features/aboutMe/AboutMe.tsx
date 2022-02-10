import React from 'react';
import s from './AboutMe.module.scss';
import {Title} from "../../components/title/Title";
import somePhoto from './../../assets/images/about/otherPhoto.jpg';
import FileSaver from "file-saver";


const saveFile = () => {
    FileSaver.saveAs(
        process.env.REACT_APP_CLIENT_URL + "cv.pdf",
        "MyCV.pdf"
    );
}
export const AboutMe = () => {
    const saveCV =()=>{
        FileSaver.saveAs('CV', 'cv.pdx')
    }
    return (
        <div className={s.aboutMe} id={'Home'}>
            <div className={s.wrapper}>
                <div className={s.content}>
                    <Title title={'Trocyuk Stanislav'} className={s.aboutTitle}/>
                    <p className={s.text}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea, laboriosam!
                    </p>

                    <a download href="https://drive.google.com/file/d/1-8YM96g-CvKUdl2KmstQ8Z5zz25VhGH5/view?usp=sharing" className={s.link} target="_blank" > Download CV</a>
                </div>
                <div className={s.view}>
                    <img src={somePhoto} alt="person-view"/>
                </div>
            </div>

        </ div>
    );
}

