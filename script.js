const user_con = document.querySelector('.user-container');
const regis_btn = document.querySelector('.registration-btn');
const login_btn = document.querySelector('.login-btn');

regis_btn.addEventListener('click',()=>{
    user_con.classList.add('login-section--display');
})

login_btn.addEventListener('click',()=>{
    user_con.classList.remove('login-section--display');
})

let cofigusername = null;
let configpassword = null;
document.getElementById('register-form-submit').addEventListener('submit', function(event) {

    cofigusername = document.getElementById('username1').value;
    configpassword = document.getElementById('password2').value;
});

document.getElementById('login-form-submit').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // if(cofigusername === null || configpassword === null)
    // {
    //     alert("Please register yourself first")
    // }
    if (username === 'vivek@gmail.com' && password === 'raj') {
        // Successful login, redirect or show a success message
        // window.location.href = 'success.html';
        alert("You have been successfully loged")
    } else {
        const errorMessage = document.getElementById('error-message');
        errorMessage.textContent = 'Invalid username or password';
    }
});
