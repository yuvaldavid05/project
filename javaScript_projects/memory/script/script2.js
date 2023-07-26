const width = 4;
const height = 4;
const length = width * height;
const divs = [];
let isGameOver = false;
let x = 1;
const xArry = [];

const board = document.querySelector(".board");
board.style.gridTemplateColumns = `repeat(${width}, 1fr)`;


function createBoard() {
    for (let i = 0; i < length; i++) {
        const div = document.createElement('div');
        board.appendChild(div);
        divs.push(div);



        // const span = document.createElement('span');
        // span.innerHTML = i + 1;

        // const random = Math.floor(Math.random() * xArry
        //     .length);

        // const span = document.createElement('span');
        // span.innerHTML = xArry[random];

        // xArry.splice(xArry[random], 1);
        // divs.splice(divs[random], 1);

        // div.appendChild(span);

        // אירוע המופעל בלחיצה על העכבר
        div.addEventListener("click", ev => {
            if (isGameOver) {
                return;
            }

            ev.target.classList.add('showing')
        });

    }

    if (x <= length / 2) {
        xArry.push(x);
        x++;
    } else {
        x = 1;
        xArry.push(x);
        x++;
    }
    // div.appendChild(span);
    random(divs);
}

function random(arry) {
    // for (let i = 0; i <= arry.length; i++) { }
    // const random = Math.floor(Math.random() * divs.length);
    // const span = document.createElement('span');

    let i = 0;
    while (i <= arry.length) {
        let randomDiv = Math.floor(Math.random() * divs.length);
        let randomNum = Math.floor(Math.random() * xArry.length);

        if (divs[randomDiv] != null) {

            const div = divs[randomDiv];
            // const span = document.createElement('span');
            div.innerHTML = xArry[randomNum];
            xArry.splice(xArry[randomNum], 1);

            divs[randomDiv] = null;
            // const array1 = document.querySelectorAll(".board div");
            // const div1 = array1[randomDiv];
            // div.appendChild(span);
        }


    }


    // divs[random].span.innerHTML = x;
    // divs.splice(i, 1);
}

function gameOver() {
    board.classList.add('game-over');

    confetti({
        particleCount: 100,
        spread: 70,
        decay: 0.9,
        origin: { y: 0.6 }
    });

    const winner = document.createElement("div");
    winner.classList.add("winner");
    winner.innerHTML = "ניצחת";

    document.body.appendChild(winner);

    setTimeout(() => {
        location.reload();
    }, 5 * 1000);
}