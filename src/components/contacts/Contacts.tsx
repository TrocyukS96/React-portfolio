import React from 'react';
import s from './Contacts.module.scss';
import {Input} from "../input/Input";
import {SuperButton} from "../superButton/SuperButton";
import {TextArea} from "../textArea/TextArea";
import { Title } from '../title/Title';

export function Contacts() {
    return (
        <div className={s.contacts}>
            <div className={s.wrapper}>
                <Title title={'Contacts'}/>
                <form>
                    <Input text={'Your name'} type={'text'}/>
                    <Input text={'Your email'} type={'email'}/>
                    <TextArea text={'Message'}/>
                    <SuperButton title={'Submit'}/>
                </form>
            </div>
        </div>
    );
}


