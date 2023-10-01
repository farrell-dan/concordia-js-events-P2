// add js here

console.log("form test running JS")

const form = document.querySelector("form");
const fullName = document.getElementById("name");
const streetAddress = document.getElementById("street");
const emailAddress = document.getElementById("email");
const phoneNumber = document.getElementById("phone");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("conPassword");
const terms = document.getElementById("terms");
const errorMessageLength = document.getElementById("errorMessageLength");
const errorMessageMatch = document.getElementById("errorMessageMatch");

errorMessageLength.style.display = "none"
errorMessageMatch.style.display = "none"


form.addEventListener("submit", (event) => {
    event.preventDefault();
    errorMessageLength.style.display = "none"
    errorMessageMatch.style.display = "none"
    const passwordValue = password.value;
    const confirmPasswordValue = confirmPassword.value;


    console.log(passwordValue);
    if (!terms.checked){
        window.alert("You must agree to the terms of service before submitting");
        console.log("terms not checked");
        return
    }

    if (passwordValue.length < 10 ){
        errorMessageLength.style.display = "block";
        password.style.border = " 3px solid red"
        password.focus()
        console.log("password too short");
        return
    }

    if (passwordValue !== confirmPasswordValue ){
        errorMessageMatch.style.display = "block";
        confirmPassword.style.border = " 3px solid red"
        confirmPassword.focus()
        console.log("passwords don't match");
        return
    }

    event.preventDefault();
    window.alert("Success!");
    errorMessageLength.style.display = "none"
    errorMessageMatch.style.display = "none"
    return

})