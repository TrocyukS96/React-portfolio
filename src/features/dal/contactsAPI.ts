import axios from 'axios';
import emailjs from '@emailjs/browser';
import {RequestData} from "../../../types";



export const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://localhost:3010/',
    // baseURL: 'http://localhost:7542/2.0/',
})

// const client = new SMTPClient({
//     user: 'Stanislav',
//     password: 'Gr$q7+kFGPc+-Gj',
//     host: 'smtp.trotzuk.stanislav@gmail.com',
//     ssl: true,
// });

// emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
//     .then((result) => {
//         console.log(result.text);
//     }, (error) => {
//         console.log(error.text);
//     });
// };


export const contactsApi = {
   async sendFeedBack(contactsData:RequestData){
        // try {
        //     const message = await client.sendAsync({
        //         text:contactsData.message,
        //         from: 'you <username@trotzuk.stanislav@gmail.com>',
        //         to: 'someone <someone@trotzuk.stanislav@gmail.com>, another <another@trotzuk.stanislav@gmail.com>',
        //         cc: 'else <else@trotzuk.stanislav@gmail.com>',
        //         subject: contactsData.subject,
        //     });
        //     console.log(message);
        // } catch (err) {
        //     console.error(err);
        // }

       try {
        const result = await emailjs.sendForm('service_po6nw7s', 'template_bpws7fa', 'asd', 'YOUR_PUBLIC_KEY')
       }catch (e) {
           console.log(e)
       }
    }
}


