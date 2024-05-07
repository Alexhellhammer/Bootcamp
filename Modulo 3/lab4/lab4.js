/**
 * Author: [Tu nombre o información de contacto]
 * Description: Script for handling user data form.
 * License: BSD 3-Clause License
 */

// Definition of variables
let email = "";
let name = "";
let lastname = "";
let phone = "";
let pass = "";
let user = {};

// Function to get user data from the form
const getUserDataForm = () => {
    email = document.getElementById("inputEmail").value;
    name = document.getElementById("inputName").value;
    lastname = document.getElementById("inputLastname").value;
    phone = document.getElementById("inputPhone").value;
    pass = document.getElementById("inputPassword").value;
};

// Function to build user data for request
const buildUserDataForRequest = () => {
    user = {
        email: email,
        name: name,
        lastname: lastname,
        phone: phone,
        pass: pass
    };
};

// Call the buildUserDataForRequest function when the form is submitted
document.getElementById("userForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    getUserDataForm(); // Get user data from the form
    buildUserDataForRequest(); // Build user data
    console.log(user); // Log the user object
});
