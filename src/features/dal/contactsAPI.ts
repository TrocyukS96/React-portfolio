import axios from 'axios';
import { SMTPClient } from 'emailjs';
import {RequestData} from "../../../types";



export const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://localhost:3010/',
    // baseURL: 'http://localhost:7542/2.0/',
})

const client = new SMTPClient({
    user: 'Stanislav',
    password: 'Gr$q7+kFGPc+-Gj',
    host: 'smtp.trotzuk.stanislav@gmail.com',
    ssl: true,
});

export const contactsApi = {
   async sendFeedBack(contactsData:RequestData){
        try {
            const message = await client.sendAsync({
                text:contactsData.message,
                from: 'you <username@trotzuk.stanislav@gmail.com>',
                to: 'someone <someone@trotzuk.stanislav@gmail.com>, another <another@trotzuk.stanislav@gmail.com>',
                cc: 'else <else@trotzuk.stanislav@gmail.com>',
                subject: contactsData.subject,
            });
            console.log(message);
        } catch (err) {
            console.error(err);
        }

    }
}


