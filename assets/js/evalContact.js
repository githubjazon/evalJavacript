document.getElementById("form1").addEventListener("submit", function(e) {

    var erreur;
    var nom = document.getElementById("nom");
    var prenom = document.getElementById("prenom");
var masculin = document.getElementById("masculin");
var feminin = document.getElementById("feminin");
    var cp = document.getElementById("cp");
    var mail = document.getElementById("mail");
    var sujet = document.getElementById("sujet");
    var question = document.getElementById("question");
    

    if (!question.value) {
        erreur = "Veuillez renseigner une question";
    }

    if (sujet) {
        erreur = "Veuillez renseigner un sujet";
    }

    if (!mail.value) {
        erreur = "Veuillez renseigner un mail";
    }

    if (!cp.value) {
        erreur = "Veuillez renseigner un cp";
    }
 
if (masculin.checked==true){
    erreur = "masc";
    }
    else if (feminin.checked==true) {
        erreur = "femi";
    }



    if (!prenom.value) {
        erreur = "Veuillez renseigner un prenom";
    }

    if (!nom.value) {
        erreur = "Veuillez renseigner un nom";
    }
  
   
    if (erreur) {
        e.preventDefault();
        document.getElementById("erreur").innerHTML = erreur;
        return false;
    } else {
        alert('formulaire envoyé !');
    }
});
