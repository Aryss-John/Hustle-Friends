// Initialize arrays from localStorage or create new arrays if they don't exist
let firstnames = JSON.parse(localStorage.getItem("firstnames")) || ["Jacob Christian", "Aries"];
let lastnames = JSON.parse(localStorage.getItem("lastnames")) || ["Bautista", "Tolentino"];
let emails = JSON.parse(localStorage.getItem("emails")) || ["btst@gmail.com", "ARS@gmail.com"];
let passwords = JSON.parse(localStorage.getItem("passwords")) || ["admin123", "Hello123"];

function AccountLogIn() {
    var emailLogIn = document.getElementById("email").value;
    var passwordLogIn = document.getElementById("password").value;

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
    var firstNameInput = document.getElementById("first_name").value;
    var lastNameInput = document.getElementById("last_name").value;
    var newEmailInput = document.getElementById("Sign-email").value;
    var newPasswordInput = document.getElementById("Sign-password").value;

    firstnames.push(firstNameInput);
    lastnames.push(lastNameInput);
    emails.push(newEmailInput);
    passwords.push(newPasswordInput);

    localStorage.setItem("firstnames", JSON.stringify(firstnames));
    localStorage.setItem("lastnames", JSON.stringify(lastnames));
    localStorage.setItem("emails", JSON.stringify(emails));
    localStorage.setItem("passwords", JSON.stringify(passwords));

    localStorage.setItem("firstName", firstNameInput);
    localStorage.setItem("lastName", lastNameInput);
    localStorage.setItem("email", newEmailInput);
    localStorage.setItem("password", newPasswordInput);

    return true; // Form will submit
}