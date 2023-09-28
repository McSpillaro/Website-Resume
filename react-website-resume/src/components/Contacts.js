import React, { useState, useEffect } from "react";
import '../styles/Contacts.css';

import { ReactComponent as PHONE } from '../icons/call-outline.svg';
import { ReactComponent as EMAIL } from '../icons/mail-outline.svg';

// Component that creates a mini socials menu on the bottom left of the screen
function Contacts() {
    const phoneLabel = 'PHONE';
    const emailLabel = 'EMAIL';
    const copiedLabel = 'COPIED!';

    const [content, setContent] = useState(''); // Used for button label text
    const [labelType, setLabelType] = useState(''); // P => Phone ; E => Email
    const [isCopied, setIsCopied] = useState(false); // Used for className change
    const [suffix, setSuffix] = useState("");

    const handleChange = (event) => {
        setSuffix(event.target.value);
    };

    const handleClick = () => {
        setIsCopied(true);
        // Changes the button label to say 'COPIED!'
        setContent(copiedLabel);
        // Handles which text to copy to clipboard based on button clicked
        if (labelType === 'P') {
            // Adds the '-copied' class extension on click to change styles
            setSuffix('-copied');
            navigator.clipboard.writeText('9517759828');
        } else if (labelType === 'E') {
            // Adds the '-copied' class extension on click to change styles
            setSuffix('-copied');
            navigator.clipboard.writeText('e.spiller2002@gmail.com');
        } else {
            setSuffix('');
        }
    }

    return (
        <div className="container-contacts">
            <ul>
                {/* PHONE BUTTON */}
                <li // NOTE: using the ${} to add to the contact will change its style
                    // TRY TO CREATE SAME STYLE IN CSS FILE TO BUG FIX
                    className={`buttons-contacts`}
                    // Resets the label text to default on enter
                    onMouseEnter={() => {
                        setContent(phoneLabel)
                    }}
                    // Resets the label text to default on leave
                    onMouseLeave={() => {
                        setIsCopied(false); // Undos the copy function to prevent looping
                        setContent(phoneLabel);
                    }}
                    /* Handles copy & paste functionality */
                    onClick={() => {
                        setIsCopied(true);
                        setLabelType('P');
                        handleClick();
                    }}
                >
                    <span className="icon-contacts">

                    </span>
                    <span
                        className="text-contacts"
                        id="phone"
                    >
                        {content}
                    </span>
                </li>
                {/* EMAIL BUTTON */}
                <li
                    className={`buttons-contacts${suffix}`}
                    // Resets the label text to default on enter
                    onMouseEnter={() => {
                        setContent(emailLabel)
                    }}
                    // Resets the label text to default on leave
                    onMouseLeave={() => {
                        setIsCopied(false); // Undos the copy function to prevent looping
                        setContent(emailLabel);
                    }}
                    /* Handles copy & paste functionality */
                    onClick={() => {
                        setIsCopied(true);
                        setLabelType('E');
                        handleClick();
                    }}
                >
                    <span className="icon-contacts">

                    </span>
                    <span
                        className="text-contacts"
                        id="email"
                    >
                        {content}
                    </span>
                </li>
            </ul>
        </div>
    );
}

export default Contacts;