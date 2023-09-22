// Get all dropdowns from the document
const dropdowns = document.querySelectorAll('.dropdown');

// Loop through all dropdown elements
dropdowns.forEach(dropdown => {
    // Get inner elements from each dropdown
    const select = dropdown.querySelector('.select');
    const caret = dropdown.querySelector('.caret');
    const menu = dropdown.querySelector('.menu');
    const options = dropdown.querySelectorAll('.menu li');
    const selected = dropdown.querySelector('.selected');

    // Click evevnt to the select element
    select.addEventListener('click', () => {
        // Add the clicked select styles to the select element defined in the topBar.css
        select.classList.toggle('select-clicked');
        // Add the rotate styles to the caret element
        caret.classList.toggle('caret-rotate');
        // Add the open styles to the contact_info element
        menu.classList.toggle('menu-open');
    });

    // Loop through all option elements
    options.forEach(option => {
        // Add click event to the option element
        option.addEventListener('click', () => {
            // Change selected inner text to clicked option inner text
            selected.innerText = option.innerText;
            // Add the clicked select styles to the select element
            select.classList.remove('select-clicked');
            // Add the rotate styles to the caret element
            caret.classList.remove('caret-rotate');
            // Add the open styles to the menu element
            menu.classList.remove('menu-open');
            // Remove active class for all option elements
            options.forEach(option => {
                option.classList.remove('active');
            });
            
            // Add active class to clicked option element
            option.classList.add('active');
        });
    });
});