window.addEventListener('scroll', function() {
    var square = document.querySelector('.center-square');
    var position = square.getBoundingClientRect();

    if (position.top <= window.innerHeight && position.bottom >= 0) {
        square.style.animation = 'moveUp 1s forwards';
    }
});
