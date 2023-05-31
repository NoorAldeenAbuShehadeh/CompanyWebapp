import axios from 'axios';

const sendEmail = async(senderName, senderEmail, message, recipientEmail)=> {
  const apiKey = '95f78dd5b72febf7c53cc62fd8134704-db4df449-c6946407';
  const apiUrl = 'https://api.mailgun.net/v3/sandbox5ee3242cf1ce4bdb86ca5b6a8afd0491.mailgun.org/messages';
  const data = new FormData();
  data.append('from', `${senderName} <${senderEmail}>`);
  data.append('to', `Noor aldeen abu shehadeh <${recipientEmail}>`);
  data.append('subject', 'Hello CodeScape I want Service');
  data.append('text', message);
  
  return axios.post(apiUrl, data, {
    auth: {
      username: 'api',
      password: apiKey
    },
  })
    .then(response => {
      return true
    })
    .catch(error => {
      return false
    });
}

export default sendEmail
