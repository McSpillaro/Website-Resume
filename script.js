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

    if (nameElement.textContent === 'ERNEST SPILLER') {
        nameElement.textContent = 'New Information';
        setTimeout(function() {
            nameElement.textContent = 'ERNEST SPILLER';
        }, 3000); // Reverts back to 'Your Name' after 3 seconds
    }
}
