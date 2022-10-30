document.getElementById("form1").addEventListener("submit", function(e) {



    
    var erreur;
    var nom = document.getElementById("nom");
    var prenom = document.getElementById("prenom");
    var genre = document.getElementById("genre");
    var genre2 = document.getElementById("genre2");
    var date = document.getElementById("date");
    var cp = document.getElementById("cp");
    var adresse = document.getElementById("adresse");
    var ville = document.getElementById("ville");
    var mail = document.getElementById("mail");
    var sujet = document.getElementById("sujet");
    var question = document.getElementById("question");
    

    if (!question.value) {
        erreur = "Veuillez renseigner une question";
    }
    if (!sujet.value) {
        erreur = "Veuillez renseigner un sujet";
    }
    if (!mail.value) {
        erreur = "Veuillez renseigner un mail";
    }
    if (!ville.value) {
        erreur = "Veuillez renseigner une ville";
    }
    if (!adresse.value) {
        erreur = "Veuillez renseigner une adresse";
    }
    if (!cp.value) {
        erreur = "Veuillez renseigner un cp";
    }
    if (!date.value) {
        erreur = "Veuillez renseigner une date";
    }
    if (!genre2.value) {
        erreur = "Veuillez renseigner un genre";
    }
    if (!genre.value) {
        erreur = "Veuillez renseigner un genre";
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

  
    document.getElementById("reset").location.reload();
  

       



});
