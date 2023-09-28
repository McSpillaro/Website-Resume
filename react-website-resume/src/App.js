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
    <body>
      <header id='header-title'>
        <Header></Header>
      </header>
      <div>
        <Contacts />
      </div>

      {/* On page, shows expandable tabs with info on experience */}
      <section>
        <div className='style-test'>&nbsp;{/* tmp : for style testing */}</div>
        <div className='section-title'>EXPERIENCE</div>
        <ExperienceAccordion className='middle-section'></ExperienceAccordion>
        <div className='style-test'>&nbsp;{/* tmp : for style testing */}</div>
      </section>
      <section>
        <ExperienceAccordion className='middle-section'></ExperienceAccordion>
        <div className='style-test'>&nbsp;{/* tmp : for style testing */}</div>
      </section>
    </body>
  );
}

export default App;
