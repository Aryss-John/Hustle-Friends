var loginForm = document.getElementById("LogIn");
var signupForm = document.getElementById("SignUp");
var btn = document.getElementById("btn");
var logBtn = document.getElementById("log");
var signBtn = document.getElementById("sign");

function signup() {
    loginForm.style.left = "-120%";
    signupForm.style.left = "0%";
    btn.style.left = "52%";
    signBtn.style.color = "#d1d5db";
    logBtn.style.color = "black";
}

function login() {
    loginForm.style.left = "0%";
    signupForm.style.left = "120%";
    btn.style.left = "2%";
    signBtn.style.color = "black";
    logBtn.style.color = "#d1d5db";
}

let firstnames = ["Jacob Christian"];
let lastnames = ["Bautista"];
let emails = ["btst@gmail.com"];
let passwords = ["admin123"];

function AccountLogIn() {
    var emailLogIn = document.getElementById("loginEmail").value;
    var passwordLogIn = document.getElementById("passwordEmail").value;

    for (let i = 0; i < emails.length; i++) {
        if (emailLogIn === emails[i] && passwordLogIn === passwords[i]) {
            localStorage.setItem("firstName", firstnames[i]);
            localStorage.setItem("lastName", lastnames[i]);
            localStorage.setItem("email", emailLogIn);
            localStorage.setItem("password", passwordLogIn);
            return true; // Form will submit
        }
    }

    alert("Hello! You are using an incorrect email or password.");
    return false; // Prevent form submission
}

function AccountSignIn() {

    if (document.getElementById("I-agree").checked) {
        var firstNameInput = document.getElementById("firstName").value;
        var lastNameInput = document.getElementById("lastName").value;
        var newEmailInput = document.getElementById("newEmail").value;
        var newPasswordInput = document.getElementById("newPassword").value;

        firstnames.push(firstNameInput);
        lastnames.push(lastNameInput);
        emails.push(newEmailInput);
        passwords.push(newPasswordInput);

        localStorage.setItem("firstName", firstNameInput);
        localStorage.setItem("lastName", lastNameInput);
        localStorage.setItem("email", newEmailInput);
        localStorage.setItem("password", newPasswordInput);

        return true; // Form will submit
    }
    else {
        alert("Hello, You need to accept the terms and conditions!");
        return false;
    }
    
}

function togglePasswordVisibility(inputId) {
    var input = document.getElementById(inputId);
    if (input.type === "password") {
        document.getElementById("pass-icon").src = 'Assets/pass-not-eye.svg'
        input.type = "text";
    } else {
        document.getElementById("pass-icon").src = 'Assets/pass-eye.svg'
        input.type = "password";
    }
}

