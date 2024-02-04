let drinkname = document.getElementById("drinkname");
let quantity = document.getElementById("quantity");
let purchasePrice = document.getElementById("purchasePrice");
let marginHT = document.getElementById("marginHT");
let sellingPrice = document.getElementById("sellingPrice");
let category = document.getElementById("category");
let alcoholLevels = document.getElementById("alcoholLevels");
let listproduct = [];




function grandir(a)
{
    a.addEventListener("mouseover", function()
    {
        a.style.fontSize = "20px"
        a.style.border = "solid red 8px"
    })

    a.addEventListener("mouseout", function()
    {
        a.style.fontSize = ""
        a.style.border = ""
    })
}

let fpd = document.getElementById("fpd")
let cl = document.getElementById("cl")
let ca = document.getElementById("ca")
let cs = document.getElementById("cs")
let esp = document.getElementById("esp")
let f = document.getElementById("f")
let cc = document.getElementById("cc")
let s = document.getElementById("s")
let r = document.getElementById("r")
let l = document.getElementById("l")

grandir(fpd)
grandir(cl)
grandir(ca)
grandir(cs)
grandir(esp)
grandir(f)
grandir(cc)
grandir(s)
grandir(r)
grandir(l)

let stock;
function Produit(nom, quantite, prixAchat, margeHT, prixVente, categorie, degAlcool) 
{
    
    this.nom = nom;
    quantite = stock;
    this.prixAchat = prixAchat; 
    this.prixVente = prixVente;
    margeHT = (prixVente - prixAchat) * 80 / 100;
    this.categorie = categorie;
    if(categorie = true){this.degAlcool = degAlcool;}
  
    
  }

  r = new Produit ("ricard", 22 ,27, true,45)

  





