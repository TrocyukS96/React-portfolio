import React from "react";
import './Header.scss';


export const Header =(props:any) => {
    return (
        <header className="header">
            <div className="container">
                <div className="header__wrap">
                    <div className="header__logo logo">
                        <p className="logo__name">TROCYUK STANISLAV</p>
                        <p className="logo__profession">Web Developer</p>
                    </div>
                    <div className="header__burger">
                        <span className="header__burger-span"></span>
                    </div>
                    <div className="header__navigation navigation">
                        <ul className="navigation__list">
                            <li className="navigation__item">
                                <a className="navigation__link" href="#about">About me</a>
                            </li>
                            <li className="navigation__item">
                                <a className="navigation__link" href="#skills">My skills</a>
                            </li>
                            <li className="navigation__item">
                                <a className="navigation__link" href="#portfolio">Portfolio</a>
                            </li>
                            <li className="navigation__item">
                                <a className="navigation__link" href="#contacts">Contacts</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}