// Imports
import React, { useState } from 'react';

// Imports styles
import './App.css';

// Imports required functions from components
import Header from './components/Header';
import ExperienceAccordion from './components/ExperienceAccordion';

// Imports SVG icons as specified name from icons folder
import { ReactComponent as PHONE_ICONE } from './icons/phone.svg'
import { ReactComponent as EMAIL_ICON } from './icons/email.svg'
import { ReactComponent as LINK_ICON } from './icons/link.svg'

function App() {
  
  return (
    <div>
      <header id='header-title'>
        <Header></Header>
      </header>

      {/* On page, shows expandable tabs with info on experience */}
      <section className="experiences">
        <ExperienceAccordion></ExperienceAccordion>
      </section>
    </div>
  );
}

export default App;
