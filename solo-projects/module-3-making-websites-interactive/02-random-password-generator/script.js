const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


const button = document.querySelector("button");

const passwordContainer1 = document.querySelector("#password1");
const passwordContainer2 = document.querySelector("#password2");

const lengthInput = document.querySelector("input");

function generatePassword() {
    let password1 = "";
    let password2 = "";

    if (lengthInput.value) {
        for (let i = 0; i < lengthInput.value; i++) {
            password1 += characters[getRandomNumber()]
            password2 += characters[getRandomNumber()];
        }
    } else {
        for (let i = 0; i < 15; i++) {
            password1 += characters[getRandomNumber()]
            password2 += characters[getRandomNumber()];
        }
    }

    passwordContainer1.textContent = password1;
    passwordContainer2.textContent = password2;
}

function getRandomNumber() {
    return Math.floor(Math.random() * characters.length);
}

button.addEventListener("click", generatePassword);


const passwordContainers = document.querySelectorAll(".password-container");

function copyPassword(e) {
    const idValue = e.target.getAttribute("id");

    // promise pending mevzusunu then ve catch ile bir şekilde çözebilmem gerekiyor sanırım ama ne yapacağımı bilmiyorum
    // ne gibi bir zararı olduğunu da bilmiyorum
    if (idValue === "password1") {
        navigator.clipboard.writeText(passwordContainer1.textContent)
        alert("Copied the text: " + passwordContainer1.textContent);
    } else {
        navigator.clipboard.writeText(passwordContainer1.textContent);
        alert("Copied the text: " + passwordContainer2.textContent);
    }
}

passwordContainers.forEach(passwordContainer => passwordContainer.addEventListener("click", copyPassword));
