const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P",
"Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l",
"m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", 
"6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=",
"{","[","}","]",",","|",":",";","<",">",".","?", "/"];

const symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=",
"{","[","}","]",",","|",":",";","<",">",".","?", "/"]

const nums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

const alphabets = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P",
"Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l",
"m","n","o","p","q","r","s","t","u","v","w","x","y","z",]

let randomCharacter = ""
let passwordLength = 15
let outputEl = document.querySelector(".form-el1")
let outputEl1 = document.querySelector(".form-el2")
let bodyEl = document.querySelector("body")

function generatePassword() {
    let newPassword = ""
    for (let i = 0; i < passwordLength; i++) {
        let randomCharacter = Math.floor(Math.random() * characters.length)
        newPassword += characters[randomCharacter]
        outputEl.value = newPassword

         let secondPassword = ""
        for (let j = 0; j < passwordLength; j++) {
            let randomCharacter = Math.floor(Math.random() * characters.length)
            secondPassword += characters[randomCharacter]
            outputEl1.value = secondPassword
            
        }
    }
}

function copyPassword() {
    outputEl.select()
    outputEl1.select()
    outputEl.setSelectionRange(0, 99999)
    outputEl1.setSelectionRange(0, 99999)
    navigator.clipboard.writeText(outputEl.value)
    navigator.clipboard.writeText(outputEl1.value)
    alert("Copied the text : " + outputEl.value)
    alert("Copied the text : " + outputEl1.value)
}

function getSymbolsOnly() {
    let newSymbols = ""
    for (let i = 0; i < passwordLength; i++) {
        let randomSymbol = Math.floor(Math.random() * symbols.length)
        newSymbols += symbols[randomSymbol]
        outputEl.value = newSymbols

        let secondSymbols = ""
        for (let j = 0; j < passwordLength; j++) {
            let randomSymbol = Math.floor(Math.random() * symbols.length)
            secondSymbols += symbols[randomSymbol]
            outputEl1.value = secondSymbols
            
        }
    }
}

function getNumberOnly() {
    let newNumber = ""
    for (let i = 0; i < passwordLength; i++) {
        let randomNum = Math.floor(Math.random() * nums.length)
        newNumber += nums[randomNum]
        outputEl.value = newNumber

        let secondNumber = ""
        for (let j = 0; j < passwordLength; j++) {
            let randomNum = Math.floor(Math.random() * nums.length)
            secondNumber += nums[randomNum]
            outputEl1.value = secondNumber
            
        }
    }
}

function getAlphabetOnly() {
    let newAlphabet = ""
    for (let i = 0; i < passwordLength; i++) {
        let randomAlpha = Math.floor(Math.random() * alphabets.length)
        newAlphabet += alphabets[randomAlpha]
        outputEl.value = newAlphabet

        let secondAlphabet = ""
        for (let j = 0; j < passwordLength; j++) {
            let randomAlpha = Math.floor(Math.random() * alphabets.length)
            secondAlphabet += alphabets[randomAlpha]
            outputEl1.value = secondAlphabet
            
        }
    }
}

function toggleBackground() {
    let mainHeading = document.querySelector("h2")
    let lineEl = document.querySelector("hr")
    let paraEl = document.querySelector("p")
    bodyEl.classList.toggle("light-mode")
    mainHeading.classList.toggle("dark-mode")
    lineEl.classList.toggle("dark-line")
    paraEl.classList.toggle("para")
    
}


