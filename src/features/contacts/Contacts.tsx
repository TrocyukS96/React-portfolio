import React from 'react';
import {Title} from "../../components/title/Title";
import {ContactsListItem} from "./contactslistItem/ContactsListItem";
import addressIcon from './../../assets/images/contacts/adress-icon.png';
import callIcon from './../../assets/images/contacts/call-icon.jpg';
import mailIcon from './../../assets/images/contacts/mail-icon.png';
import sendIcon from './../../assets/images/contacts/send-icon.png';
import s from './Contacts.module.scss';
import {useFormik} from "formik";
import {useDispatch} from "react-redux";
import axios from "axios";

//types
type FormikErrorType = {
    email?: string
    name?: string
    subject?: string
    message?: string
}

export const Contacts = () => {
        const dispatch = useDispatch()
        const formik = useFormik({
            initialValues: {
                email: '',
                name: '',
                subject:'',
                message: ''
            },
            validate: (values) => {
                const errors: FormikErrorType = {};
                if (!values.email) {
                    errors.email = 'Required';
                } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                    errors.email = 'Invalid email address';
                }
                // if (!values.password) {
                //     errors.password = 'Required';
                // } else if (values.password.length <= 3 || values.password.length > 20) {
                //     errors.password = 'password should consist from 3 to 20 symbols'
                // }
                return errors;
            },
            onSubmit: values => {
                // dispatch(sendMessage({
                //     name:values.name,
                //     contacts:values.email,
                //     message:values.message
                // }))
                // contactsApi.sendFeedBack({
                //         name:values.name,
                //         contacts:values.email,
                //         message:values.message
                //     }).then(()=>{
                //     alert('your message has been sent')
                // })
                axios.post('https://nodejs-gmail.herokuapp.com/sendMessage', {
                            name:values.name,
                            mail:values.email,
                            subject:values.subject,
                            message:values.message
                        }).then(()=>{
                    alert('the message have been sent')
                })
                // dispatch(sendMessage({
                //                 name:values.name,
                //                 mail:values.email,
                //                 subject:values.subject,
                //                 message:values.message
                //             }))
                // formik.resetForm()
                // alert('ok')

            },

        })

    return (
        <div className={s.contacts} id={'Contacts'}>
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
                <form className={s.formBlock} onSubmit={formik.handleSubmit}>
                    <p className={s.inputNameWrapper}>
                        <input
                            className={s.name}
                            type="text"
                            placeholder={'YOUR NAME'}
                            {...formik.getFieldProps('name')}

                        />
                        {formik.touched.name && formik.errors.name ? (
                            <div style={{color: 'red'}}>{formik.errors.name}</div>
                        ) : null}
                        <input
                            className={s.email}
                            type="email"
                            placeholder={'YOUR EMAIL'}
                            {...formik.getFieldProps('email')}
                        />
                        {formik.touched.email && formik.errors.email ? (
                            <div style={{color: 'red'}}>{formik.errors.email}</div>
                        ) : null}

                    </p>
                    <p className={s.inputSubjectWrapper}>
                        <input
                            className={s.subject}
                            type="text"
                            placeholder={'YOUR SUBJECT'}
                            {...formik.getFieldProps('subject')}
                        />
                    </p>
                    {formik.touched.subject && formik.errors.subject ? (
                        <div style={{color: 'red'}}>{formik.errors.subject}</div>
                    ) : null}
                    <p className={s.inputTextAreaWrapper}>
                        <textarea
                            className={s.textarea}
                            placeholder={'YOUR MESSAGE'}
                            {...formik.getFieldProps('message')}
                        />

                    </p>
                    {formik.touched.message && formik.errors.message ? (
                        <div style={{color: 'red'}}>{formik.errors.message}</div>
                    ) : null}
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