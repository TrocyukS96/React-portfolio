import React, {useState} from 'react';
import s from './App.module.scss';
import {AboutMe} from "../aboutMe/AboutMe";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Navigation} from "../../components/navigation/Navigation";
import {BurgerButton} from "../../components/burgerButton/BurgerButton";
import {Skills} from "../skills/Skills";

export const App = () => {

    const [active, setActive] = useState(false)
    return (
            <div className={active ? s.app + ' ' + s.active: s.app}>
                <div className={s.wrapper}>
                    <Navigation active={active} setActive={setActive}/>
                    <BurgerButton setActive={setActive} active={active}/>
                    <AboutMe/>
                    <Skills/>
                </div>

            </div>
    );
}
