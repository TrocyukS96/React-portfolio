import React from 'react';
import {Title} from "../../components/title/Title";
import {ContactsListItem} from "./contactslistItem/ContactsListItem";
import adressIcon from './../../assets/images/contacts/address-icon.webp';
import callIocn from './../../assets/images/contacts/call-icon.png';
import emaleIcon from './../../assets/images/contacts/email-icon.jpg';
import s from './Contacts.module.scss';

export const Contacts = () => {


    return (
        <div className={s.contacts}>
            <Title title={' Get in touch'}/>

            <div className={s.content}>
                <div className={s.textBlock}>
                    <h2 className={s.textBlockTitle}>Don't be shy</h2>
                    <p className={s.description}>
                        Feel free to get in touch with me. I am always open to discussing new projects, creative ideas
                        or opportunities to be part of your visions.
                    </p>
                </div>
                <ul className={s.contactsList}>
                    <ContactsListItem image={adressIcon} subTitle={'ADDRESS POINT'}
                                      text={'Kupaly st, Molodechno , Republic of Belarus.'}/>
                    <ContactsListItem image={emaleIcon} subTitle={'MAIL ME'} text={'trotzuk.stanislav@gmail.com'}/>
                    <ContactsListItem image={callIocn} subTitle={'CALL ME'} text={'+375297612171'}/>
                </ul>
                <form className={s.formBlock} action="">
                    <p className={s.inputNameWrapper}>
                        <input className={s.name} type="text"/>
                        <input className={s.email} type="email"/>
                    </p>
                    <p className={s.inputTextWrapper}>
                        <input type="text"/>
                    </p>
                    <p className={s.inputTextAreaWrapper}>
                        <input className={s.textarea} type="text"/>
                    </p>
                    <button>send message</button>
                </form>
            </div>

        </div>
    );
}