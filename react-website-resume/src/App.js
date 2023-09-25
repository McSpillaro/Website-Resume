import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
// Imports SVG icons as specified name from icons folder
import { ReactComponent as PHONE_ICONE } from './icons/phone.svg'
import { ReactComponent as EMAIL_ICON } from './icons/email.svg'
import { ReactComponent as LINK_ICON } from './icons/link.svg'

function App() {
  return (
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
  );
}

function DropdownInfo() {

  function DropdownItem(props) {
    return (
      <a href='#' className='menu-item'>
        {props.children}
      </a>
    )
  }

  return (
    <div className='dropdown'>
      <DropdownItem>(951)775-9828</DropdownItem>
    </div>
  )
}

function ContactBar(props) { /* Allowed to take in JSX elements in the App() function */
  return (
    <nav className='contactbar'>
      <ul className='contactbar-nav'> { props.children } </ul>
    </nav>
  );
}

function ContactItem(props) {

  const [copied, setCopied] = useState(false);

  return (
    <li className='contact-item'>
      <a href='#' className='icon-button' onClick={() => setCopied(!copied)}>
        {props.icon}
      </a>

      {copied && props.children} {/* If copied states is true then it will show the children */}
    </li>
  )
}

export default App;
