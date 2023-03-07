import React from 'react';
import s from "./ContactsList.module.scss";
import {ContactsListItem} from "../../features/contacts/contactslistItem/ContactsListItem";
import LocationIcon from "../../assets/images/icons/LocationIcon";
import LetterIcon from "../../assets/images/icons/LetterIcon";
import CallIcon from "../../assets/images/icons/CallIcon";

const ContactsList = () => {
    return (
        <ul className={s.contactsList}>
            <ContactsListItem subTitle={'ADDRESS POINT'}
                              isSvgIcon={true}
                              image={<LocationIcon/>}
                              text={'Kupaly st, Molodechno , Republic of Belarus.'}/>
            <ContactsListItem subTitle={'MAIL ME'}
                              text={'trotzuk.stanislav@gmail.com'}
                              image={<LetterIcon/>}
            />
            <ContactsListItem subTitle={'CALL ME'}
                              text={'+375297612171'}
                              image={<CallIcon/>}
            />
        </ul>
    );
};

export default ContactsList;