const width = 4;
const height = 4;
const length = width * height;
const divs = [];
let isGameOver = false;
let x = 1;
let xArray = [];

const board = document.querySelector(".board");
// board.style.gridTemplateColumns = `repeat(${width}, 1fr)`;


//פונקציה שבונה דיבים ללוח 
function showDiv() {
    for (let i = 0; i < length; i++) {
        const div = document.createElement('div');
        board.appendChild(div);
        divs.push(div);

        const span = document.createElement("span");
        span.innerHTML = xArray[i];
        div.appendChild(span);
    }
    // console.log(xArray)
    console.log(xArray);
}

function spanDivs(array1, array2) {

}

function buildArray() {
    for (let i = 0; i < 2; i++) {
        for (let x = 0; x < length / 2; i++) {
            xArray.push(x + 1);
        }
    }
    console.log(xArray);

    randomArray(xArray);
    showDiv();
}

buildArray();

//פונקציה שמערבבת מערך
function randomArray(arrChange) {
    let arr = [];
    const len = arrChange.length;

    for (let i = 0; i < len; i++) {
        const rand = Math.floor(Math.random() * arrChange.length);

        arr.push(arrChange[rand]);
        arrChange.splice(rand, 1);
    }

    arrChange = arr;
    console.log(arrChange);
}


function gameOver() {
    board.classList.add('game-over');

    const winner = document.createElement("div");
    winner.classList.add("winner");
    winner.innerHTML = "ניצחת";

    document.body.appendChild(winner);

    setTimeout(() => {
        location.reload();
    }, 5 * 1000);
}