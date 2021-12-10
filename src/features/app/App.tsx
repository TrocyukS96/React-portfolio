import React, {useState} from 'react';
import s from './App.module.scss';
import {AboutMe} from "../aboutMe/AboutMe";
import {Navigation} from "../../components/navigation/Navigation";
import {BurgerButton} from "../../components/burgerButton/BurgerButton";
import {Skills} from "../skills/Skills";
import {Projects} from "../projects/Projects";
import {Contacts} from "../contacts/Contacts";

export const App = () => {

    const [active, setActive] = useState(false)
    return (
            <div className={active ? s.app + ' ' + s.active: s.app}>
                <div className={s.wrapper}>
                    <Navigation active={active} setActive={setActive}/>
                    <BurgerButton setActive={setActive} active={active}/>
                    <AboutMe/>
                    <div className={s.container}>
                        <Skills/>
                        <Projects/>
                        <Contacts/>
                    </div>


                </div>

            </div>
    );
}
