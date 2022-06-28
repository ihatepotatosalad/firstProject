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
let combinedHiddenLetters = '';

let checkBtn = document.getElementById('checkWord')
let hintsDiv = document.getElementById('hints')
let gameOverScreen = document.createElement('h1')
let youWinScreen = document.createElement('h1')
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
let wordBank = 'tea'
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
    youWinScreen.remove()
    gameOverScreen.remove()

    testBank = ['bedroom', 'entertainment', 'computer', 'fish', 'anticipate',]
    wordBank = testBank[Math.floor(Math.random() * testBank.length)];
    hints()

    newWord()

})
selectionDiv.addEventListener('click', function (e) {
    check(e.target.id);
    e.target.disabled = true
    // console.log(e.target.id);
    // livesDropCount()

})

// checkBtn.addEventListener('click', function (e) {
//     console.log('85 line does work')
//     let hiddenLetters = document.querySelectorAll('li')
//     for (k = 0; k > hiddenLetters.length; k++) {
//         for (i = 0; i < wordBank.length; i++) {

//         }


//     }
//     if (hiddenLetters[k] === wordBank[i]) {
//         console.log('corrent kine 211')
//     } else {

//     }
//     console.log(hiddenLetters[k], 'line 77')
//     console.log(wordBank[k])
//     console.log('next line after')
// })


newWordBtn.addEventListener('click', function (e) {

    if (testBank.length) {
        wordBank = testBank[Math.floor(Math.random() * testBank.length)];


        let savedWord = testBank.shift();

        selectionDiv.disabled = false;
        for (let i = 0; i < selectionDivChildren.length; i++) {
            selectionDivChildren[i].disabled = false;
        }
        livesCounter = 6
        rulesLine.textContent = `Rules: try to guess the word with limited tries you have only ${livesCounter} lives`;
        combinedHiddenLetters = ''
        gameOverScreen.remove()
        youWinScreen.remove()
        newWord()
        hints()

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


    }
}
function hints() {
    const currHint = document.querySelectorAll('h3');
    for (let hint of currHint) {
        hint.remove();
    }
    let hintText = document.createElement('h3')
    if (wordBank === 'computer') {

        hintText.textContent = 'hint: what you are using now'
        // hintsDiv.append(hintText)
    }
    else if (wordBank === 'fish') {

        hintText.textContent = 'hint: swims in the sea'
        // hintsDiv.append(hintText)
    }
    else if (wordBank === 'entertainment') {

        hintText.textContent = 'hint: helps pass the time'
        // hintsDiv.append(hintText)
    }
    else if (wordBank === 'anticipate') {

        hintText.textContent = 'hint: when you are waiting for something'
        // hintsDiv.append(hintText)
    }
    else if (wordBank === 'bedroom') {

        hintText.textContent = 'hint: what you sleep in'
        // hintsDiv.append(hintText)
    }
    else if (wordBank === 'tea') {

        hintText.textContent = 'hint: a drink that keeps you calm'
        // hintsDiv.append(hintText)
    }
    hintsDiv.append(hintText)
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
            combinedHiddenLetters += hiddenLetters[i].textContent;
            console.log(combinedHiddenLetters, wordBank, 'line 211');
            if (combinedHiddenLetters === wordBank) {
                youWinScreen.textContent = 'you have won'
                console.log('hello form line 224')
                selectionDiv.disabled = true;
                for (let x = 0; x < selectionDivChildren.length; x++) {
                    selectionDivChildren[x].disabled = true;

                }
                imgVarDiv.append(youWinScreen)
            } else {
                console.log('keep guessing')
            }
            // combinedHiddenLetters === wordBank ? (,conso) : ;

            // console.log(combinedHiddenLetters)
            foundALetter = true





        }
        else {


        }


    }
    if (foundALetter) {


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
