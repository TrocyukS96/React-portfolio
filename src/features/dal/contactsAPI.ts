import axios from 'axios';

export const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://localhost:3010/',
    // baseURL: 'http://localhost:7542/2.0/',
})

export const contactsApi = {
    sendFeedBack(contactsData:any){
        return axios.post('http://localhost:3010/sendMessage',contactsData)
    }
}
