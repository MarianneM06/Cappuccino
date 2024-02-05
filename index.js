let drinkname = document.getElementById(".drinkname");
let quantity = document.getElementById(".quantity");
let purchasePrice = document.getElementById(".purchasePrice");
let marginHT = document.getElementById(".marginHT");
let sellingPrice = document.getElementById(".ellingPrice");
let category = document.getElementById(".category");
let alcoholLevels = document.getElementById(".alcoholLevels");

let submitButton = document.querySelector(".submitButton");
let detailsButton = document.querySelector(".detailsButton");

let listproducts;

function stopVideoAfterFirstPlay() {
    let logoClip = document.querySelector(".logoClip");
    video.removeEvenListener(`ended`, stopVideoAfterFirstPlay);
    video.pause();
}

if (JSON.parse(localStorage.getItem("lisproducts"))) {
    contactArray = JSON.parse(localStorage.getItem("contactArray"));
    renderContact(listproducts);
} else {
    listproducts = [];
}

submitButton.addEventListener("click", function (event) {
    event.preventDefault();

    let product = {
        drinkname: drinkname.value,
        quantity: quantity.value,
        purchasePrice: purchasePrice.value,
        marginHT: marginHT.value,
        sellingPrice: sellingPrice.value,
        category: category.value,
        alcoholLevels: alcoholLevels.value,
    }

    listproducts.push(product);

    localStorage.setItem("lisproduct", JSON.stringify(listproducts));
    renderContact(listproducts);
})

function renderContact(array) {
    array.forEach(function (product, index) {
        li = li + `<li> ${product.drinkname} ${product.quantity} $`
        
    });
}



