import laboratoryExperience from '../data/laboratoryExperience.json'
import workExperience from '../data/workExperience.json'

function openUndergradInfo() {
    const experienceDetailsDiv = document.getElementById('experience-details');
    const selectedExperience = experienceData[0]; // Choice of experience
  
    const detailsHTML = `
      <h2>${selectedExperience.title}</h2>
      <ul>
        ${selectedExperience.responsibilities.map(responsibility => `<li>${responsibility}</li>`).join('')}
      </ul>
      `;
  
    experienceDetailsDiv.innerHTML = detailsHTML;
}

function openChemInfo() {
    const experienceDetailsDiv = document.getElementById('experience-details');
    const selectedExperience = experienceData[1]; // Choice of experience
  
    const detailsHTML = `
      <h2>${selectedExperience.title}</h2>
      <ul>
        ${selectedExperience.responsibilities.map(responsibility => `<li>${responsibility}</li>`).join('')}
      </ul>
      `;
  
    experienceDetailsDiv.innerHTML = detailsHTML;
}