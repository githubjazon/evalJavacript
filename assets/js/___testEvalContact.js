function checkForm(f) {
    alert("Vous vous appelez : " + f.elements['societe'].value + " " + f.elements['personne'].value);
    return false; // do not submit the form
}