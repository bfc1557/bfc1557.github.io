const original = document.getElementById("original");

function gerarCard(){
  
    const card = original.cloneNode(true);

    const cardContainer = document.getElementById("projetos");
    cardContainer.appendChild(card);
}

for (let i = 0; i < 20; i++){
    gerarCard()
}