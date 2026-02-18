const container = document.querySelector('.container');
const registerbtn = document.querySelector('.register-btn');
const loginbtn = document.querySelector ('.login-btn');

registerbtn.addEventListener('click', (e) => {
    e.preventDefault();
    container.classList.add('active');
});

loginbtn.addEventListener('click', (e) => {
    e.preventDefault();
    container.classList.remove('active');
});