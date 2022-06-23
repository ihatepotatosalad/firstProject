//declaration for the buttons
let aPick = document.getElementById('a')
let bPick = document.getElementById('b')
let cPick = document.getElementById('c')
let dPick = document.getElementById('d')
let ePick = document.getElementById('e')
let fPick = document.getElementById('f')
let gPick = document.getElementById('g')
let hPick = document.getElementById('h')
let iPick = document.getElementById('i')
let jPick = document.getElementById('j')
let kPick = document.getElementById('k')
let lPick = document.getElementById('l')
let mPick = document.getElementById('m')
let nPick = document.getElementById('n')
let oPick = document.getElementById('o')
let pPick = document.getElementById('p')
let qPick = document.getElementById('q')
let rPick = document.getElementById('r')
let sPick = document.getElementById('s')
let tPick = document.getElementById('t')
let uPick = document.getElementById('u')
let vPick = document.getElementById('v')
let wPick = document.getElementById('w')
let xPick = document.getElementById('x')
let yPick = document.getElementById('y')
let zPick = document.getElementById('z')
let counter = 0
let rulesLine = document.getElementById('rules')
let livesCounter = 6
rulesLine.textContent = `Rules: try to guess the word with limited tries you have only ${livesCounter} lives`;
// let node = document.createTextNode('_')
let selectionDiv = document.getElementById('buttonDiv')
let wordStorageDiv = document.getElementById('wordStore')
let letterStorageList = document.getElementsByClassName('letterStore')

let blankLetters = document.createElement('ul');

//word bank declarations//
let wordBank = 'bigwords'
const letterArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
//this function will cycle through the word to check the letters to check for a match

selectionDiv.addEventListener('click', function (e) {
    check(e.target.id);
    // console.log(e.target.id);
    // livesDropCount()

})

function getUserChoice(e) {

}
function livesDropCount() {
    if (counter--) {
        livesCounter--
        rulesLine.textContent = `Rules: try to guess the word with limited tries you have only ${livesCounter} lives`;
    } else {

        rulesLine.textContent = `Rules: try to guess the word with limited tries you have only ${livesCounter} lives`;
    }
}

function newWord() {

    for (i = 0; i < wordBank.length; i++) {

        let moreText = document.createElement('li')
        // node = document.createTextNode(blankLine)
        moreText.textContent = '_';
        moreText.setAttribute('class', 'hiddenLetter');
        console.log('line 54')
        blankLetters.append(moreText);
        // moreText.appendChild(node)
        wordStorageDiv.append(blankLetters)

    }

}
//this function checks to see if the selected letter matches the letter in the array of the word using a for function
function check(userSelection) {
    let hiddenLetters = document.getElementsByClassName('hiddenLetter');
    // console.log(hiddenLetters);

    for (i = 0; i < wordBank.length; i++) {
        // for (j = 0; j < wordStorageDiv.length; j++) {
        //     console.log('line 55 works')
        // }

        console.log(wordBank[i], userSelection, 'line 158')
        if (wordBank[i] === userSelection) {
            hiddenLetters[i].textContent = userSelection;
            // node = wordBank[i]
            // console.

            console.log('match')

        }
        else {

            console.log('no match found')


        }
        // if (hiddenLetters[i] != userSelection) {
        //     counter--
        // }
    }
}

newWord()
