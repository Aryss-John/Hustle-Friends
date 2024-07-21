document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("fName").innerHTML = localStorage.getItem("firstName");
    document.getElementById("lName").innerHTML = localStorage.getItem("lastName");
    document.getElementById("email").innerHTML = localStorage.getItem("email");
    document.getElementById("pWord").innerHTML = localStorage.getItem("password");
});