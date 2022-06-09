// pour mettre les programmes commun à toute les pages 
// comme l'icon au dessus de panier

let productsTab = [];
let quantityInBag = 0;

export function addIconBag() {
    countQuantityInBag();// faire le compte
    createIcon();
}

function countQuantityInBag(){
    getTabOfProduct(); // recuperer le tableau
    count();//compter le total du tableau
}

function getTabOfProduct(){
    if (localStorage.kanapProduct !== undefined){
       productsTab = JSON.parse(localStorage.kanapProduct); 
    }
}

function count(){
    quantityInBag = 0;
    for (let product of productsTab){
        for (let element in product){
            if (element != "id"){
                quantityInBag += product[element];
            }
        }
    }
}

function createIcon(){
    let iconTag = document.getElementById("bag__icon");
    if(productsTab.length > 0){
        if (iconTag === null){
            const icon = document.createElement('div');
            icon.id = "bag__icon";
            icon.style =
            `position : absolute;
            display : flex;
            justify-content : center;
            align-item :center;
            width : 25px;
            height : 25px;
            top : 30px;
            right : -20px;
            border-radius : 50%;
            color : white;
            line-height : 25px;
            background-color : #3498DB; 
            `;
            iconTag = icon;
            const bagTag = document.getElementById('bag');
            bagTag.style = `position : relative`;
            bagTag.appendChild(iconTag);
        }
        iconTag.innerText = quantityInBag;
    } else {
        iconTag.remove();
    }
}

addIconBag();
export {quantityInBag};