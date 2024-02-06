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



if (JSON.parse(localStorage.getItem("listproducts"))) {
    listproducts = JSON.parse(localStorage.getItem("listproducts"));
    renderContact(listproducts);
} else {
    listproducts = [];
}

submitButton.addEventListener("click", function (event) {
    event.preventDefault();

    

    let inputTVA = document.querySelector(".inputTVA");

    // Fonction pour calculer le prix de vente TTC
    function calculateSellingPriceTTC(product) {
        let tvaPercentage;

        switch (inputTVA.value) {
            case "Taux normal : 20 %":
                tvaPercentage = 0.20;
                break;
            case "Taux intermédiaire : 10 %":
                tvaPercentage = 0.10;
                break;
            case "Taux réduit : 5.5 %":
                tvaPercentage = 0.055;
                break;
            case "Taux très réduit : 2.1 %":
                tvaPercentage = 0.021;
                break;
            default:
                tvaPercentage = 0; 
        }

        
        product.sellingPriceTTC = parseFloat(product.sellingPriceHT) + (parseFloat(product.sellingPriceHT) * tvaPercentage);

        return product;
    }

    let product = {
        drinkname: drinkName.value,
        quantity: Math.max(0, quantity.value),
        purchasePriceHT: purchasePriceHT.value,
        marginHT: parseFloat(sellingPriceHT.value) - parseFloat(purchasePriceHT.value),
        sellingPriceHT: sellingPriceHT.value,
        category: category.value,
        alcoholLevelsContainer: alcoholLevelsContainer.value,
    };

   
    product = calculateSellingPriceTTC(product);

    
    listproducts.push(product);

    
    localStorage.setItem("listproducts", JSON.stringify(listproducts));

   
    renderContact(listproducts);
});

document.getElementById("category").addEventListener("change", function() {
    var alcoholLevelsContainer = document.getElementById("alcoholLevelsContainer");
    var selectedCategory = this.value;
    if (selectedCategory === "Alcool") {
        alcoholLevelsContainer.style.display = "block";
    } else {
        alcoholLevelsContainer.style.display = "none";
    }
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
        
        let quantityColor = parseInt(product.quantity) <= 10 ? "red" : "green";

        tableRows += `<tr>
        <td>${product.drinkname}</td>
        <td class="quantityColor" style="background-color: ${quantityColor}">${product.quantity}</td>
        <td>${product.purchasePriceHT}</td>
        <td>${product.marginHT}</td> 
        <td>${product.sellingPriceHT}</td>
        <td>${product.sellingPriceTTC}</td>
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
    
}



