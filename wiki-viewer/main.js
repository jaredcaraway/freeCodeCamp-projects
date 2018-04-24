const random = document.querySelector("#random");
let search = document.querySelector("#search");
let httpRequest;
let payload = null;

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

function getRandomPage() {
    window.open("https://en.wikipedia.org/wiki/Special:Random", "_blank");
}

function submitQuery() {
    const encodedTerm = encodeURI(search.value);
    const query = urlFirstHalf + encodedTerm + urlSecondHalf;
    httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = handleResponse;
    httpRequest.open('GET', query, true);
    httpRequest.setRequestHeader( 'Api-User-Agent', 'Example/1.0' );
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
        console.log(payload);
}