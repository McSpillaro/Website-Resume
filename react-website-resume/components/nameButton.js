function copyToClipboard(text) {
    const el = document.createElement('textarea');
    el.value = text;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    const selected =
        document.getSelection().rangeCount > 0 ?
        document.getSelection().getRangeAt(0) : false;
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    if (selected) {
        document.getSelection().removeAllRanges();
        document.getSelection().addRange(selected);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {
        const select = dropdown.querySelector('.select');
        const caret = dropdown.querySelector('.caret');
        const menu = dropdown.querySelector('.menu');
        const options = menu.querySelectorAll('li');
        const selected = dropdown.querySelector('.selected');

        select.addEventListener('click', () => {
            menu.classList.toggle('menu-open');
        });
    });

    // Add this event listener to handle the animation
    select.addEventListener('mouseenter', () => {
        if (!menu.classList.contains('menu-open')) {
            menu.style.maxHeight = '0';
            menu.style.opacity = '0';
            menu.style.transition = 'max-height 0.2s ease-out, opacity 0.2s ease-out';

            // Trigger a reflow before changing styles
            void menu.offsetHeight;

            menu.style.maxHeight = '500px'; // Set to the desired max height
            menu.style.opacity = '1';
        }
    });

    select.addEventListener('mouseleave', () => {
        if (!menu.classList.contains('menu-open')) {
            menu.style.maxHeight = '0';
            menu.style.opacity = '0';
        }
    });

    options.forEach(option => {
        option.addEventListener('click', () => {
            selected.innerText = option.innerText;
            select.classList.remove('select-clicked');
            caret.classList.remove('caret-rotate');
            menu.classList.remove('menu-open');
            options.forEach(opt => {
                opt.classList.remove('active');
            });
                
            const copyableItems = document.getElementById('copyable');

            copyableItems.forEach(item => {
                item.addEventListener('click', function() {
                    const textToCopy = this.dataset.text;
                    copyToClipboard(textToCopy);
                    this.innerText = 'Copied!';
                });
            });

            option.classList.add('active');
        });
    });
});
