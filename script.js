const adNum = document.getElementById("adNum");
const adContent = document.getElementById("adContent");
const adButton = document.getElementById("adButton");

const API_URL = "https://api.adviceslip.com/advice";

function get(url) {
    return fetch(url).then(resp => resp.json())
}

const API = { get }

function getQuotes() {
    API.get(API_URL).then(data => addQuote(data['slip']['advice'], data['slip']['id']))
}

function addQuote(quote, idNum) {
    adContent.innerHTML = '"' + quote + '"';
    adNum.innerHTML = "#" + idNum;
}

document.body.onload = getQuotes
adButton.addEventListener("click", () => getQuotes())
