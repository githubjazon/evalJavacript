document.getElementById("form1").addEventListener("submit", function(e) {






    
    var erreur;
  
    var inputs = document.getElementsByTagName("input");

    if (inputs["mail"] === ("@")) {
        erreur = "Veuillez saisir un mail valide ";
    }

    for (var i = 0; i < inputs.length; i++) {
        if (!inputs[i].value) {
            erreur = "Veuillez compléter tous les champs ";
        }
    }





    if (erreur) {
        e.preventDefault();
        document.getElementById("erreur").innerHTML = erreur;
        return false;
    } else {
        alert('formulaire envoyé !');
    }
});

