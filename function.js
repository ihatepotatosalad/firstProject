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
let selectionDiv = document.getElementById('buttonDiv')
let wordStorageDiv = document.getElementById('wordStore')
let letterStorageList = document.getElementsByClassName('letterStore')
let test1 = document.getElementById('test')
//word bank declarations//
let wordBank = 'bigwords'
const letterArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
//this function will cycle through the word to check the letters to check for a match

selectionDiv.addEventListener('click', function (e) {
    check(e.target.id);
    // console.log(e.target.id);
})

function getUserChoice(e) {






}
//this function checks to see if the selected letter matches the letter in the array of the word using a for function
function check(userSelection) {
    console.log(userSelection, 'line 156', wordBank)
    for (i = 0; i < wordBank.length; i++) {
        console.log(wordBank[i], userSelection, 'line 158')
        if (wordBank[i] === userSelection) {
            test1.textContent = wordBank[i]
            console.log('match')
        }
        else {
            console.log('no match found')

        }
    }
}
// main()