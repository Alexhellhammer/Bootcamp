/**
 *     @author Alexander Pena <alexhellhammer@hotmail.com>
 *     @fileOverview This script use Fetch API & JSON
 *     @licence BSD 3-Clause License
 */


let productName = "";
let productType = "";
let quantity = "";
let price = "";
let latitude = "";
let longitude = "";
let product = {};

const getProductDataForm = () => {
    productName = document.getElementById("productName").value;
    productType = document.getElementById("productType").value;
    quantity = document.getElementById("quantity").value;
    price = document.getElementById("price").value;
    latitude = document.getElementById("latitude").value;
    longitude = document.getElementById("longitude").value;
};

const buildProductDataForRequest = () => {
    product = {
        product_name: productName,
        product_type: productType,
        quantity: quantity,
        price: price,
        latitude: latitude,
        longitude: longitude
    };

    console.log(product);
};

document.getElementById("productForm").addEventListener("submit", function(event) {
    event.preventDefault();
    getProductDataForm();
    buildProductDataForRequest();
});


let email = "";
let name = "";
let lastname = "";
let phone = "";
let pass = "";
let user = {};

const getUserDataForm = () => {
    email = document.getElementById("email").value;
    name = document.getElementById("name").value;
    lastname = document.getElementById("lastname").value;
    phone = document.getElementById("phone").value;
    pass = document.getElementById("pass").value;
};

const buildUserDataForRequest = () => {
    user = {
        email: email,
        name: name,
        lastname: lastname,
        phone: phone,
        pass: pass
    };
};

document.getElementById("userForm").addEventListener("submit", function(event) {
    event.preventDefault();
    getUserDataForm();
    buildUserDataForRequest();
    console.log(user);
});


let loginEmail = "";
let loginPass = "";
let login = {};

const getLoginDataForm = () => {
    loginEmail = document.getElementById("loginEmail").value;
    loginPass = document.getElementById("loginPass").value;
};

const buildLoginDataForRequest = () => {
    login = {
        email: loginEmail,
        pass: loginPass
    };
};

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    getLoginDataForm();
    buildLoginDataForRequest();
    console.log(login);
});
