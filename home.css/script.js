document.addEventListener("DOMContentLoaded", function () {
    // --- Login/Register Slide Toggle ---
    const container = document.querySelector('.container');
    const registerbtn = document.querySelector('.register-btn');
    const loginbtn = document.querySelector('.login-btn');

    registerbtn.addEventListener('click', () => {
        container.classList.add('active');
    });

    loginbtn.addEventListener('click', () => {
        container.classList.remove('active');
    });

    // --- Password Show/Hide Toggle ---
    const toggles = document.querySelectorAll(".toggle-password");

    toggles.forEach(toggle => {
        toggle.addEventListener("click", (e) => {
            e.stopPropagation(); // Prevent click from affecting parent buttons
            // Find the input inside the same .input-box parent
            const input = toggle.closest('.input-box').querySelector('input');
            if (!input) return; // safety check
            // Toggle type
            const type = input.getAttribute('type') === 'password' ? 'text' : 'password';
            input.setAttribute('type', type);
            // Toggle icon
            toggle.classList.toggle('fa-eye');
            toggle.classList.toggle('fa-eye-slash');
        });
    });
});