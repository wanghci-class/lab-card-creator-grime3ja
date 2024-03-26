let previewBtn = document.getElementById("preview").addEventListener("click", function() {
    let title = document.querySelector("#title").value;
    let subtitle = document.querySelector("#subtitle").value;
    let recipient = document.querySelector("#to").value;
    let message = document.querySelector("#message").value;
    let sender = document.querySelector("#from").value;
    console.log(title + subtitle + recipient + message + sender);
});
let submitBtn = document.getElementById("submit");