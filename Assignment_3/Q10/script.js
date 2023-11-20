document.addEventListener('DOMContentLoaded', function () {

    const contactForm = document.getElementById('contactForm');
    const errorMessage = document.getElementById('error-message');

    contactForm.addEventListener('submit', function (event) {
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (!name || !email || !message) {
            event.preventDefault();
            errorMessage.innerText = 'This field is required';
        } else if (!isValidEmail(email)) {
            event.preventDefault();
            errorMessage.innerText = 'Please use a valid email address';
        } else {
            errorMessage.innerText = '';
        }
    });

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});
