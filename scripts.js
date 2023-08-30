//model
const tekstFelt = document.getElementById('tekstFelt');
const button = document.getElementById('button');
const app = document.getElementById('app');

let text = '';
let input;
let words = [];
let wordCounts = [];

//view
updateView();
function updateView() {
    app.innerHTML = /*HTML*/`
        ${text}
    `
}

//controller
button.addEventListener("click", handleClick);
function handleClick() {
    input = tekstFelt.value;
    cleanText();
    countText();
    updateView();
}

function cleanText() {
    text = '';
    input = input.replace(/[^\w\sà-ÿÀ-ß ]/g, "");
    input = input.split(' ');
}

function countText() {
    for (let n of input) {
         if (words.includes(n)) {
            wordCounts[words.indexOf(n)]++;
        } else {
            if (n === '') continue;
            words.push(n);
            wordCounts.push(1);
        }
    }
    x = words.length;
    for (let i = 0; i < x; i++) {
        text += words[i] + ': ' + wordCounts[i] + '<br>';
    }
}