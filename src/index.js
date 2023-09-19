// IMPORTS
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// CONSTS
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// FUNCTIONS
function toggleHeader() { // Top header hover animation
  var header = document.getElementById('header');
  var nameElement = header.querySelector('h1');
  var contactInfo = document.getElementById('contact_info');

  if (nameElement.textContent === 'ERNEST SPILLER') {
      nameElement.textContent = ''; // Hide the name
      contactInfo.classList.add('active'); // Add 'active' class to show contact info
      setTimeout(function() {
          nameElement.textContent = 'ERNEST SPILLER';
          contactInfo.classList.remove('active'); // Remove 'active' class after 3 seconds
      }, 3000);
  }
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
