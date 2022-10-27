function W3docs()  { 
    var nom = document.forms["RegForm"]["Nom"];               
    var prenom = document.forms["RegForm"]["prenom"];    
    var genre = document.forms["RegForm"]["genre"];  
    var genre2 =  document.forms["RegForm"]["genre2"];  
    var date = document.forms["RegForm"]["date"];  
    var cp = document.forms["RegForm"]["cp"];  
    var adresse = document.forms["RegForm"]["adresse"];  
    var ville = document.forms["RegForm"]["ville"];  
    var mail = document.forms["RegForm"]["mail"];  
    var sujet = document.forms["RegForm"]["sujet"];  
    var question = document.forms["RegForm"]["question"];  




    if (nom.name == "")                                  
    { 
        alert("Mettez votre nom."); 
        nom.focus(); 
        return false; 
     
    }    

    if (prenom.name == "")                                  
    { 
        alert("Mettez votre prenom."); 
        prenom.focus(); 
        return false; 
    }  

    if (cp.value == "")                               
    { 
        alert("Mettez votre code postale."); 
        cp.focus(); 
        return false; 
    }        
    if (email.value == "")                                   
    { 
        alert("Mettez une adresse email valide."); 
        email.focus(); 
        return false; 
    }    
    if (email.value.indexOf("@", 0) < 0)                 
    { 
        alert("Mettez une adresse email valide."); 
        email.focus(); 
        return false; 
    }    
    if (email.value.indexOf(".", 0) < 0)                 
    { 
        alert("Mettez une adresse email valide."); 
        email.focus(); 
        return false; 
    }    
    if (genre.value == "")                           
    { 
        alert("Mettez votre numéro de téléphone."); 
        genre.focus(); 
        return false; 
    }    
    if (date.value == "")                        
    { 
        alert("Saisissez votre mot de passe"); 
        date.focus(); 
        return false; 
    }    
    if (genre2.selectedIndex < 1)                  
    { 
        alert("Mettez votre cours."); 
        genre2.focus(); 
        return false; 
    } 
    if (adresse.value == "")                  
    { 
        alert("Écrivez un commentaire."); 
        adresse.focus(); 
        return false; 
    } 
    if (ville.value == "")                  
    { 
        alert("Écrivez un commentaire."); 
        ville.focus(); 
        return false; 
    } 
    if (mail.value == "")                  
    { 
        alert("Écrivez un commentaire."); 
        mail.focus(); 
        return false; 
    } 
    if (sujet.value == "")                  
    { 
        alert("Écrivez un commentaire."); 
        sujet.focus(); 
        return false; 
    } 
    if (question.value == "")                  
    { 
        alert("Écrivez un commentaire."); 
        question.focus(); 
        return false; 
    } 
    return true; 
}