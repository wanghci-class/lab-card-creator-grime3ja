document.getElementById("preview").addEventListener("click", function() {
    let title = document.querySelector("#title").value;
    let subtitle = document.querySelector("#subtitle").value;
    let recipient = document.querySelector("#to").value;
    let message = document.querySelector("#message").value;
    let sender = document.querySelector("#from").value;
    
    document.querySelector(".title-text").textContent = title;
    document.querySelector(".subtitle-text").textContent = subtitle;

    document.querySelector(".to-text").textContent = recipient;
    document.querySelector(".message-text").textContent = message;
    document.querySelector(".from-text").textContent = sender;
});
document.getElementById("submit").addEventListener("click", function() {
    
});