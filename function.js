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
//declaration for the hangman parts
let headP = document.getElementById('headpiece')
let leftLegP = document.getElementById('leftLeg')
let rightLegP = document.getElementById('rightLeg')
let leftArmP = document.getElementById('leftArm')
let rightArmP = document.getElementById('rightArm')
let bodyP = document.getElementById('bodyPiece')
// more delcarations
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
let testBank = ['bedroom', 'entertainment', 'computer', 'fish', 'anticipate', 'peanut', 'mouse', 'table', 'chess', 'shoes', 'door']
let currentWord = []
const letterArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
//this function does basically the same thing as the new word buttton
resetBtn.addEventListener('click', function (e) {
    selectionDiv.disabled = false;
    for (let i = 0; i < selectionDivChildren.length; i++) {
        selectionDivChildren[i].disabled = false;
    }
    livesCounter = 6
    rulesLine.textContent = `Rules: try to guess the word with limited tries you have only ${livesCounter} lives`;
    youWinScreen.remove()
    gameOverScreen.remove()

    testBank = ['bedroom', 'entertainment', 'computer', 'fish', 'anticipate', 'peanut', 'mouse', 'table', 'chess', 'shoes', 'door']
    wordBank = testBank[Math.floor(Math.random() * testBank.length)];
    hints()

    newWord()
    headP.style.opacity = 0
    bodyP.style.opacity = 0
    leftArmP.style.opacity = 0
    leftLegP.style.opacity = 0
    rightArmP.style.opacity = 0
    rightLegP.style.opacity = 0

})
//this allows the buttons to be pressed and selects the id from the button clicked ie if a is clicked i gave the id for a =a
selectionDiv.addEventListener('click', function (e) {
    check(e.target.id);
    e.target.disabled = true
    // console.log(e.target.id);
    // livesDropCount()

})



//the purpose of this function is to commect to the new word button which will reset the lives counter back to default of 6 remove game over and you win screen
//it also resets the opacity of the stick man figure it uses math.random to randomly generate words form the bank
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
        headP.style.opacity = 0
        bodyP.style.opacity = 0
        leftArmP.style.opacity = 0
        leftLegP.style.opacity = 0
        rightArmP.style.opacity = 0
        rightLegP.style.opacity = 0

    }
}
)
function getUserChoice(e) {

}
//this function controls the lives drop it also allows the lives counter to not go below 0 while also increasing opacity when an answer is wrong
function livesDropCount() {
    if (livesCounter > 0) {
        livesCounter--;
        rulesLine.textContent = `Rules: try to guess the word with limited tries you have only ${livesCounter} lives`;
        if (livesCounter === 5) {
            headP.style.opacity = 100
        }
        if (livesCounter === 4) {
            bodyP.style.opacity = 100
        }
        if (livesCounter === 3) {
            leftArmP.style.opacity = 100
        }
        if (livesCounter === 2) {
            rightArmP.style.opacity = 100
        }
        if (livesCounter === 1) {
            leftLegP.style.opacity = 100
        }
        if (livesCounter === 0) {
            rightLegP.style.opacity = 100
        }


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
// this is where the hints are given it uses if statements to check what the word is in the bank so that it can find the most apporipiate hint to match it
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
    else if (wordBank === 'peanut') {

        hintText.textContent = 'hint: a nut that is a healthy snack'

    }
    else if (wordBank === 'door') {

        hintText.textContent = 'hint: allows you to enter your room'

    }
    else if (wordBank === 'mouse') {

        hintText.textContent = 'hint: another word for rat'

    }
    else if (wordBank === 'table') {

        hintText.textContent = 'hint: what you eat on'

    }
    else if (wordBank === 'chess') {

        hintText.textContent = 'hint: a complicated game with 64 squares'

    }
    else if (wordBank === 'shoes') {

        hintText.textContent = 'hint: what you wear on your feet'

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

//this function checks to see if the selected letter matches letter hidden in the background when ever a button is clicked it will disable that button to prevent the user form selecting a valie more than once
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
    hints()
    newWord();
}
