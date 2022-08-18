import React, {useState} from 'react';
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
import {Box, Button, Modal, Typography} from "@mui/material";
import {sendMessage} from "../bll/contactsReducer";

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
        onSubmit: values => {
            dispatch(sendMessage({
                name: values.name,
                mail: values.email,
                subject: values.subject,
                message: values.message
            }))
            formik.resetForm()
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
                    <ul className={s.contactsList}>
                        <ContactsListItem subTitle={'ADDRESS POINT'}
                                          isSvgIcon={true}
                                          image={
                                              <svg width={40} fill={'lightgrey'} version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                              viewBox="0 0 368.666 368.666"  xmlSpace="preserve">
                                              <g id="XMLID_2_">
                                              <g>
                                              <g>
                                              <path d="M184.333,0C102.01,0,35.036,66.974,35.036,149.297c0,33.969,11.132,65.96,32.193,92.515
                                              c27.27,34.383,106.572,116.021,109.934,119.479l7.169,7.375l7.17-7.374c3.364-3.46,82.69-85.116,109.964-119.51
                                              c21.042-26.534,32.164-58.514,32.164-92.485C333.63,66.974,266.656,0,184.333,0z M285.795,229.355
                                              c-21.956,27.687-80.92,89.278-101.462,110.581c-20.54-21.302-79.483-82.875-101.434-110.552
                                              c-18.228-22.984-27.863-50.677-27.863-80.087C55.036,78.002,113.038,20,184.333,20c71.294,0,129.297,58.002,129.296,129.297
                                              C313.629,178.709,304.004,206.393,285.795,229.355z"/>
                                              <path d="M184.333,59.265c-48.73,0-88.374,39.644-88.374,88.374c0,48.73,39.645,88.374,88.374,88.374s88.374-39.645,88.374-88.374
                                              S233.063,59.265,184.333,59.265z M184.333,216.013c-37.702,0-68.374-30.673-68.374-68.374c0-37.702,30.673-68.374,68.374-68.374
                                              s68.373,30.673,68.374,68.374C252.707,185.341,222.035,216.013,184.333,216.013z"/>
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
                                          text={'Kupaly st, Molodechno , Republic of Belarus.'}/>
                        <ContactsListItem subTitle={'MAIL ME'}
                                          text={'trotzuk.stanislav@gmail.com'}
                                          image={
                                              <svg width={40} fill={'lightgrey'} style={{position:'relative',zIndex:1}} version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
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
                                          }
                        />
                        <ContactsListItem subTitle={'CALL ME'}
                                          text={'+375297612171'}
                                          image={
                                              <svg width="40px"   viewBox="0 0 24 24" id="call" xmlns="http://www.w3.org/2000/svg">
                                                  <rect id="Rectangle_4" data-name="Rectangle 4" width="24" height="24" fill={'lightgrey'} />
                                                  <path id="Shape" d="M7.02,15.976,5.746,13.381a.7.7,0,0,0-.579-.407l-1.032-.056a.662.662,0,0,1-.579-.437,9.327,9.327,0,0,1,0-6.5.662.662,0,0,1,.579-.437l1.032-.109a.7.7,0,0,0,.589-.394L7.03,2.446l.331-.662a.708.708,0,0,0,.07-.308.692.692,0,0,0-.179-.467A3,3,0,0,0,4.693.017l-.235.03L4.336.063A1.556,1.556,0,0,0,4.17.089l-.162.04C1.857.679.165,4.207,0,8.585V9.83c.165,4.372,1.857,7.9,4,8.483l.162.04a1.556,1.556,0,0,0,.165.026l.122.017.235.03a3,3,0,0,0,2.558-.993.692.692,0,0,0,.179-.467.708.708,0,0,0-.07-.308Z" transform="translate(3.887 6.093) rotate(-30)" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="1.5"/>
                                              </svg>

                                          }
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