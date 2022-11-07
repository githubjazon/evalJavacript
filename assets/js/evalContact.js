document.getElementById("form1").addEventListener("submit", function(e) {

    var erreur;
  
var codepostal = document.getElementById("cp");

    var inputs = document.getElementsByTagName("input" && "select" && "textarea");

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

    if (! codepostal.match(/([0-9]){5}/)){
        console.log(cp);
        erreur = "gfgfd";
    }
    
});

