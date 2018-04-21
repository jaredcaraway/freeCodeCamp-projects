const random = document.querySelector("#random");

document.addEventListener("click", getRandomPage);

function getRandomPage() {
    window.open("https://en.wikipedia.org/wiki/Special:Random", "_blank");
}