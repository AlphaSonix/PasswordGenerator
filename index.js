const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let displayElOne = document.getElementById("display-el")
let displayElTwo = document.getElementById("display-el-two")
let copyButton = document.getElementById("copy-btn-one")
let stringOne = ""
let stringTwo = ""

function getRandomString() {
    for (let i = 0; i < 16; i++) {
        let indexNum = Math.floor(Math.random() * characters.length);
        stringOne += characters[indexNum];
    }
    for (let i = 0; i < 16; i++) {
        let indexNumTwo = Math.floor(Math.random() * characters.length);
        stringTwo += characters[indexNumTwo]
    }
    displayElOne.textContent = stringOne;
    displayElTwo.textContent = stringTwo;
}

function generatePassword() {
    stringOne = "";
    stringTwo = "";
    displayElOne.textContent = ""
    displayElTwo.textContent = ""
    getRandomString();
}

async function copyToClipboardOne() {
    try {
        await navigator.clipboard.writeText(displayElOne.innerText);
        alert("Password copied")
        } catch (err) {
            alert("Failed to copy")
            }
    }

async function copyToClipboardTwo() {
    try {
        await navigator.clipboard.writeText(displayElTwo.innerText);
        alert("Password copied")
        } catch (err) {
            alert("Failed to copy")
            }
    }