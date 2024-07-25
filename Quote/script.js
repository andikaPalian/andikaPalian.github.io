const quoteText = document.querySelector(".quote"),
authorName = document.querySelector(".author .name"),
quoteBtn = document.querySelector("button"),
soundBtn = document.querySelector(".sound"),
copyBtn = document.querySelector(".copy");

// Function Random Quote
function randomQuote() {
    quoteBtn.classList.add("loading");
    quoteBtn.innerText = "Loading Quote...";
    //fetching random quotes/data dari API dan menguraikannya ke Javascript object
    fetch("https://api.quotable.io/random").then(res => res.json()).then(result => {
        quoteText.innerText = result.content;
        authorName.innerText = result.author;
        quoteBtn.innerText = "New Quote";
        quoteBtn.classList.remove("loading");
    });
}

soundBtn.addEventListener("click", () => {
    // Membuat instance SpeechSynthesisUtterance dengan teks yang akan diucapkan
    let bicara = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${ authorName.innerText}`);
    // Menggunakan SpeechSynthesis untuk mengucapkan teks
    speechSynthesis.speak(bicara);
});

copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText( quoteText.innerText);
});

quoteBtn.addEventListener("click", randomQuote);
