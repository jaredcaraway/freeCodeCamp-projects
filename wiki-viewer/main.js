const random = document.querySelector("#random");
let search = document.querySelector("#search");

const urlFirstHalf = "https://en.wikipedia.org/w/api.php?action=query&srsearch=";
const urlSecondHalf = "&srprop=snippet&format=json&formatversion=2&list=search";
// https://en.wikipedia.org/w/api.php?action=query&srsearch=the%20wiggles&srprop=snippet&format=json&formatversion=2&list=search

random.addEventListener("click", getRandomPage);
search.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        if (!search.value) {
            alert("No search term entered!");
        }
    }
});

function getRandomPage() {
    window.open("https://en.wikipedia.org/wiki/Special:Random", "_blank");
}

function submitQuery() {

}