// IMPORTS
import * as THREE from 'three';
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

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;

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
