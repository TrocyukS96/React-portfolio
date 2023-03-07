import React, {useRef, useState} from 'react';
import {Title} from "../../components/title/Title";
import s from './Contacts.module.scss';
import {useFormik} from "formik";
import {useDispatch} from "react-redux";
import {Box, Button, Modal, Typography} from "@mui/material";
import {sendMessage} from "../bll/contactsReducer";
import ContactsList from "../../components/contactsList/ContactsList";

//types
type FormikErrorType = {
    email?: string
    name?: string
    subject?: string
    message?: string
}

export const Contacts = () => {
    //hooks
    const dispatch = useDispatch()
    const [disable, setDisable] = useState(false)
    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false);
    const formRef = useRef(null);

    const formik = useFormik({
        initialValues: {
            email: '',
            name: '',
            subject: '',
            message: ''
        },
        validate: (values) => {
            const errors: FormikErrorType = {};
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
                setDisable(true)
            } else setDisable(false)
            if (!values.name && !values.subject && !values.message && !values.email) {
                errors.name = 'Please, fill in all the fields!';
                errors.subject = 'Please, fill in all the fields!';
                errors.message = 'Please, fill in all the fields!';
                errors.email = 'Please, fill in all the fields!';

                setDisable(true)
            } else setDisable(false)
            return errors;
        },
        onSubmit: () => {
            dispatch(sendMessage(formRef.current))
            // formik.resetForm()
            setTimeout(() => {
                setOpen(true)
            }, 2000)
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
                    <ContactsList/>
                </div>
                <form className={s.formBlock} onSubmit={formik.handleSubmit} ref={formRef}>
                    <p className={s.inputNameWrapper}>
                        <input
                            className={s.name}
                            type="text"
                            placeholder={'YOUR NAME'}
                            {...formik.getFieldProps('name')}

                        />
                        <input
                            className={s.email}
                            type="email"
                            placeholder={'YOUR EMAIL'}
                            {...formik.getFieldProps('email')}
                        />
                        {/*{formik.touched.email && formik.errors.email ? (*/}
                        {/*    <div style={{color: 'red'}}>{formik.errors.email}</div>*/}
                        {/*) : null}*/}

                    </p>
                    <p className={s.inputSubjectWrapper}>
                        <input
                            className={s.subject}
                            type="text"
                            placeholder={'YOUR SUBJECT'}
                            {...formik.getFieldProps('subject')}
                        />
                    </p>
                    <p className={s.inputTextAreaWrapper}>
                        <textarea
                            className={s.textarea}
                            placeholder={'YOUR MESSAGE'}
                            {...formik.getFieldProps('message')}
                        />

                    </p>
                    <p className={s.errors}>{formik.touched.message && formik.errors.message }</p>
                    <Button
                        variant={'contained'}
                        disabled={disable}
                        className={disable ? s.disableBtn : s.sendBtn}
                        type='submit'
                    >Send</Button>
                </form>
                <Modal
                    open={open} onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description">

                    <Box className={s.cartModal}>
                        {/*//@ts-ignore*/}
                        <Typography id="modal-modal-description" sx={{mt: 2}} className={s.cartModalText}>
                            Thanks for attention. I will try to answer as soon as possible!
                        </Typography>
                        <button onClick={handleClose} className={s.cartModalBtn}>x</button>
                    </Box>
                </Modal>
            </div>
        </div>
    );
}