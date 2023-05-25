import axios from 'axios';

const sendEmail = async(senderName, senderEmail, message, recipientEmail)=> {
  const apiKey = '6659712fc87e9ef9cd989d6bf49350f5-07ec2ba2-86d0c489';
  const apiUrl = 'https://api.mailgun.net/v3/sandboxb5e53783476f41279b1ee965f8ae001a.mailgun.org/messages';
  const data = new FormData();
  data.append('from', `${senderName} <${senderEmail}>`);
  data.append('to', `Noor aldeen <${recipientEmail}>`);
  data.append('subject', 'Hello CodeScape I want Service');
  data.append('text', message);
  
  return axios.post(apiUrl, data, {
    auth: {
      username: 'api',
      password: apiKey
    },
  })
    .then(response => {
      console.log('Email sent successfully!');
      console.log('Response:', response.data);
      return true
    })
    .catch(error => {
      console.error('Error occurred:', error.response.data);
      return false
    });
}

export default sendEmail
