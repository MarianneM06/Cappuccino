let drinkname = document.querySelector("#drinkName");
let quantity = document.getElementById("quantity");
let purchasePrice = document.getElementById("purchasePrice");
let marginHT = document.getElementById("marginHT");
let sellingPrice = document.getElementById("sellingPrice");
let category = document.getElementById("category");
let alcoholLevels = document.getElementById("alcoholLevels");
let labelalcoholLvl = document.getElementById("labelalcoholLvl");
let listproduct;
let submitButton = document.querySelector(".submitButton");

// si la liste de produit existe alors on l'affiche sur le local storage
if (JSON.parse(localStorage.getItem("listproduct"))) {
    listproduct = JSON.parse(localStorage.getItem("listproduct"));
} else {
   listproduct = [];
}

// on cache le selecteur degré d'alcool 
displayAlcoolLvl();

// Creation de l'evenement click sur boutton du form 
submitButton.addEventListener("click", (event) => {
    // on empeche de recharger la page
    event.preventDefault()

    // on ajoute a info prduit (InfoProduct) les valeurs récupérées du form
    let infoProduct = new InfoProduct(drinkname.value, quantity.value, purchasePrice.value, marginHT.value, sellingPrice.value, category.value, alcoholLevels.value);
    // on appelle la fonction InfoProduct dans notre evenement "click" avec les valeurs récupérées de la varible (let infoProduct)
    InfoProduct(drinkname, quantity, purchasePrice, marginHT, sellingPrice, category);
    
    // alert si valeur inferieur à 0  
    if(quantity.value < 0 || purchasePrice.value < 0 || marginHT.value < 0 || sellingPrice.value < 0 ) {
        alert("Vous devez saisir un nombre supérieur à 0")
    } else {
        listproduct.push(infoProduct);
        // on l'ajoute dans le tableau listProduct
        localStorage.setItem("listproduct", JSON.stringify(listproduct));
    }
    
     // on affiche le selecteur du degré d'alcool
    displayAlcoolLvl();
    
});

// Creation fonction constructeur info produits
function InfoProduct(drinkname, quantity, purchasePrice, marginHT, sellingPrice, category, alcoholLevels) {
    this.nom = drinkname;
    this.quantite = quantity;
    this.prixAchat = purchasePrice;
    this.marginHt = marginHT;
    this.prixDevente = sellingPrice;
    this.categorie = category;
    this.alcoholLvl = alcoholLevels;
};

// creation de la fonction pour afficher le degré d'alcool si c'est une boisson alcoolisée
function displayAlcoolLvl() {
    
    if(category.value != "Alcool") {
        alcoholLevels.style.display = "none";
        labelalcoholLvl.style.display = "none";
    } else if(category.value === "Alcool") {
        alcoholLevels.style.display = "block"
        labelalcoholLvl.style.display = "block";
        labelalcoholLvl.style.textAlign = "center";
    }
}



