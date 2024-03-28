let cards = JSON.parse(localStorage.getItem("cards"));
let template = document.querySelector("#card-template");
let cardList = document.querySelector("#card-list");

for (let i = 0; i < cards.length; i++) {
    let card = cards[i];

    let cardView = template.content.cloneNode(true);
    
    let titleText = cardView.querySelector(".title-text");
    let subtitleText = cardView.querySelector(".subtitle-text");
    let toText = cardView.querySelector(".to-text");
    let messageText = cardView.querySelector(".message-text");
    let fromText = cardView.querySelector(".from-text");
    
    titleText.textContent = card.title;
    subtitleText.textContent = card.subtitle;
    toText.textContent = card.to;
    messageText.textContent = card.message;
    fromText.textContent = card.from;
    
    let deleteBtn = cardView.querySelector(".delete-btn");
    deleteBtn.addEventListener("click", function() {
        cards.splice(i, 1);
        localStorage.setItem("cards", JSON.stringify(cards));
        location.reload()
    });
    
    cardList.appendChild(cardView);
}
