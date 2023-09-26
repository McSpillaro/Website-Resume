// Imports modules
import React, { useState } from 'react';

// Imports required functions from components
import ExperienceAccordion from './components/ExperienceAccordion';

// Imports SVG icons as specified name from icons folder
import { ReactComponent as PHONE_ICONE } from './icons/phone.svg'
import { ReactComponent as EMAIL_ICON } from './icons/email.svg'
import { ReactComponent as LINK_ICON } from './icons/link.svg'

function App() {
  
  return (
    <div>
      <header>
        <ContactBar> {/* Anything inside here will be fit into the contact-bar section */}
          <ContactItem icon={<PHONE_ICONE/>} >
            <DropdownInfo></DropdownInfo>
          </ContactItem>
          <ContactItem icon={<EMAIL_ICON/>} >
            <DropdownInfo></DropdownInfo>
          </ContactItem>  
          <ContactItem icon={<LINK_ICON/>} >
            <DropdownInfo></DropdownInfo>
          </ContactItem>
        </ContactBar>
      </header>

      {/* On page, shows expandable tabs with info on experience */}
      <section className="experiences">
        <ExperienceAccordion></ExperienceAccordion>
      </section>
    </div>
  );
}

function DropdownInfo() {

  function DropdownItem(props) {
    return (
      <a href='#' className='menu-item'>
        <span className='icon-button'>{props.keftIcon}</span>
        {props.children}
      </a>
    )
  };

  return (
    <div className='dropdown'>
      <DropdownItem>(951)775-9828</DropdownItem>
    </div>
  );
}

function ContactBar(props) { /* Allowed to take in JSX elements in the App() function */
  return (
    <nav className='contactbar'>
      <ul className='contactbar-nav'> { props.children } </ul>
    </nav>
  );
}

// Function component for contact item
function ContactItem(props) {

 // State for copied status
 const [copied, setCopied] = useState(false);

 // Return JSX for contact item
 return (
    <li className='contact-item'>
      <a href='#' className='icon-button' onClick={() => setCopied(!copied)}>
        {props.icon}
      </a>

      {copied && props.children} {/* If copied states is true then it will show the children */}
    </li>
 );
}

export default App;
