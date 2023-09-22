document.getElementById('top_name').addEventListener('click', function() {
    window.location.href = 'https://linkedin.com/in/ernestspiller/'; // Redirect to LinkedIn
});

document.getElementById('top_name').addEventListener('mouseover', function() {
    document.getElementById('contact_info').style.display = 'block'; // Show the dropdown on hover
});

document.getElementById('email').addEventListener('click', function() {
    copyToClipboard('e.spiller2002@gmail.com', 'Email');
});

document.getElementById('phone').addEventListener('click', function() {
    copyToClipboard('(951) 775-9828', 'Phone');
});

document.getElementById('linkedin').addEventListener('click', function() {
    copyToClipboard('linkedin.com/in/ernestspiller/', 'LinkedIn');
});

function copyToClipboard(text, label) {
    const el = document.createElement('textarea');
    el.value = text;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    alert(`${label} Copied!`);
}
