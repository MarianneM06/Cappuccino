let drinkName = document.getElementById("drinkName");
let quantity = document.getElementById("quantity");
let purchasePriceHT = document.getElementById("purchasePriceHT");
let marginHT = document.getElementById("marginHT");
let sellingPriceHT = document.getElementById("sellingPriceHT");
let sellingPriceTTC;
let category = document.getElementById("category");
let alcoholLevels = document.getElementById("alcoholLevels");
let tableContainer = document.querySelector(".tableContainer"); 

let submitButton = document.querySelector(".submitButton"); 
let detailsButton = document.querySelector(".detailsButton"); 

let listproducts;

function stopVideoAfterFirstPlay() {
    let logoClip = document.querySelector(".logoClip");
    video.removeEventListener("ended", stopVideoAfterFirstPlay);
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

    let inputTVA = document.querySelector(".inputTVA");
    let normalTVA = document.querySelector(".normalTVA");
    let intermediateTVA = document.querySelector(".intermediateTVA");
    let reducedTVA = document.querySelector(".reducedTVA"); 
    let veryReducedTVA = document.querySelector(".veryReducedTVA");
   
    let product = {
        drinkname: drinkName.value,
        quantity: Math.max(0, quantity.value),
        purchasePriceHT: purchasePriceHT.value,
        marginHT: sellingPriceHT.value - purchasePriceHT.value,
        sellingPriceHT: sellingPriceHT.value,
        category: category.value,
        alcoholLevels: alcoholLevels.value,
    }

    listproducts.push(product);

    localStorage.setItem("listproducts", JSON.stringify(listproducts)); 
    renderContact(listproducts);
});



function renderContact(array) {
    let groupedProducts = array.reduce((accumulator, product) => {
        let drinkName = product.drinkname;
        let quantity = parseInt(product.quantity, 10);

        let existingProductIndex = accumulator.findIndex(p => p.drinkname === drinkName);

        if (existingProductIndex !== -1) {
            accumulator[existingProductIndex].quantity += quantity; 
        } else {
            accumulator.push({ ...product });
        }

        return accumulator;
    }, []);

    let tableRows = "";
    groupedProducts.forEach(function (product, index) {
        tableRows += `<tr>
        <td>${product.drinkname}</td>
        <td>${product.quantity}</td>
        <td>${product.purchasePrice}</td>
        <td>${product.marginHT}</td> 
        <td>${product.sellingPrice}</td> 
        <td>${product.category}</td> 
        <td>${product.alcoholLevels}</td>
        <td><button class="deleteButton" data-index="${index}">Supprimer</button></td>
        <td><button class="changeButton" data-index="${index}">Modifier</button></td>
        </tr>`;
    });

    let tableHeader = `<tr>
        <th>Marque</th>
        <th>Quantité</th>
        <th>Prix d'achat</th>
        <th>Marge HT</th>
        <th>Prix de vente HT</th>
        <th>Prix de vente TTC</th>
        <th>Catégorie</th>
        <th>Degrés d'alcool</th>
        <th>Suppréssion</th>
        <th>Modification</th>

    </tr>`;

    let tableContent = `<table>${tableHeader}${tableRows}</table>`;

    tableContainer.innerHTML = tableContent;

    let deleteButtonArray = document.querySelectorAll(".deleteButton");
    deleteButtonArray.forEach(function(deleteButton) {
        deleteButton.addEventListener("click", function () {
            let index = parseInt(deleteButton.dataset.index);
            listproducts.splice(index, 1);
            localStorage.setItem("listproducts", JSON.stringify(listproducts));
            renderContact(listproducts);
        });
    });

    let changeButton = document.querySelectorAll(".changeButton");
    changeButton.forEach(function(changeButton) {
        changeButton.addEventListener("click", function () {

        })
    })
}



