// Rappel des types de données 
let string = "chaine";
let number = 25;
let boolean = true;
let maVariable;//   typeundefined

// Tableaux
let array = ["Bordeaux", "Toulouse", "Nantes"];
//console.log(array[0][3]);

let array2 = ["Bordeaux", 24, true, [1, 2], { nom: "Denis" }];
//console.log(array2[4].nom);

let objet ={
    pseudo : "Denis",
    age : 33,
    technos :["Javascript", "React", "NodeJs"],
    admin : false,
    
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
};

//While
let w = 2;
while (w < 15) {
    w++;
    //console.log(" la valeur de w est de : " + w);
}

//Do while
let d = 0
do {
    d++;
    //console.log(d);
} while (d < 5);

// Les boucles for
for (const user of data) {
    //document.body.innerHTML += `<li>${user.pseudo} - ${user.age} ans </li>`;
};

// On déclare la valeur de i / jusqu'oû on boucle / on incrémente i si la condition 2 n'est pas remplie.

for (i = 0; i < data.length; i++) {
    //console.log(i);
    //console.log(data[i].technos[2]);
    //document.body.innerHTML += "<h2>" + data[i].technos.join (" / ") + "</h2>";
};
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
            null
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

// let newArray = array3.concat(array4);
// console.log(newArray);

// let newArray = [...array3, ...array4];
// console.log(newArray);

console.log(array3.join("-"));