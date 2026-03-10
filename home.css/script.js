document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector('.container');
    const registerbtn = document.querySelector('.register-btn');
    const loginbtn = document.querySelector('.login-btn');

    console.log(container);
    console.log(registerbtn);
    console.log(loginbtn);

    registerbtn.addEventListener('click', () => {
        container.classList.add('active');
    });

    loginbtn.addEventListener('click', () => {
        container.classList.remove('active');
    });
});