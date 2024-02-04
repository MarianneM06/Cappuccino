let drinkname = document.getElementById("drinkname");
let quantity = document.getElementById("quantity");
let purchasePrice = document.getElementById("purchasePrice");
let marginHT = document.getElementById("marginHT");
let sellingPrice = document.getElementById("sellingPrice");
let category = document.getElementById("category");
let alcoholLevels = document.getElementById("alcoholLevels");

let listproducts = [];


let listSaved = JSON.parse(localStorage.getItem("listProduits"));

if (listSaved) {
    listproducts = listSaved;
} else {
    listproducts = [];
}

function stopVideoAfterFirstPlay() {
    let logoClip = document.querySelector(".logoClip");
    video.removeEvenListener(`ended`, stopVideoAfterFirstPlay);
    video.pause();
}





