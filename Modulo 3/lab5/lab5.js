/**
 *     @author Alexander Pena <alexhellhammer@hotmail.com>
 *     @fileOverview This script use Fetch API & JSON
 *     @licence BSD 3-Clause License
 */


let email = "";
let pass = "";
let login = {};


const getLoginDataForm = () => {
    email = document.getElementById("email").value;
    pass = document.getElementById("password").value;
};


const buildLoginDataForRequest = () => {
    login = {
        email: email,
        pass: pass
    };
    console.log(login); 
};


document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
    getLoginDataForm(); 
    buildLoginDataForRequest();
});