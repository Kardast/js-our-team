const memberCards = [

    {
        "Nome" : "Wayne Barnett",
        "Ruolo" : "Founder Ceo",
        "Foto" : "./img/wayne-barnett-founder-ceo.jpg"
    },
    {
        "Nome" : "Angela Caroll",
        "Ruolo" : "Chief Editor",
        "Foto" : "./img/angela-caroll-chief-editor.jpg"
    },
    {
        "Nome" : "Walter Gordon",
        "Ruolo" : "Office Manager",
        "Foto" : "./img/walter-gordon-office-manager.jpg"
    },
    {
        "Nome" : "Angela Lopez",
        "Ruolo" : "Social Media Manager",
        "Foto" : "./img/angela-lopez-social-media-manager.jpg"
    },
    {
        "Nome" : "Scott Estrada",
        "Ruolo" : "Developer",
        "Foto" : "./img/scott-estrada-developer.jpg"
    },
    {
        "Nome" : "Barbara Ramos",
        "Ruolo" : "Graphic Designer",
        "Foto" : "./img/barbara-ramos-graphic-designer.jpg"
    },
]

console.log(memberCards);

let printCard = document.querySelector(".team-container");
console.log(printCard);

let divCard = document.createElement("div");
divCard.classList.add("team-card");
printCard.append(divCard);

let divImage = document.createElement("div");
divImage.classList.add("card-image");
divCard.append(divImage);

let imgTag = document.createElement("img");
imgTag.src = "img/wayne-barnett-founder-ceo.jpg";
imgTag.alt = "Wayne Barnett";
divImage.append(imgTag);

let divText = document.createElement("div");
divText.classList.add("card-text");
divCard.append(divText);

let h3Tag = document.createElement("h3");
divText.append(h3Tag);
let h3Text = document.createTextNode("prova");
h3Tag.append(h3Text);

let pTag = document.createElement("p");
divText.append(pTag);
let pText = document.createTextNode("prova2");
pTag.append(pText);


