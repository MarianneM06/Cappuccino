let drinkName = document.getElementById("drinkName");
let quantity = document.getElementById("quantity");
let purchasePrice = document.getElementById("purchasePrice");
let marginHT = document.getElementById("marginHT");
let sellingPrice = document.getElementById("sellingPrice");
let category = document.getElementById("category");
let alcoholLevels = document.getElementById("alcoholLevels");
let tableContainer = document.querySelector(".tableContainer"); // Utilisation du point pour sélectionner une classe

let submitButton = document.querySelector(".submitButton"); // Utilisation du point pour sélectionner une classe
let detailsButton = document.querySelector(".detailsButton"); // Utilisation du point pour sélectionner une classe

let listproducts;

function stopVideoAfterFirstPlay() {
    let logoClip = document.querySelector(".logoClip");
    video.removeEventListener("ended", stopVideoAfterFirstPlay); // Correction de la coquille ici
    video.pause();
}

if (JSON.parse(localStorage.getItem("listproducts"))) {
    listproducts = JSON.parse(localStorage.getItem("listproducts"));
    renderContact(listproducts);
} else {
    listproducts = [];
}

submitButton.addEventListener("click", function (event) {
    event.preventDefault();



    let product = {
        drinkname: drinkName.value,
        quantity: Math.max(0, quantity.value),
        purchasePrice: purchasePrice.value,
        marginHT: marginHT.value,
        sellingPrice: sellingPrice.value,
        category: category.value,
        alcoholLevels: alcoholLevels.value,
    }

    listproducts.push(product);

    localStorage.setItem("listproducts", JSON.stringify(listproducts)); 
    renderContact(listproducts);
});

function renderContact(array) {
    let tr = "";
    array.forEach(function (product, index) {
        tr = tr + `<td> ${product.drinkname} ${product.quantity} ${product.purchasePrice} € ${product.marginHT} € ${product.sellingPrice} € ${product.category} ${product.alcoholLevels} <button class="deleteButton">Supprimer</button></tr>`
        
    });
    tableContainer.innerHTML = tr;

    let deleteButtonArray = document.querySelectorAll(".deleteButton");
    deleteButtonArray.forEach(function(deleteButton, index) {
        deleteButton.addEventListener("click", function () {
            listproducts.splice(index, 1)
            localStorage.setItem("listproduct", JSON.stringify(listproducts));
            renderContact(listproducts);
        })
    })
}

function calculateMarginHT(purchasePrice, sellingPrice) {
   
    purchasePrice = parseFloat(purchasePrice);
    sellingPrice = parseFloat(sellingPrice);

    return (sellingPrice - purchasePrice).toFixed(2);
}



