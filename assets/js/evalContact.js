
var validation = document.getElementById("boutonEnvoyer");
var prenom = document.getElementById("prenom");
var prenomM = document.getElementById("prenomManquant");
validation.addEventListener('click', fValid);

function fValid(e){
if (prenom.validity.valueMissing) {
    e.preventDefault();
    prenomM.textContent = "Prénom manquant";
    
}
}


