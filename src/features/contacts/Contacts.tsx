import React from 'react';
import {Title} from "../../components/title/Title";
import {ContactsListItem} from "./contactslistItem/ContactsListItem";
import addressIcon from './../../assets/images/contacts/adress-icon.png';
import callIcon from './../../assets/images/contacts/call-icon.jpg';
import mailIcon from './../../assets/images/contacts/mail-icon.png';
import sendIcon from './../../assets/images/contacts/send-icon.png';

import s from './Contacts.module.scss';

export const Contacts = () => {


    return (
        <div className={s.contacts}>
            <Title title={' Get in touch'} className={s.contactsTitle}/>
            <div className={s.wrapper}>
                <div className={s.content}>
                    <div className={s.textBlock}>
                        <h2 className={s.textBlockTitle}>Don't be <span>shy</span></h2>
                        <p className={s.description}>
                            Feel free to get in touch with me. I am always open to discussing new projects, creative
                            ideas
                            or opportunities to be part of your visions.
                        </p>
                    </div>
                    <ul className={s.contactsList}>
                        <ContactsListItem subTitle={'ADDRESS POINT'} image={addressIcon}
                                          text={'Kupaly st, Molodechno , Republic of Belarus.'}/>
                        <ContactsListItem subTitle={'MAIL ME'}
                                          text={'trotzuk.stanislav@gmail.com'}
                                          image={mailIcon}
                        />
                        <ContactsListItem subTitle={'CALL ME'}
                                          text={'+375297612171'}
                                          image={callIcon}
                        />
                    </ul>
                </div>
                <form className={s.formBlock}>
                    <p className={s.inputNameWrapper}>
                        <input className={s.name} type="text" placeholder={'YOUR NAME'}/>
                        <input className={s.email} type="email" placeholder={'YOUR EMAIL'}/>
                    </p>
                    <p className={s.inputSubjectWrapper}>
                        <input className={s.subject} type="text" placeholder={'YOUR SUBJECT'}/>
                    </p>
                    <p className={s.inputTextAreaWrapper}>
                        <textarea className={s.textarea} placeholder={'YOUR MESSAGE'}/>
                    </p>
                    <button className={s.sendBtn} >
                        <span className={s.sendBtnTxt}>send message</span>
                        <span className={s.sendBtnImg}>
                            <img src={sendIcon} alt=""/>
                        </span>
                    </button>
                </form>
            </div>
        </div>
    );
}