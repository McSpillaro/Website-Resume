// IMPORTS
import * as THREE from 'three';

// CONSTANTS
const sections = document.querySelectorAll('.section');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    })
}, { threshold: 0 })

// Top header hover animation
function toggleHeader() {
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

// Skills & Experience section
function SE_section() {
    
}

// School section scroll animation
function animateSections() {
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        const offset = window.innerHeight - rect.top;

        if (offset >= 0 && offset <= window.innerHeight) {
            const opacity = 1 - (offset / window.innerHeight);
            const translateY = 20 * (offset / window.innerHeight);

            section.style.opacity = opacity;
            section.style.transform = `translateY(${translateY}px)`;
        }
    });
}

// Listen for scroll events to trigger animation
window.addEventListener('scroll', animateSections);