let cards = JSON.parse(localStorage.getItem("cards"));
let template = document.querySelector("#card-template");
let cardList = document.querySelector("#card-list");

for (let i = 0; i < cards.length; i++) {
    let card = cards[i];
    console.log(card);

    let cardView = template.content.cloneNode(true);
    cardList.appendChild(cardView);
    
    let titleText = cardList.querySelector(".title-text");
    let subtitleText = cardList.querySelector(".subtitle-text");
    let toText = cardList.querySelector(".to-text");
    let messageText = cardList.querySelector(".title-text");
    let fromText = cardList.querySelector(".from-text");
    
    titleText.textContent = card.title;
    subtitleText.textContent = card.subtitle;
    toText.textContent = card.to;
    messageText.textContent = card.message;
    fromText.textContent = card.from;
    
    // TODO rest of text spans
    let deleteBtn = cardView.querySelector(".delete-btn");
    deleteBtn.addEventListener("click", function() {
        localStorage.removeItem(card);
    });
}
