const random = document.querySelector("#random");
const search = document.querySelector("#search");

random.addEventListener("click", getRandomPage);
search.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        alert("Enter key pressed");
    }
});

function getRandomPage() {
    window.open("https://en.wikipedia.org/wiki/Special:Random", "_blank");
}