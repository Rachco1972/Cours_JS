// Rappel des types de données
let string = "chaine";
let number = 25;
let boolean = true;
let maVariable; //   typeundefined

// Tableaux
let array = ["Bordeaux", "Toulouse", "Nantes"];
//console.log(array[0][3]);

let array2 = ["Bordeaux", 24, true, [1, 2], { nom: "Denis" }];
//console.log(array2[4].nom);

let objet = {
  pseudo: "Denis",
  age: 33,
  technos: ["Javascript", "React", "NodeJs"],
  admin: false,
};
//objet.adress = "22 av. de Gaulle";
//console.log(objet);

let data = [
  {
    pseudo: "Denis",
    age: 33,
    technos: ["Javascript", "React", "NodeJs"],
    admin: false,
  },
  {
    pseudo: "Samia",
    age: 24,
    technos: ["Css", "React", "NodeJs"],
    admin: false,
  },
  {
    pseudo: "Nikola",
    age: 40,
    technos: ["Php", "React", "NodeJs"],
    admin: true,
  },
];
//console.log(data[2]);

//----------------------------------------------
//Les structuresde controle
if (data[0].age > data[1].age) {
  //console.log(data[0].pseudo + " est plus agé que " + data[1].pseudo);
} else {
  //console.log("false");
}

//While
let w = 2;
while (w < 15) {
  w++;
  //console.log(" la valeur de w est de : " + w);
}

//Do while
let d = 0;
do {
  d++;
  //console.log(d);
} while (d < 5);

// Les boucles for
for (const user of data) {
  //document.body.innerHTML += `<li>${user.pseudo} - ${user.age} ans </li>`;
}

// On déclare la valeur de i / jusqu'oû on boucle / on incrémente i si la condition 2 n'est pas remplie.

for (i = 0; i < data.length; i++) {
  //console.log(i);
  //console.log(data[i].technos[2]);
  //document.body.innerHTML += "<h2>" + data[i].technos.join (" / ") + "</h2>";
}
//Switch
document.body.addEventListener("click", (e) => {
  switch (e.target.id) {
    case "javascript":
      document.body.style.background = "yellow";
      break;
    case "php":
      document.body.style.background = "violet";
      break;
    case "python":
      document.body.style.background = "blue";
      break;
    default:
      null;
  }
});

// Méthodes de string
let string2 = "Javascript est un langage orienté objet";

//console.log(typeof "42");
//console.log(eval(parseInt("1")+("2")));
//console.log(isNaN(string));
//console.log(string2.length);
//console.log(string2[string2.length - 3]);

//console.log((string2.indexOf("langage")));
//console.log((string2.indexOf("x"))); //retourne -1 s' il ne connait pas

//let nexString = string2.slice(20);
//let newString = string2.slice(5, 17);
//console.log(newString);

//console.log(string2.split(" "));
//console.log(string2.toLowerCase());
//console.log(string2.toUpperCase());

//console.log(string2.replace("Javascript","PHP"));

//--------------------------------------------
// Méthodes Numbers
//---------------------------------------------
// let number2 = 42.1234;
// let numberString = "42.12 est un chiffre";

// console.log(number2.toFixed(1));
// console.log(parseInt("43"));
// console.log(parseInt(numberString));
// console.log(parseFloat(numberString));

//Math
// console.log(Math.PI);
// console.log(Math.round(4.5));
// console.log(Math.floor(4.9));
// console.log(Math.ceil(4.1));
// console.log(Math.pow(2, 7));
// // console.log(Math.sqrt(16));

// -----------------------------------------
//Méthodes Array

let array3 = ["Javascript", "Php", "Python"];
let array4 = ["Ruby", "Solidity"];

//let newArray = array3.concat(array4);
// console.log(newArray);

// let newArray = [...array3, ...array4];
// console.log(newArray);

//console.log(array3.join("-"));

//console.log(array3.slice(1));//tu enléves l'élément 1 du tableau
//console.log(newArray.slice(2,5));//supprime les 2 premiers et garde ce qui suit

//console.log(array3.indexOf("Python"));//recherche emplacement de l'élément dans le array
//array3.forEach((languages) => console.log(languages));liste des langages contenus dans le tableau

//console.log(array3.every((language) => language == "Php"));//le langage Php est il contenu dans tous les elements du tableau?
//console.log(array3.some((language)=> language == "Php"));//Php est il contenu au moins dans un element du tableau

//let shift = array3.shift(); //enléve le premier élément
//console.log(array3);
//console.log(array3.pop());//le dernier

//const restArray = array3.splice(1, 1, "c++");//remplace un element du tableau par c++
//const restArray = array3.splice(1, 1, ...array4);
//console.log(restArray);
//console.log(array3);

// Important

let arrayNumber = [4, 74, 28, 12, 1];
//console.log(arrayNumber.reduce((x, y) => x + y));//reduire ou additionner les élements
arrayNumber.push(17, 45); //ajouter un élément dans le tableau
//console.log(arrayNumber);

//Filter, sort , map

console.log(arrayNumber.filter((number) => number > 10));
console.log(arrayNumber.sort()); //les nombres sont triés par unité dizaine...
console.log(arrayNumber.sort((a, b) => a - b)); //classés par ordre croissant et b-a par ordre decroissant

document.body.innerHTML = arrayNumber
  .map((number) => `<li>${number}</li>`)
  .join("");

//--------------------------------------------------------------
//Méthodes Objects

document.body.innerHTML = data
    .filter((user) => user.admin === false)
    .filter((user) => user.pseudo.includes("i"))
    .sort((a , b) => b.age - a.age)
  .map(
    (user) => `<div class="user-card">
<h2>${user.pseudo}</h2>
<p>age : ${user.age} ans</p>
<p>status : ${user.admin ? "Modérateur" : "Membre"}</p> 
</div>`
  )
  .join(" ");
