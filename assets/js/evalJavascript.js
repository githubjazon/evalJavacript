// ______________________________1 : Calcul du nombre de jeunes, de moyens et de vieux______________FINI

 j = 0;
 a = 0;
 v = 0;
 i = 0;


 do {
    gen = prompt("Entrez votre âge");

    
    if (gen < 20 ) {
        j ++;
      }
    
    if (gen >=20 && gen <40 ) {
         a++;
      }
    
    if (gen >40) {
         v++;
      }

    if (gen >= 100 ) {
        
    }
    
 }


while(gen < 100) {
    i++;
    alert("il y a " + j + " jeunes" + ", " + a + " adultes" +  ", " + v + " vieux, dont " + i + " centenaire ");
 
}



  






// ______________________________2 : Table de multiplication_________________________________FINI


// function mult () {
// mult = 0;

// }
//  do{
//     mult=prompt("Saisissez un nomre entier");
//  }while(isNaN(mult) || mult%1!==0);
 
//  document.write("<h4>Table de multiplication du nombre: "+mult+"</h4>")
//  document.write("<table border >");

//  for( i=1;i<=10;i++){
//     document.write("<tr>");
//     document.write("<td>"+mult+" x "+i+" =</td>");
//     document.write("<td>"+mult*i+"</td>");
//     document.write("</tr>");
//  1}
//  document.write("</table>");

// ______________________________3 : recherche d'un prénom________________________________FINI 

//  var tab = ["jérémy","odd","yumi","hiroki","ulrich","aelita","william","milly","sissi","jim"];
//  var saisie = window.prompt(`Veuillez choisir un prénom parmi : ${[...tab]}.`)
//  if(tab.includes(saisie)){
//  	tab.splice(tab.indexOf(saisie),1);
//  	tab.push(" ");
//  	alert(("Il reste : ") + tab);
//  }
// else{alert("Mauvais prénom saisie")}

// ______________________________4 : total d'une commande__________________________________



// pu = (prompt("Prix unitaire : "));
// qtecom = (prompt("Quantité commandé : "));
// pap = (pu * qtecom);
// // rem = 
// // port = (2% tot);
// // tot = ( pu * qtecom);
// alert(pap);



// ____________________________ 5 : vérification d'un formulaire______(ce trouve dans evalJavascript/assets/js/evalContact)____


// a utiliser !
// toLowerCase(),
// toUpperCase(),

