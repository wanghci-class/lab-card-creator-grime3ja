document.getElementById("preview").addEventListener("click", function() {
    let t = document.querySelector("#title").value;
    let s = document.querySelector("#subtitle").value;
    let r = document.querySelector("#to").value;
    let m = document.querySelector("#message").value;
    let se = document.querySelector("#from").value;
    
    document.querySelector(".title-text").textContent = t;
    document.querySelector(".subtitle-text").textContent = s;

    document.querySelector(".to-text").textContent = r;
    document.querySelector(".message-text").textContent = m;
    document.querySelector(".from-text").textContent = se;
});
document.getElementById("submit").addEventListener("click", function() {
    let cards = localStorage.getItem("cards");
    if (cards === null) {
        cards = [];
    } else {
        cards = JSON.parse(cards);
    }
    let card = {
        to: document.querySelector("#to").value,
        from: document.querySelector("#from").value,
        title: document.querySelector("#title").value,
        subtitle: document.querySelector("#subtitle").value,
        message: document.querySelector("#message").value
    };
    cards.push(card);
    localStorage.setItem("writtenCards", JSON.stringify(cards));
});