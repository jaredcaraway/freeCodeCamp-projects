const random = document.querySelector("#random");
let search = document.querySelector("#search");

const urlFirstHalf = "https://en.wikipedia.org/w/api.php?action=query&srsearch=";
const urlSecondHalf = "&srprop=snippet&format=json&formatversion=2&list=search";
// https://en.wikipedia.org/w/api.php?action=query&srsearch=the%20wiggles&srprop=snippet&format=json&formatversion=2&list=search

random.addEventListener("click", getRandomPage);
search.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        alert("Enter key pressed");
    }
});

function getRandomPage() {
    window.open("https://en.wikipedia.org/wiki/Special:Random", "_blank");
}