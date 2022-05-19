const memberCards = [

    {
        "nome" : "Wayne Barnett",
        "ruolo" : "Founder Ceo",
        "foto" : "img/wayne-barnett-founder-ceo.jpg"
    },
    {
        "nome" : "Angela Caroll",
        "ruolo" : "Chief Editor",
        "foto" : "img/angela-caroll-chief-editor.jpg"
    },
    {
        "nome" : "Walter Gordon",
        "ruolo" : "Office Manager",
        "foto" : "img/walter-gordon-office-manager.jpg"
    },
    {
        "nome" : "Angela Lopez",
        "ruolo" : "Social Media Manager",
        "foto" : "img/angela-lopez-social-media-manager.jpg"
    },
    {
        "nome" : "Scott Estrada",
        "ruolo" : "Developer",
        "foto" : "img/scott-estrada-developer.jpg"
    },
    {
        "nome" : "Barbara Ramos",
        "ruolo" : "Graphic Designer",
        "foto" : "img/barbara-ramos-graphic-designer.jpg"
    }
];
// console.log(memberCards[2].nome);

let printCard = document.querySelector(".team-container");
// console.log(printCard);

for (let i = 0; i < memberCards.length; i++) {

    let divCard = document.createElement("div");
    divCard.classList.add("team-card");
    printCard.append(divCard);
    
    let divImage = document.createElement("div");
    divImage.classList.add("card-image");
    divCard.append(divImage);
    
    let imgTag = document.createElement("img");
    imgTag.setAttribute("src", memberCards[i].foto);
    imgTag.setAttribute("alt", memberCards[i].nome);
        // Alternativa
    // imgTag.src = memberCards[i].foto;
    // imgTag.alt = memberCards[i].nome;
    divImage.append(imgTag);
    
    let divText = document.createElement("div");
    divText.classList.add("card-text");
    divCard.append(divText);
    
    let h3Tag = document.createElement("h3");
    divText.append(h3Tag);
    let h3Text = memberCards[i].nome;
        // Alternativa
    // let h3Text = document.createTextNode(memberCards[i].nome);
    h3Tag.append(h3Text);
    
    let pTag = document.createElement("p");
    divText.append(pTag);
    let pText = memberCards[i].ruolo;
        // Alternativa
    // let pText = document.createTextNode(memberCards[i].ruolo);
    pTag.append(pText);
}

