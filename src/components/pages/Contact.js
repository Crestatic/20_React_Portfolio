import React, { useState } from "react";

// import validateEmail from '../../utils/helper';
import '../styles/style.css'

// couldn't get import to work yet.  Check back to this again later.
// For now we're just gonna place validateEmail function in contacts.js
function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

export default function Contact() {

    // Create state variables for the fields in the form
    // We are also setting their initial values to an empty string
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        // Getting the value and name of the input which triggered the change
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        // Based on the input type, we set the state of either username, emai, or message
        if (inputType === 'userName') {
            setUserName(inputValue);
        } else if (inputType === 'email') {
            setEmail(inputValue);
        } else {
            setMessage(inputValue);
        }
    };

    const handleFormSubmit = (e) => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        e.preventDefault();
        // check to see if user input a username. If not, display error message then return
        if (!userName) {
            setErrorMessage('Please input a Username')
            return;
        }
        // check to see if email is valid. If not, display error message then return
        if (!validateEmail(email)) {
            setErrorMessage('Email is invalid');
            return;
        }
        alert(`Message Sent.  Thank you ${userName}`);

        // Clears user input after message sent
        setUserName('');
        setEmail('');
        setMessage('');
        setErrorMessage('');
    }

    return (
        <div>
            <form className="form">
                <input
                    value={userName}
                    name="userName"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="username"
                />
                <input
                    value={email}
                    name="email"
                    onChange={handleInputChange}
                    type="email"
                    placeholder="email"
                />
                <input
                    value={message}
                    name="message"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="message"
                />
                <button type="button" onClick={handleFormSubmit}>Submit</button>
            </form>
            {errorMessage && (
                <div>
                    <p className="error-text">{errorMessage}</p>
                </div>
            )}
        </div>
    );
}