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
                <NavItem text={navData[2]} icon={portfolioIcon} navData={navData[2]}/>
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
