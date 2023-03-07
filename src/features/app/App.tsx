import React, {useState} from 'react';
import s from './App.module.scss';
import {AboutMe} from "../aboutMe/AboutMe";
import {Navigation} from "../../components/navigation/Navigation";
import {BurgerButton} from "../../components/burgerButton/BurgerButton";
import {Skills} from "../skills/Skills";
import {Projects} from "../projects/Projects";
import {Contacts} from "../contacts/Contacts";
import {Footer} from "../footer/Footer";

import Particles from "react-tsparticles";

export const App = () => {

    //@ts-ignore
    const particlesInit = (main) => {
        console.log(main);
        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    };
    //@ts-ignore
    const particlesLoaded = (container) => {console.log(container);};


    const [active, setActive] = useState(false)
    return (
            <div className={active ? s.app + ' ' + s.active: s.app}>
                <Particles
                    id="tsparticles"
                    //@ts-ignore
                    init={particlesInit}
                    //@ts-ignore
                    loaded={particlesLoaded}
                    options={{
                        background: {
                            color: {
                                value: "rgba(0,0,0,0.2)",
                            },

                        },

                        fpsLimit: 120,
                        interactivity: {
                            events: {
                                onClick: {
                                    enable: true,
                                    mode: "push",
                                },
                                onHover: {
                                    enable: true,
                                    mode: "repulse",
                                },
                                resize: true,
                            },
                            modes: {
                                bubble: {
                                    distance: 400,
                                    duration: 2,
                                    opacity: 0.8,
                                    size: 40,
                                },
                                push: {
                                    quantity: 4,
                                },
                                repulse: {
                                    distance: 200,
                                    duration: 0.4,
                                },
                            },
                        },
                        particles: {
                            color: {
                                value: "#ffffff",
                            },
                            links: {
                                color: "#ffffff",
                                distance: 150,
                                enable: true,
                                opacity: 0.5,
                                width: 1,
                            },
                            collisions: {
                                enable: false,
                            },
                            move: {
                                direction: "none",
                                enable: true,
                                outMode: "bounce",
                                random: false,
                                speed: 2,
                                straight: false,
                            },
                            number: {
                                density: {
                                    enable: true,
                                    area: 800,
                                },
                                value: 80,
                            },
                            opacity: {
                                value: 0.5,
                            },
                            shape: {
                                type: "circle",
                            },
                            size: {
                                random: true,
                                value: 5,
                            },
                        },
                        detectRetina: true,
                    }}
                />
                <div className={s.wrapper}>
                    <Navigation active={active} setActive={setActive}/>
                    <BurgerButton setActive={setActive} active={active}/>
                    <AboutMe/>
                    <div className={s.container}>
                        <Skills />
                        <Projects/>
                        <Contacts/>
                        <Footer/>
                    </div>


                </div>

            </div>
    );
}
