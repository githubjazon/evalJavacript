// ______________________________1 : Calcul du nombre de jeunes, de moyens et de vieux_________________________________

// var j = 0;
// var a = 0;
// var v = 0;
// var c = (p>=100);
//  do
//  (p) = window.prompt("Entrez votre âge");
// while (p < 100);
// if (p < 20) {
//    j = 0;
//    j = +1;
// } else if ( p <= 40)
//   {
//     a = 0;
//     a = +1;
// } else if( p <=100)
//   {
//     v = 0 ;
//     v = +1 ;
//   }
// window.alert("Il y a" + " " + j + " " + "jeunes\n" + "Il y a" + " " + a + " " + "adultes\n" + "Il y a " + " " + v +  " " + "vieux\n" + "dont" +" "+ c + "centenaire");

// ______________________________2 : Table de multiplication_________________________________


a=0;
 do{
    a=prompt("Saisissez un nomre entier");
 }while(isNaN(a) || a%1!==0);
 
 document.write("<h4>La table de multiplication du nombre: "+a+"</h4>")
 document.write("<table border >");

 for( i=1;i<=10;i++){
    document.write("<tr>");
    document.write("<td>"+a+" x "+i+" =</td>");
    document.write("<td>"+a*i+"</td>");
    document.write("</tr>");
 }
 document.write("</table>");




    

// ______________________________3 : recherche d'un prénom________________________________FINI 

// var tab = ["jérémy","odd","yumi","hiroki","ulrich","aelita","william","milly","sissi","jim"];
// var saisie = window.prompt(`Veuillez choisir un prénom parmi : ${[...tab]}.`)
// if(tab.includes(saisie)){
// 	tab.splice(tab.indexOf(saisie),1);
// 	tab.push(" ");
// 	alert(("Il reste : ") + tab);
// }
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

