const random = document.querySelector("#random");
let search = document.querySelector("#search");
let controls = document.querySelector("#controls");
let x = document.querySelector("#clearResults");

let httpRequest;
let payload = null;
let resultsShown = false;

const urlFirstHalf = "https://en.wikipedia.org/w/api.php?action=query&generator=search&gsrsearch=";
const urlSecondHalf = "&prop=extracts&exsentences=1&explaintext=true&format=json&formatversion=2&origin=*&exintro=true";
// https://en.wikipedia.org/w/api.php?action=query&generator=search&gsrsearch=queen&prop=extracts&exsentences=1&explaintext=true&format=json&formatversion=2&origin=*&exintro=true

random.addEventListener("click", getRandomPage);
search.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        if (!search.value) {
            alert("No search term entered!");
        } else {
            submitQuery();
        }
    }
});
x.addEventListener("click", clearResults);

function getRandomPage() {
    window.open("https://en.wikipedia.org/wiki/Special:Random", "_blank");
}

function submitQuery() {
    const encodedTerm = encodeURI(search.value);
    const query = urlFirstHalf + encodedTerm + urlSecondHalf;
    httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = handleResponse;
    httpRequest.open('GET', query, true);
    httpRequest.setRequestHeader('Api-User-Agent', 'Example/1.0');
    httpRequest.send();
    console.log(httpRequest.responseText);
}

function handleResponse() {
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
        if (httpRequest.status === 200) {
            displayResults();
        } else {
            alert("Error! Try again.");
        }
    }
}

function displayResults() {
    //convert string response to JSON and save to variable
    payload = JSON.parse(httpRequest.responseText);
    if (!resultsShown) {
        controls.classList.replace("align-items-center", "align-items-top");
        resultsShown = true;
    }
    console.log(payload);
}

function clearResults() {
    if (resultsShown) {
        // Remove results divs
        controls.classList.replace("align-items-top", "align-items-center");
        resultsShown = false;
    }
    search.value = "";
}