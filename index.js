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



// si la liste de produit existe alors on l'affiche sur le local storage
if (JSON.parse(localStorage.getItem("listproduct"))) {
    listproduct = JSON.parse(localStorage.getItem("listproduct"));
    
} else {
   listproduct = [];
}

function deleteRaw() {
   
        deleteButton.addEventListener("click", () => {

            if (window.confirm("Voulez vous supprimer cet article du stock ?")) {
                
            }

            })
    
}

// function qui affiche la valeur du local storage dans le tableau HTML
function addRaw() {

        
    
        deleteButton.innerText = "Supprimer"
        deleteButton.style.width = "100%"

    
        const table = document.getElementsByTagName("table")[0];
        const newRow = table.insertRow(1);
        
        let cel1 = newRow.insertCell (0);
        let cel2 = newRow.insertCell (1);
        let cel3 = newRow.insertCell (2);
        let cel4 = newRow.insertCell (3);
        let cel5 = newRow.insertCell (4);
        let cel6 = newRow.insertCell (5);
        let cel7 = newRow.insertCell (6);
        let cel8 = newRow.insertCell (7);

        cel1.innerHTML = `${drinkname.value}`;
        cel2.innerHTML = `${quantity.value}`;
        cel3.innerHTML = `${purchasePrice.value}`;
        cel4.innerHTML = `${marginHT.value}`;
        cel5.innerHTML = `${sellingPrice.value}`;
        cel6.innerHTML = `${category.value}`;
        cel7.innerHTML = `${alcoholLevels.value}`;
        
        cel8.appendChild(deleteButton);
        deleteRaw();
    
    
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
let petitdejeuner = document.querySelector(".petitdejeuner");
let expresso = document.querySelector(".expresso");
let caffeLatte = document.querySelector(".caffeLatte");
let Eau = document.querySelector(".Eau");
let Fanta = document.querySelector(".Fanta");
let Cocacola = document.querySelector(".Cocacola");
let Ricard = document.querySelector(".Ricard");
let Limoncello = document.querySelector(".Limoncello");
let Bacardi = document.querySelector(".Bacardi");




let imgPetitDej = document.getElementById("imgPetitDej");
let imgExpresso = document.getElementById("imgExpresso");
let imgcaffeLatte = document.getElementById("imgcaffeLatte");
let imgEau = document.getElementById("imgEau");
let imgFanta = document.getElementById("imgFanta");
let imgCocacola = document.getElementById("imgCocacola");
let imgRicard = document.getElementById("imgRicard");
let imgLimoncello = document.getElementById("imgLimoncello");
let imgBacardi = document.getElementById("imgBacardi");





// MOUSEOVER et MOUSEOUT sur les img 
imgPetitDej.addEventListener("mouseover", (event) => {
    petitdejeuner.style.display = "block";
});

imgPetitDej.addEventListener("mouseout", (event) => {
    petitdejeuner.style.display = "none";
});
//**************** expresso *********/
imgexpresso.addEventListener("mouseover", (event) => {
expresso.style.display = "block";
});
imgexpresso.addEventListener("mouseout",(event) => {
    expresso.style.display = "none";

});
//*************caffeLatte**********/
imgcaffeLatte.addEventListener("mouseover", (event) => {
    caffeLatte.style.display = "block";
    });
    imgcaffeLatte.addEventListener("mouseout",(event) => {
        caffeLatte.style.display = "none";
    
    });
//************** eau ****************/
imgEau.addEventListener("mouseover", (event) => {
    Eau.style.display = "block";
    });
    imgEau.addEventListener("mouseout",(event) => {
        Eau.style.display = "none";
    
    });
    //************ Fanta ****************/
    imgFanta.addEventListener("mouseover", (event) => {
        Fanta.style.display = "block";
        });
        imgFanta.addEventListener("mouseout",(event) => {
            Fanta.style.display = "none";
        
        });

    //************ Coca cola *************/
    imgCocacola.addEventListener("mouseover", (event) => {
        Cocacola.style.display = "block";
        });
        imgCocacola.addEventListener("mouseout",(event) => {
            Cocacola.style.display = "none";
        
        });
//**************** Ricard *************************/
imgRicard.addEventListener("mouseover", (event) => {
    Ricard.style.display = "block";
    });
    imgRicard.addEventListener("mouseout",(event) => {
        Ricard.style.display = "none";
    
    });

//***************** Limoncello *********************/
imgLimoncello.addEventListener("mouseover", (event) => {
    Limoncello.style.display = "block";
    });
    imgLimoncello.addEventListener("mouseout",(event) => {
        Limoncello.style.display = "none";
    
    });

//***************** Bacardi ************************/
imgBacardi.addEventListener("mouseover", (event) => {
    Bacardi.style.display = "block";
    });
    imgBacardi.addEventListener("mouseout",(event) => {
        Bacardi.style.display = "none";
    
    });








// on recupere les elements  html details button 
let btnPetitDej = document.querySelector(".btnPetitDEj");
let btnexpresso = document.querySelector(".btnexpresso");
let btncaffeLatte = document.querySelector(".btncaffeLatte");
let btnEau = document.querySelector(".btnEau");
let btnFanta = document.querySelector(".btnFanta");
let btnCocacola = document.querySelector(".btnCocacola");


 

btnPetitDej.addEventListener("click", (event) =>
{
    rawPetitDej()
});
btnexpresso.addEventListener("click",(event)=>
{
    rawExpresso ()
}
)
btncaffeLatte.addEventListener("click",(event)=>
{
    rawcaffeLatte ()
}
)
btnFanta.addEventListener("click",(event)=>
{
    rawFanta ()
}
)

btnCocacola.addEventListener("click",(event)=>
{
    rawCocacola ()
}
)

btnRicard.addEventListener("click",(event)=>
{
    rawRicard ()
}
)
btnLimoncello.addEventListener("click",(event)=>
{
    rawLimoncello ()
}
)
btnBacardi.addEventListener("click",(event)=>
{
    rawBacardi ()
}
)




//parte che si occupa ddel bottone dettaille
function rawPetitDej() {

        
    
    deleteButton.innerText = "Supprimer"
    deleteButton.style.width = "100%"


    const table = document.getElementsByTagName("table")[0];
    const newRow = table.insertRow(1);
    
    let cel1 = newRow.insertCell (0);
    let cel2 = newRow.insertCell (1);
    let cel3 = newRow.insertCell (2);
    let cel4 = newRow.insertCell (3);
    let cel5 = newRow.insertCell (4);
    let cel6 = newRow.insertCell (5);
    let cel7 = newRow.insertCell (6);
    let cel8 = newRow.insertCell (7);

    cel1.innerHTML = "petit dejeuner";
    cel2.innerHTML = "textQuantite";
    cel3.innerHTML = "5€";
    cel4.innerHTML = "1$";
    cel5.innerHTML = "9$";
    cel6.innerHTML = "non alcol";
    cel7.innerHTML = "0";
    
    cel8.appendChild(deleteButton);
    deleteRaw();
}


//**********************  ******  parte del caffe ******  **********************************************//


btnexpresso.addEventListener("click", (event) =>
{
    rawExpresso()
});



function rawExpresso() {

        
    
    deleteButton.innerText = "Supprimer"
    deleteButton.style.width = "100%"


    const table = document.getElementsByTagName("table")[0];
    const newRow = table.insertRow(1);
    
    let cel1 = newRow.insertCell (0);
    let cel2 = newRow.insertCell (1);
    let cel3 = newRow.insertCell (2);
    let cel4 = newRow.insertCell (3);
    let cel5 = newRow.insertCell (4);
    let cel6 = newRow.insertCell (5);
    let cel7 = newRow.insertCell (6);
    let cel8 = newRow.insertCell (7);

    cel1.innerHTML = "petit dejeuner";
    cel2.innerHTML = "un capellino";
    cel3.innerHTML = "5$";
    cel4.innerHTML = "1$";
    cel5.innerHTML = "9$";
    cel6.innerHTML = "non alcol";
    cel7.innerHTML = "0";
    
    cel8.appendChild(deleteButton);
    deleteRaw();


}




