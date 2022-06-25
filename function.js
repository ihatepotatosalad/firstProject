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
let gameOverScreen = document.createElement('h1')
let imgVarDiv = document.getElementById('imgDiv')
let counter = 0
let rulesLine = document.getElementById('rules')
let livesCounter = 6
rulesLine.textContent = `Rules: try to guess the word with limited tries you have only ${livesCounter} lives`;
// let node = document.createTextNode('_')
let selectionDiv = document.getElementById('buttonDiv')
const selectionDivChildren = selectionDiv.getElementsByTagName('button');
let wordStorageDiv = document.getElementById('wordStore')
let letterStorageList = document.getElementsByClassName('letterStore')
let resetBtn = document.getElementById('resetButton')
let blankLetters = document.createElement('ul');
let newWordBtn = document.getElementById('nextWord')

//word bank declarations//
let wordBank = 'bigwords'
let testBank = ['bedroom', 'entertainment', 'computer', 'fish', 'anticipate']
let currentWord = []
const letterArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
//this function will cycle through the word to check the letters to check for a match
resetBtn.addEventListener('click', function (e) {
    selectionDiv.disabled = false;
    for (let i = 0; i < selectionDivChildren.length; i++) {
        selectionDivChildren[i].disabled = false;
    }
    livesCounter = 6
    rulesLine.textContent = `Rules: try to guess the word with limited tries you have only ${livesCounter} lives`;
    gameOverScreen.remove()
    wordBank = 'bigwords'
    testBank = ['bedroom', 'entertainment', 'computer', 'fish', 'anticipate']

})
selectionDiv.addEventListener('click', function (e) {
    check(e.target.id);
    // console.log(e.target.id);
    // livesDropCount()

})

newWordBtn.addEventListener('click', function (e) {
    // blankLetters.remove()
    if (testBank.length) {
        wordBank = testBank[0]
        console.log(wordBank)
        let savedWord = testBank.shift();
        console.log(testBank, wordBank);
        newWord()
    }
}
)
function getUserChoice(e) {

}
function livesDropCount() {
    if (livesCounter > 0) {
        livesCounter--;
        rulesLine.textContent = `Rules: try to guess the word with limited tries you have only ${livesCounter} lives`;

    }


    else if (!livesCounter) {

        selectionDiv.disabled = true;
        for (let i = 0; i < selectionDivChildren.length; i++) {
            selectionDivChildren[i].disabled = true;
        }
        gameOverScreen.textContent = ' Game Over Please Reset'
        imgVarDiv.append(gameOverScreen)

        console.log('gameOver')
    }
}


function newWord() {

    const currLetters = document.querySelectorAll('li');
    for (let letter of currLetters) {
        letter.remove();
    }
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
    let foundALetter = false
    let hiddenLetters = document.getElementsByClassName('hiddenLetter');


    for (i = 0; i < wordBank.length; i++) {


        console.log(wordBank[i], userSelection, 'line 158')
        if (wordBank[i].includes(userSelection)) {
            hiddenLetters[i].textContent = userSelection;

            foundALetter = true
            console.log('match')

        }
        else {

            console.log('no match found')
        }


    }
    if (foundALetter) {
        console.log('add 1')
    }
    else {
        livesDropCount()
        // livesCounter--
        // rulesLine.textContent = `Rules: try to guess the word with limited tries you have only ${livesCounter} lives`;
        // console.log(livesCounter)
    }
}

window.onload = () => {
    newWord();
}
