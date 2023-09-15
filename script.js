window.addEventListener('scroll', function() {
    var square = document.querySelector('.center-square');
    var position = square.getBoundingClientRect();

    if (position.top <= window.innerHeight && position.bottom >= 0) {
        square.style.animation = 'moveUp 1s forwards';
    }
});

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