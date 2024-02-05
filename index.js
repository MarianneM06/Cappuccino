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
let childContainer = document.querySelector(".childContainer");
let stockJus = document.querySelector(".stockJus");
let stockEau = document.querySelector(".stockEau");



// creation du bouton supprimer
let deleteButton = document.createElement("button");
let supprimer = document.querySelector(".supprimer");

// creation de la fonction bouton supprimer 
function editTask(deleteButton) {
        supprimer.innerHTML = "SUPPRIMER"
        supprimer.appendChild(deleteButton);
    
}


// si la liste de produit existe alors on l'affiche sur le local storage
if (JSON.parse(localStorage.getItem("listproduct"))) {
    listproduct = JSON.parse(localStorage.getItem("listproduct"));
    
} else {
   listproduct = [];
}




// function qui affiche la valeur du local storage dans le tableau HTML
function addRaw() {
    

    
        const table = document.getElementsByTagName("table")[0];
        const newRow = table.insertRow(1);
        
        let cel1 = newRow.insertCell (0);
        let cel2 = newRow.insertCell (1);
        let cel3 = newRow.insertCell (2);
        let cel4 = newRow.insertCell (3);
        let cel5 = newRow.insertCell (4);
        let cel6 = newRow.insertCell (5);
        let cel7 = newRow.insertCell (6);

        cel1.innerHTML = `${drinkname.value}`;
        cel2.innerHTML = `${quantity.value}`;
        cel3.innerHTML = `${purchasePrice.value}`;
        cel4.innerHTML = `${marginHT.value}`;
        cel5.innerHTML = `${sellingPrice.value}`;
        cel6.innerHTML = `${category.value}`;
        cel7.innerHTML = `${alcoholLevels.value}`;
    
}



// on cache le selecteur degré d'alcool 
displayAlcoolLvl();

// Creation de l'evenement click sur boutton du form 
submitButton.addEventListener("click", (event) => {
    // on empeche de recharger la page
    event.preventDefault()

    // on ajoute a info prduit (InfoProduct) les valeurs récupérées du form
    const infoProduct = new InfoProduct(drinkname.value, quantity.value, purchasePrice.value, marginHT.value, sellingPrice.value, category.value, alcoholLevels.value);
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

    addRaw();

    
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



// On récupere les elements html de la nav 
let titleJus = document.querySelector(".titleJus");
let titleEau = document.querySelector(".titleEau");
let titleRose = document.querySelector(".titleRose");
let titleCafe = document.querySelector(".titleCafe");
let titleSoda = document.querySelector(".titleSoda");
let imgJus = document.getElementById("imgJus");
let imgEau = document.getElementById("imgEau");
let imgRose = document.getElementById("imgRose");
let imgCafe = document.getElementById("imgCafe");
let imgSoda = document.getElementById("imgSoda");


// MOUSEOVER et MOUSEOUT sur les img 
imgJus.addEventListener("mouseover", (event) => {
    titleJus.style.display = "block";
});

imgJus.addEventListener("mouseout", (event) => {
    titleJus.style.display = "none";
});

imgEau.addEventListener("mouseover", (event) => {
    titleEau.style.display = "block";
});

imgEau.addEventListener("mouseout", (event) => {
    titleEau.style.display = "none";
});

imgRose.addEventListener("mouseover", (event) => {
    titleRose.style.display = "block";
});

imgRose.addEventListener("mouseout", (event) => {
    titleRose.style.display = "none";
});

imgCafe.addEventListener("mouseover", (event) => {
    titleCafe.style.display = "block";
});

imgCafe.addEventListener("mouseout", (event) => {
    titleCafe.style.display = "none";
});

imgSoda.addEventListener("mouseover", (event) => {
    titleSoda.style.display = "block";
});

imgSoda.addEventListener("mouseout", (event) => {
    titleSoda.style.display = "none";
});



// on recupere les elements  html details button 
let btnJus = document.querySelector(".btnJus");
let btnEau = document.querySelector(".btnEau");
let btnRose = document.querySelector(".btnRose");
let btnCafe = document.querySelector(".btnCafe");
let btnSoda = document.querySelector(".btnSoda");

// on crée les elements qui s'afficheront au click dans le content 2


// Au click creation des infos produits dans content 2 
btnJus.addEventListener("click", () => {
    
})



function quantiteJus () {
    if(category.value === "Jus de Fruits") {
        
    }
}

