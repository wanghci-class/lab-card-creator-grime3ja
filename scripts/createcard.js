let previewBtn = document.getElementById("preview").addEventListener("click", function() {
    let title = document.querySelector("#title");
    let subtitle = document.querySelector("#subtitle");
    let recipient = document.querySelector("#to");
    let message = document.querySelector("#message");
    let sender = document.querySelector("#from");
    console.log(title + subtitle + recipient + message + sender);
});
let submitBtn = document.getElementById("submit");