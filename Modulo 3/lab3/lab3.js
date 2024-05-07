/**
 *     @author Alexander Peña <alexhellhammer@hotmail.com>
 *     @fileOverview This script handles form data and builds a product object
 *     @licence BSD 3-Clause License
 */

// variables
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
   
    getProductDataForm();

   
    if (productName.length < 4) {
        alert("Ingrese al menos 4 caracteres para el nombre del producto.");
        return;
    }

    if (productType.length < 6) {
        alert("Ingrese al menos 6 caracteres para el tipo de producto.");
        return;
    }

    if (quantity < 1) {
        alert("La cantidad debe ser al menos 1.");
        return;
    }

    if (price < 0.01) {
        alert("El precio debe ser al menos 0.01.");
        return;
    }

    if (latitude.length < 6) {
        alert("Ingrese al menos 6 caracteres para la latitud.");
        return;
    }

    if (longitude.length < 6) {
        alert("Ingrese al menos 6 caracteres para la longitud.");
        return;
    }

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
    buildProductDataForRequest();
});
