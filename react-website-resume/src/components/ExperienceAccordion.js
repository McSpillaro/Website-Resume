import React, { useState } from 'react';
import Swiper from 'swiper';

// Imports the data needed for the experience section
import lab_experience_data from '../data/laboratory_experience.ts';
import work_experience_data from '../data/work_experience.ts';
import AccordionItem from './AccordianItem.tsx';
import "../styles/Accordion.css";

function ExperienceAccordion() {
  const [active, setActive] = useState(null);

  function handleToggle(index) {
    if (active === index) {
      return setActive(null);
    }
    setActive(index);
  }

  return (
    <div className="container-experiences">
      <div className='experience-section'>
        <h1>LABORATORY EXPERIENCE</h1>
        <ul className="experience-info">
          {lab_experience_data.map((item) => (
            <AccordionItem
              key={item.id}
              item={item}
              active={active}
              handleToggle={handleToggle}
            />
          ))}
        </ul>
      </div>
      <div className='experience-section'>
        <h1>WORK EXPERIENCE</h1>
        <ul className="experience-info">
          {work_experience_data.map((item) => (
            <AccordionItem
              key={item.id}
              item={item}
              active={active}
              handleToggle={handleToggle}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ExperienceAccordion;