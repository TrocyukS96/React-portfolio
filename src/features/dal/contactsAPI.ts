import axios from 'axios';
import emailjs from '@emailjs/browser';


export const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://localhost:3010/',
    // baseURL: 'http://localhost:7542/2.0/',
})

export const contactsApi = {
   async sendFeedBack(form:any){
       try {
        await emailjs.sendForm('service_bbr8g5h', 'template_bpws7fa', form, 'Ft1-FiAPrhMBBSCVz')
       }catch (e) {
           console.log(e)
       }
    }
}


