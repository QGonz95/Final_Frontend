import React, { useState } from 'react'
import emailJs from '@emailjs/browser'
import { Box, flexbox } from '@mui/system';

const Contact = () => {

    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // REACT_APP_SERVICE_ID=service_togztnz
        // REACT_APP_TEMPLATE_ID=template_yc9fhfo
        // REACT_APP_PUBLIC_KEY=9-6naLvyEwcM-9tHV
        const serviceId = "service_togztnz"
        const templateId = "template_yc9fhfo"
        const publicKey = "9-6naLvyEwcM-9tHV"

        const templateParams = {
            user_name: name,
            user_number: number,
            user_email: email,
            user_goal: message
        }

        emailJs.send(serviceId, templateId, templateParams, publicKey)
            .then((response) => {
                console.log('Email sent successfully', response);
                setName('')
                setNumber('')
                setEmail('')
                setMessage('')
            })
            .catch((error) => {
                console.error('Error sending email:', error)
            })
    }

    return (
        <Box style={{ margin: "90px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
            <form onSubmit={handleSubmit} style={{display: "flex", flexDirection: "column"}}>
                <input
                    required={true}
                    style={{ margin: "10px 0px", fontFamily: "sans-serif" }}
                    type="text"
                    placeholder='Your Name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    required={true}
                    style={{ margin: "10px 0px", fontFamily: "sans-serif" }}
                    type="email"
                    placeholder='Your Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    required={true}
                    style={{ margin: "10px 0px", fontFamily: "sans-serif" }}
                    type="text"
                    placeholder='Phone Number'
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                />
                <textarea
                    required={true}
                    style={{ margin: "10px 0px", fontFamily: "sans-serif"}}
                    cols="30"
                    rows="10"
                    placeholder='Share a goal you wish to hit with us!'
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                ></textarea>
                <button type='submit'>Send Email</button>
            </form>
        </Box>
    )
};

export default Contact