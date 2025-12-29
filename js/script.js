const body=document.getElementById("body");

// challenge1
function chalenge1(){

    const div=document.createElement("div");
    const nombres = [5, 12, 8, 130, 44];
    let somme = 0;
    nombres.forEach(n => {
        somme += n;
    });
    
    div.innerHTML=`SOMME= ${somme}`;
    body.appendChild(div);
}
chalenge1();

// challenge2
function challenge2(){
    const div=document.createElement("div");

    const user={skills:["html","php"]};
    user.skills.push("javascript");

    const upperCase=user.skills.map(s=> s.toUpperCase())

    div.innerHTML=`${user.skills} <br>
    ${upperCase}
    `
    body.appendChild(div);

}
challenge2();


// challenge3
function challenge3(){
const books = [
  { title: "Livre 1", author: "Auteur 1" },
  { title: "Livre 2", author: "Auteur 2" },
  { title: "Livre 3", author: "Auteur 3" }
];

const div=document.createElement("div");
const titre=books[1].title;
const titre2=books[books.length-1].title;
div.innerHTML=`${titre} <br> ${titre2}`;

body.appendChild(div);
}
challenge3();


// challenge4
function challenge4(){
const div=document.createElement("div");

const produits = [
  { nom: "Produit A", prix: 30 },
  { nom: "Produit B", prix: 60 },
  { nom: "Produit C", prix: 80 },
  { nom: "Produit D", prix: 45 }
];

const productsName=produits.filter(p=>p.prix>50).map(p=>p.nom);
// console.log(productsName);
const firstOne=produits.find(p=>p.prix>50);


div.innerHTML=`${productsName} <br> ${firstOne.nom}:${firstOne.prix}`;

body.appendChild(div);
}
challenge4();

// challenge5
function challenge5(){
const div=document.createElement("div");
const A=[];
for(let i=0;i<3;i++){
    A[i]=[];
    for(let j=0;j<3;j++){
        A[i][j]="*";
    }
}
 let display = "";
    for (let i = 0; i < 3; i++) {
        display += A[i].join(" ") + "<br>";
    }

const somme=A.flat().reduce((acc,n)=> acc+n,0 )   

div.innerHTML=`${display} <br> SOMME=${somme}`;

body.appendChild(div);
}
challenge5();


function challenge6(){
const div=document.createElement("div");
const classe = {
    nom: "noAIzone",
    etudiants: [
        {
            nom: "Safaa",
            notes: [12, 15, 18] 
        },
        {
            nom: "Hiba",
            notes: [10, 14, 16]
        }
    ]
};
const notesPremier = classe.etudiants[0].notes;

let moyenne;

if(notesPremier.length>0){
    const somme=notesPremier.reduce((acc,n)=>acc+n,0);
    moyenne=somme/notesPremier.length;
}
div.innerHTML=`${notesPremier} <br> Moyenne=${moyenne}`;

body.appendChild(div);
}
challenge6();