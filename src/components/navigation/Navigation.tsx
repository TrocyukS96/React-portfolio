import React from 'react';
import s from './Navigation.module.scss';
import {NavItem} from "./navItem/NavItem";
import homeIcon from './../../assets/images/icons/home-icon.png';
import personIcon from './../../assets/images/icons/person-icon.png';
import portfolioIcon from './../../assets/images/icons/portfolio-icon.png';
import letterIcon from './../../assets/images/icons/letter-icon.png';

type NavigationPropsType = {
    active: boolean
    setActive: (active: boolean) => void
}
export const navData = ['Home', 'Skills', 'Portfolio', 'Contacts']
export const Navigation = (props: NavigationPropsType) => {
    const onClickCancelClass = () => {
        props.setActive(false)
    }
    return (
        <nav className={props.active ? s.nav + ' ' + s.active : s.nav}>
            <ul className={s.desktopList}>
                <NavItem text={navData[0]} icon={homeIcon} navData={navData[0]}/>
                <NavItem text={navData[1]} icon={personIcon} navData={navData[1]}/>
                <NavItem
                    isSvgIcon={true}
                    text={navData[2]}
                    icon={<svg width={30} style={{position:'relative',zIndex:2}} version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                        viewBox="0 0 295.668 295.668"  xmlSpace="preserve">
                        <g>
                        <g>
                        <g>
                        <path d="M269.038,75.741c0.183-0.714,0.29-1.459,0.29-2.231c0-4.971-4.029-9-9-9h-19.499c-4.971,0-9,4.029-9,9
                        c0,0.397,0.035,0.785,0.084,1.169h-27.111V62.25c0-20.633-16.787-37.42-37.421-37.42h-39.096
                        c-20.634,0-37.421,16.787-37.421,37.42v12.429h-27.11c0.05-0.384,0.084-0.772,0.084-1.169c0-4.971-4.029-9-9-9H35.34
                        c-4.971,0-9,4.029-9,9c0,0.771,0.107,1.516,0.29,2.231C11.349,79.581,0,93.432,0,109.888V235.63
                        c0,19.414,15.794,35.208,35.208,35.208H260.46c19.414,0,35.208-15.794,35.208-35.208V109.888
                        C295.668,93.432,284.319,79.581,269.038,75.741z M108.865,62.25c0-10.708,8.712-19.42,19.421-19.42h39.096
                        c10.709,0,19.421,8.712,19.421,19.42v12.429h-77.938V62.25z M277.668,235.63c0,9.488-7.72,17.208-17.208,17.208H35.208
                        c-9.488,0-17.208-7.72-17.208-17.208V109.888c0-9.489,7.72-17.208,17.208-17.208H260.46c9.488,0,17.208,7.72,17.208,17.208
                        V235.63z"/>
                        <path d="M236.314,129.095H59.354c-4.971,0-9,4.029-9,9c0,4.971,4.029,9,9,9h176.961c4.971,0,9-4.029,9-9
                        C245.315,133.124,241.285,129.095,236.314,129.095z"/>
                        <path d="M236.314,164.645H59.354c-4.971,0-9,4.029-9,9c0,4.971,4.029,9,9,9h176.961c4.971,0,9-4.029,9-9
                        C245.315,168.674,241.285,164.645,236.314,164.645z"/>
                        <path d="M236.314,200.195H59.354c-4.971,0-9,4.029-9,9s4.029,9,9,9h176.961c4.971,0,9-4.029,9-9S241.285,200.195,236.314,200.195
                        z"/>
                        </g>
                        </g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        </svg>
                    }
                    navData={navData[2]}
                />
                <NavItem text={navData[3]}
                         isSvgIcon={true}
                         icon={
                    <svg width={30} style={{position:'relative',zIndex:1}} version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                    viewBox="0 0 453.818 453.818"  xmlSpace="preserve">
                    <path d="M438.818,96.071H15c-8.284,0-15,6.716-15,15v231.676c0,8.284,6.716,15,15,15h423.818c8.284,0,15-6.716,15-15V111.071
                    C453.818,102.787,447.103,96.071,438.818,96.071z M30,133.089l140.736,93.819L30,320.733V133.089z M55.533,327.747l133.231-88.821
                    l32.598,21.731c1.68,1.12,3.613,1.679,5.547,1.679s3.867-0.56,5.547-1.679l32.601-21.733l133.233,88.822H55.533z M226.909,240.319
                    L55.53,126.071h342.759L226.909,240.319z M283.085,226.907l140.734-93.818v187.64L283.085,226.907z"/>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    </svg>
                } navData={navData[3]}/>
            </ul>
            <ul className={props.active ? s.mobileList + " " + s.active : s.mobileList}>
                {navData.map((l, i) => {
                    return (
                        <a className={s.mobileLink} href={'#' + l} key={i} onClick={onClickCancelClass}>
                            <li className={s.mobileItem}>
                                <span>{l}</span>
                            </li>
                        </a>
                    )
                })}
                <div className={s.cancel} onClick={onClickCancelClass}>X</div>
            </ul>

        </nav>
    );
}
