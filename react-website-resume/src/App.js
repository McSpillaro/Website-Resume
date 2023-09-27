// Imports
import React, { useState } from 'react';

// Imports styles
import './App.css';

// Imports required functions from components
import Header from './components/Header';
import Contacts from './components/Contacts';
import ExperienceAccordion from './components/ExperienceAccordion';

function App() {

  return (
    <>
      <header id='header-title'>
        {/* <Header></Header> */}
      </header>
      <div>
        <Contacts />
      </div>

      {/* On page, shows expandable tabs with info on experience */}
      <section className="experiences">
        <ExperienceAccordion></ExperienceAccordion>
      </section>
    </>
  );
}

export default App;
