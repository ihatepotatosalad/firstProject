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
const letterArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
function main() {
    rockChoice.addEventListener('click', function () {
        getUserChoice('rock')

    })
    paperChoice.addEventListener('click', function () {
        getUserChoice('paper')

    })
    scissorsChoice.addEventListener('click', function () {
        getUserChoice('scissors')

    })
}