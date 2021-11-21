import React from 'react';
import s from './Contacts.module.scss';
import {Input} from "../input/Input";
import {Btn} from "../btn/Btn";
import {TextArea} from "../textArea/TextArea";

export function Contacts() {
    return (
        <div className={s.contacts}>
            <div className={s.wrapper}>
                <h2 className={s.title}>Contacts</h2>
                <form>
                    <Input text={'Name'}/>
                    <Input text={'Surname'}/>
                    <TextArea text={'Description'}/>
                    <Btn title={'Submit'}/>
                </form>
            </div>
        </div>
    );
}


