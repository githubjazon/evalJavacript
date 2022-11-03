document.getElementById("form1").addEventListener("submit", function(e) {

    var erreur;
  
    

if (ckbx.checked == false) {
    erreur = "Veuillez cocher la case ";
}

    if (!question.value) {
        erreur = "Veuillez renseigner une question";
    }

    if (!mail.value) {
        erreur = "Veuillez saisir votre mail";
    }
    

    if (!cp.value) {
        erreur = "Veuillez saisir votre code postal";
    }

    if (!prenom.value) {
        erreur = "Veuillez siasir votre prenom";
    }

    if (!nom.value) {
        erreur = "Veuillez saisir votre nom";
    }
  
    if (erreur) {
        e.preventDefault();
        document.getElementById("erreur").innerHTML = erreur;
        return false;
    } else {
        alert('formulaire envoyé !');
    }
});

