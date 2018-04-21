const random = document.querySelector("#random");

random.addEventListener("click", getRandomPage);

function getRandomPage() {
    window.open("https://en.wikipedia.org/wiki/Special:Random", "_blank");
}