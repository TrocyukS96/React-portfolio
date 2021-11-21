import React from 'react';
import s from './Footer.module.scss';


export function Footer() {
    return (
        <footer className={s.footer}>
            <div className={s.wrapper}>
                <h2 className={s.title}>Stanislav Trocyuk</h2>
                <div className={s.inner}>
                    <div className={s.column}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia, voluptate.</div>
                    <div className={s.column}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur facere libero magnam modi quasi sit?</div>
                    <div className={s.column}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, velit.</div>
                </div>
                <div className={s.bottom}>
                    All rights reserved
                </div>
            </div>
        </footer>
    );
}


