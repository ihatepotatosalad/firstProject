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
//word bank declarations//
let wordBank = 'bigwords'
const letterArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
//this function will cycle through the word to check the letters to check for a match

function getUserChoice(userInput) {



    console.log(userInput)



}
function main() {
    aPick.addEventListener('click', function () {
        getUserChoice('a')
        check()

    })
    bPick.addEventListener('click', function () {
        getUserChoice('b')
        check()
    })
    cPick.addEventListener('click', function () {
        getUserChoice('c')

    })
    dPick.addEventListener('click', function () {
        getUserChoice('d')

    })
    ePick.addEventListener('click', function () {
        getUserChoice('e')

    })
    fPick.addEventListener('click', function () {
        getUserChoice('f')

    })
    gPick.addEventListener('click', function () {
        getUserChoice('g')

    })
    hPick.addEventListener('click', function () {
        getUserChoice('h')

    })
    iPick.addEventListener('click', function () {
        getUserChoice('i')
        check()
    })
    jPick.addEventListener('click', function () {
        getUserChoice('j')

    })
    kPick.addEventListener('click', function () {
        getUserChoice('k')

    })
    lPick.addEventListener('click', function () {
        getUserChoice('l')

    })
    mPick.addEventListener('click', function () {
        getUserChoice('m')

    })
    nPick.addEventListener('click', function () {
        getUserChoice('n')

    })
    oPick.addEventListener('click', function () {
        getUserChoice('o')

    })
    pPick.addEventListener('click', function () {
        getUserChoice('p')

    })
    qPick.addEventListener('click', function () {
        getUserChoice('q')

    })
    rPick.addEventListener('click', function () {
        getUserChoice('r')

    })
    sPick.addEventListener('click', function () {
        getUserChoice('s')

    })
    tPick.addEventListener('click', function () {
        getUserChoice('t')

    })
    uPick.addEventListener('click', function () {
        getUserChoice('u')

    })
    vPick.addEventListener('click', function () {
        getUserChoice('v')

    })
    wPick.addEventListener('click', function () {
        getUserChoice('w')

    })
    xPick.addEventListener('click', function () {
        getUserChoice('x')

    })
    yPick.addEventListener('click', function () {
        getUserChoice('y')

    })
    zPick.addEventListener('click', function () {
        getUserChoice('z')

    })
}
//this function checks to see if the selected letter matches the letter in the array of the word using a for function
function check() {
    for (i = 0; i < wordBank.length; i++) {
        if (wordBank[i] === getUserChoice) {
            console.log('match')
        }
        else {
            console.log('no match')
        }
    }
}
main()